"use client";

import SideBar from "../components/sideBar/SideBar";
import { NextUIProvider, CssBaseline } from "@nextui-org/react";
import { Container, Row, Col } from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>{CssBaseline.flush()}</head>
      <body>
        <NextUIProvider>
          <Container>
            <Row>
              <Col>
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
