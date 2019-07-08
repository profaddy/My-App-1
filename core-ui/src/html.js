//-----------  Imports  -----------//
//eslint-disable-next-line import/no-webpack-loader-syntax
import 'file-loader?name=[name].[ext]!assets/favicon.ico';

import globalStyles from 'styles/globals';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import BasePortal from 'containers/StaticOverlay/BasePortal';

//-----------  HTML Template  -----------//

export default ({ theme }) => {
  const StaticComponent = (
    <BasePortal isLoading={true} isLoggedIn={false} theme={theme} />
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
        <div id="${process.env.APP_ROOT}"></div>

        <div id="${process.env.APP_ROOT}-static">
          ${authCSS}
          ${authHTML}
        </div>

        <div id="${process.env.APP_ROOT}-auth"></div>

        <div id="${process.env.APP_ROOT}-modal"></div>
      </body>
    </html>
  `;
};
