"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = require("unist-util-visit");
const badgePlugin = () => {
    return (tree) => {
        (0, unist_util_visit_1.visit)(tree, 'text', (node, index, parent) => {
            const regex = /\[!badge\s+(.*?)\]/g;
            const matches = [...node.value.matchAll(regex)];
            if (matches.length > 0 && parent && typeof index === 'number') {
                const newChildren = [];
                let lastIndex = 0;
                for (const match of matches) {
                    const start = match.index;
                    const end = start + match[0].length;
                    const before = node.value.slice(lastIndex, start);
                    const props = {};
                    const attrRegex = /(\w+)=["']([^"']+)["']/g;
                    let attrMatch;
                    while ((attrMatch = attrRegex.exec(match[1])) !== null) {
                        const [, key, value] = attrMatch;
                        props[key] = value;
                    }
                    if (before) {
                        newChildren.push({ type: 'text', value: before });
                    }
                    newChildren.push({
                        type: 'mdxJsxTextElement',
                        name: 'Badge',
                        attributes: [
                            { type: 'mdxJsxAttribute', name: 'variant', value: props.variant || 'default' },
                            { type: 'mdxJsxAttribute', name: 'text', value: props.text || '' },
                        ],
                        children: [],
                    });
                    lastIndex = end;
                }
                const after = node.value.slice(lastIndex);
                if (after) {
                    newChildren.push({ type: 'text', value: after });
                }
                parent.children.splice(index, 1, ...newChildren);
            }
        });
    };
};
exports.default = badgePlugin;
