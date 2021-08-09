import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import { EuiErrorBoundary } from '@elastic/eui';

import './app.scss';

import Chrome from '../components/chrome';

const EuiApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Djordje Stojiljkovic: Full Stack Software Developer</title>
    </Head>
    <Chrome>
      <EuiErrorBoundary>
        <Component {...pageProps} />
      </EuiErrorBoundary>
    </Chrome>
  </>
);

export default EuiApp;
