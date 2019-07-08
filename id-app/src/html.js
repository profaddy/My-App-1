//-----------  Imports  -----------//
//eslint-disable-next-line import/no-webpack-loader-syntax
import 'file-loader?name=[name].[ext]!@miro/core-ui/lib/assets/favicon.ico';

import globalStyles from '@miro/core-ui/lib/styles/globals';
import StaticScreen from '@miro/core-ui/lib/components/StaticScreen';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

//-----------  HTML Template  -----------//

export default () => {
  const StaticComponent = (
    <StaticScreen isLoading={true} isLoggedIn={false} theme="dark" />
  );

  const sheet = new ServerStyleSheet();
  const authHTML = renderToString(sheet.collectStyles(StaticComponent));
  const authCSS = sheet.getStyleTags();

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${
          'development' !== process.env.NODE_ENV
            ? `
          <link rel="icon" href="${
            process.env.APP_URL
          }/favicon.ico" type="image/x-icon" />
        `
            : ''
        }
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi">

        <title>${process.env.APP_TITLE}</title>
        <meta name="description" content="Build the future of brain healthcare">
        <meta name="keywords" content="Miro,Brain">
        <meta name="robots" content="noindex">

        <style type="text/css">${globalStyles}</style>
      </head>

      <body>
        <noscript>If you're seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>, please <strong>enable JS</strong> to make this app work.</noscript>
        <div id="${process.env.APP_ROOT}">
          ${authCSS}
          ${authHTML}
        </div>

        <div id="${process.env.APP_ROOT}-modal"></div>
      </body>
    </html>
  `;
};
