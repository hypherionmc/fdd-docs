import React, { JSX } from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import type { Props } from '@theme/DocItem';
import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import Admonition from '@theme/Admonition';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function DocItemWrapper(props: Props): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const activePlugin = useActivePlugin();
    const activeVersion = useActiveVersion(activePlugin?.pluginId);

    const isLatest = activeVersion?.isLast;

    return (
        <>
            {isLatest && (
                <Admonition type="danger" title={"Heads Up!"}>
                    <p>This documentation is only for {siteConfig.title} Version 4.x and newer. For older versions, please choose the correct version from the dropdown at the top of the page</p>
                </Admonition>
            )}
            <OriginalDocItem {...props} />
        </>
    );
}
