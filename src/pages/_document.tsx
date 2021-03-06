import React, { ReactElement } from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { defaultTheme, Theme, themeConfig } from '../lib/theme';

const pathPrefix = process.env.PATH_PREFIX;

function themeLink(theme: Theme): ReactElement {
  let disabledProps = {};

  if (theme.id !== defaultTheme) {
    disabledProps = {
      disabled: true,
      'aria-disabled': true,
    };
  }

  return (
    <link
      rel="stylesheet"
      href={`${pathPrefix}/${theme.publicPath}`}
      data-name="eui-theme"
      data-theme-name={theme.name}
      data-theme={theme.id}
      key={theme.id}
      {...disabledProps}
    />
  );
}

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>{themeConfig.availableThemes.map(each => themeLink(each))}</Head>
        <body className="guideBody">
          <Main />
          <NextScript />
        </body>
        <script src="https://use.fontawesome.com/d120348b09.js" type="628966b9620b7a8806a3bc0c-text/javascript" />
      </Html>
    );
  }
}
