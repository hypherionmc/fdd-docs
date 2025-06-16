import React, { JSX } from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import type { Props } from '@theme/DocItem';
import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import Admonition from '@theme/Admonition';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useAllPluginInstancesData} from "@docusaurus/useGlobalData";

export default function DocItemWrapper(props: Props): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const activePlugin = useActivePlugin();
    const activeVersion = useActiveVersion(activePlugin?.pluginId);
    const allDocsData = useAllPluginInstancesData('docusaurus-plugin-content-docs');
    const docsData = allDocsData['default'];
    let versions = [];

    if (docsData) {
        // @ts-ignore
        versions = docsData.versions.filter(v => v.name !== 'current' && !v.isLast);
    }

    const isLatest = activeVersion?.isLast;

    return (
        <>
            {isLatest && (
                <Admonition type="danger" title={"Heads Up!"}>
                    <p>
                        This documentation is only for {siteConfig.title} Version 4.x and newer.{" "}
                        {docsData && versions.length > 0 ? (
                            <>
                                Docs for other versions:{" "}
                                {versions.map((v, index) => (
                                    <span key={v.name}>
                                        <a href={`${v.path}/intro`}><b>Version {v.label}</b></a>
                                      {index < versions.length - 1 && ", "}
                                    </span>
                                ))}
                            </>
                        ) : (
                            <>No other versions available.</>
                        )}
                    </p>
                </Admonition>
            )}
            <OriginalDocItem {...props} />
        </>
    );
}
