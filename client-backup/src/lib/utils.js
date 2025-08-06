import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

// Combine class names using clsx and tailwind-merge
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format a camelCase or PascalCase string into a readable format
export function formatEnumString(str) {
  return str.replace(/([A-Z])/g, " $1").trim();
}

// Format a numeric value into a price label
export function formatPriceValue(value, isMin) {
  if (value === null || value === 0)
    return isMin ? "Any Min Price" : "Any Max Price";
  if (value >= 1000) {
    const kValue = value / 1000;
    return isMin ? `$${kValue}k+` : `<$${kValue}k`;
  }
  return isMin ? `$${value}+` : `<$${value}`;
}

// Clean up URL or query parameters by removing undefined, null, empty, or "any" values
export function cleanParams(params) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== "any" &&
        value !== "" &&
        (Array.isArray(value) ? value.some((v) => v !== null) : value !== null)
    )
  );
}

// Execute a mutation with toast messages
export const withToast = async (mutationFn, messages) => {
  const { success, error } = messages;

  try {
    const result = await mutationFn;
    if (success) toast.success(success);
    return result;
  } catch (err) {
    if (error) toast.error(error);
    throw err;
  }
};

// Create a new user in your backend database
export const createNewUserInDatabase = async (
  user,
  idToken,
  userRole,
  fetchWithBQ
) => {
  const createEndpoint =
    userRole?.toLowerCase() === "manager" ? "/managers" : "/tenants";

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      name: user.username,
      email: idToken?.payload?.email || "",
      phoneNumber: "",
    },
  });

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
};
