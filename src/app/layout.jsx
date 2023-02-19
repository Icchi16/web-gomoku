"use client";

import SideBar from "../components/SideBar/SideBar";
import { NextUIProvider, CssBaseline } from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
      <html>
        <head>{CssBaseline.flush()}</head>
        <body>
          <SideBar />
          {children}
        </body>
      </html>
    </NextUIProvider>
  );
}
