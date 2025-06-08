import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import {Badge} from "@site/src/components/badge/Badge";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HighlightCodeBlock from "@site/src/components/HighlightCodeBlock";

export default {
    ...MDXComponents,
    Badge,
    Tabs,
    TabItem,
    code: (props: any) => {
        if (!props.className) {
            return <code {...props} />;
        }

        return <HighlightCodeBlock {...props} />;
    },
};
