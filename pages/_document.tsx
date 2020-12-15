import React from 'react';
import NextDocument, { Html, Head, NextScript, Main, DocumentContext } from 'next/document';
import { ColorModeScript } from "@chakra-ui/react";

export default class MrkDocument extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
