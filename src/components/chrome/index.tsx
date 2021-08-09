import React, { FC } from 'react';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

import { EuiPage, EuiPageBody } from '@elastic/eui';

import styles from './chrome.module.scss';

const Chrome: FC = ({ children }) => {
  return (
    <EuiPage className={styles.guidePage}>
      <EuiPageBody className="home-template homepage">
        {children}
      </EuiPageBody>
      <script src="https://use.fontawesome.com/d120348b09.js" type="628966b9620b7a8806a3bc0c-text/javascript" />
    </EuiPage>
  );
};

export default Chrome;
