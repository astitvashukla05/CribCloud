"use client"

import StoreProvider from "@/state/redux"

export default function Providers({ children }) {
  return <StoreProvider>{children}</StoreProvider>;
}