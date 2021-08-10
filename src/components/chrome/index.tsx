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
    </EuiPage>
  );
};

export default Chrome;
