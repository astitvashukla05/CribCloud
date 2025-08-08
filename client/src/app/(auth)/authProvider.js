"use client";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Heading,
  Radio,
  RadioGroupField,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter, usePathname, redirect } from "next/navigation";
import { useEffect } from "react";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID,
    },
  },
});

const components = {
  Header() {
    return (
      <View className="mt-4 mb-7">
        <Heading level={3} className="!text-2xl !font-bold">
          RENT
          <span className="text-secondary-700 font-light hover:!text-primary-300">
            IFUL
          </span>
        </Heading>
        <p className="text-muted-foreground mt-2">
          <span className="font-bold">Welcome!</span> Please sign in to continue
        </p>
      </View>
    );
  },
  SignIn: {
    Footer() {
      const { toSignUp } = useAuthenticator();

      const handleSignUp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toSignUp(); // Only change authenticator state
      };

      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleSignUp}
              className="text-primary hover:underline text-secondary-700 border-none p-0"
            >
              Sign up here
            </button>
          </p>
        </View>
      );
    },
  },
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();
      return (
        <>
          <Authenticator.SignUp.FormFields />
          <RadioGroupField
            legend="Role"
            name="custom:role"
            errorMessage={validationErrors?.["custom:role"]}
            hasError={!!validationErrors?.["custom:role"]}
            isRequired
          >
            <Radio value="tenant">Tenant</Radio>
            <Radio value="manager">Manager</Radio>
          </RadioGroupField>
        </>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      const router = useRouter();
      const handleSignIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toSignIn(); // Only change authenticator state
      };
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={handleSignIn}
              className="text-primary hover:underline text-secondary-700 border-none p-0"
            >
              LogIn
            </button>
          </p>
        </View>
      );
    },
  },
};
const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
      isRequired: true,
      label: "Email",
    },
    password: {
      placeholder: "Enter your password",
      isRequired: true,
      label: "Password",
    },
  },
  signUp: {
    email: {
      order: 1,
      placeholder: "Enter your email",
      isRequired: true,
      label: "Email",
    },
    username: {
      order: 2,
      placeholder: "Enter your username",
      isRequired: true,
      label: "Username",
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      isRequired: true,
      label: "Password",
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      isRequired: true,
      label: "Confirm Password",
    },
  },
};

export default function Auth({ children }) {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage =
    pathname.startsWith("/manager") || pathname.startsWith("/tenants");

  // Redirect authenticated users away from auth pages
  useEffect(() => {
    if (user && isAuthPage) {
      router.push("/");
    }
  }, [user, isAuthPage, router]);

  // Allow access to public pages without authentication
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }
  // ...existing code...
  return (
    <div className="fixed inset-0 min-h-screen w-full overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/signup.png')",
          filter: "blur(8px)",
          transform: "scale(1.1)", // Prevent white edges when blurred
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-[400px] bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl">
          <div className="p-6">
            <Authenticator
              initialState={pathname.includes("signup") ? "signUp" : "signIn"}
              components={components}
              formFields={formFields}
            >
              {() => <>{children}</>}
            </Authenticator>
          </div>
        </div>
      </div>
    </div>
  );
}
