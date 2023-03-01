"use client";

import SideBar, { SIDEBAR_SIZE } from "../components/sideBar/SideBar";
import {
  NextUIProvider,
  CssBaseline,
  Container,
  Row,
  Col,
} from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>{CssBaseline.flush()}</head>
      <body>
        <NextUIProvider>
          <Row gap={0} css={{ position: "relative", height: "calc(100vh)" }}>
            <Col
              css={{
                maxWidth: SIDEBAR_SIZE,
                display: "flex",
                justifyContent: "center",
                "&::before": {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  width: SIDEBAR_SIZE,
                  backgroundColor: "$blue100",
                  top: "0",
                  left: "0",
                  bottom: "0",
                },
              }}
            >
              <SideBar />
            </Col>
            <Col>{children}</Col>
          </Row>
        </NextUIProvider>
      </body>
    </html>
  );
}

// Read this to fix delayed style loading on 1st render
// https://beta.nextjs.org/docs/styling/css-in-js
