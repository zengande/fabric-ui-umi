import React from 'react';
import styles from './index.css';
import { PrimaryButton, Icon } from 'office-ui-fabric-react'

export default function () {
    return (
        <div className={styles.normal}>
            <Icon iconName="Design" className={styles.welcome} />
            <ul className={styles.list}>
                <li>
                    <a href="https://developer.microsoft.com/zh-cn/fabric">Office UI Fabri</a>
                </li>
                <li>
                    <PrimaryButton >
                        Getting Started
                    </PrimaryButton>
                </li>
            </ul>
        </div>
    );
}
