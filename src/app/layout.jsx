"use client";

import SideBar from "../components/sideBar/SideBar";
import { NextUIProvider, CssBaseline } from "@nextui-org/react";
import { Container, Row, Col, css } from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>{CssBaseline.flush()}</head>
      <body>
        <NextUIProvider>
          <Container gap={0}>
            <Row gap={0}>
              <Col css={{ maxWidth: 300 }}>
                <SideBar />
              </Col>
              <Col>{children}</Col>
            </Row>
          </Container>
        </NextUIProvider>
      </body>
    </html>
  );
}

// Read this to fix delayed style loading on 1st render
// https://beta.nextjs.org/docs/styling/css-in-js
