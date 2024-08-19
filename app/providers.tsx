"use client";

import { Toaster, toast } from "sonner";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Toaster theme="dark" richColors />
      {children}
    </ThemeProvider>
  );
}
