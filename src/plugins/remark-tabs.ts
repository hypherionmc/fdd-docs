import { Plugin } from 'unified';

const remarkTabs: Plugin = () => {
    return (tree: any) => {
        const newChildren: any[] = [];
        let inTabs = false;
        let currentTabLabel: string | null = null;
        let currentTabChildren: any[] = [];
        let tabsNode: any = null;

        const flushTab = () => {
            if (currentTabLabel !== null) {
                const tabItemNode = {
                    type: 'mdxJsxFlowElement',
                    name: 'TabItem',
                    attributes: [
                        { type: 'mdxJsxAttribute', name: 'value', value: currentTabLabel },
                        { type: 'mdxJsxAttribute', name: 'label', value: currentTabLabel },
                    ],
                    children: currentTabChildren,
                };
                tabsNode.children.push(tabItemNode);
                currentTabLabel = null;
                currentTabChildren = [];
            }
        };

        for (let i = 0; i < tree.children.length; i++) {
            const node = tree.children[i];

            if (
                node.type === 'paragraph' &&
                node.children?.[0]?.type === 'text'
            ) {
                const value = node.children[0].value.trim();
                if (value.startsWith('+++')) {
                    const label = value.slice(3).trim();

                    // Closing +++ marker
                    if (label === '') {
                        flushTab();
                        if (tabsNode) {
                            newChildren.push(tabsNode);
                            tabsNode = null;
                        }
                        inTabs = false;
                    } else {
                        if (!inTabs) {
                            tabsNode = {
                                type: 'mdxJsxFlowElement',
                                name: 'Tabs',
                                attributes: [],
                                children: [],
                            };
                            inTabs = true;
                        } else {
                            flushTab();
                        }
                        currentTabLabel = label;
                    }

                    continue; // 🚫 Don't include this marker node in tab content
                }
            }

            if (inTabs) {
                currentTabChildren.push(node);
            } else {
                newChildren.push(node);
            }
        }

        if (inTabs) {
            flushTab();
            if (tabsNode) newChildren.push(tabsNode);
        }

        tree.children = newChildren;
    };
};

export default remarkTabs;
