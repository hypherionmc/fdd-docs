import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import { useColorMode } from '@docusaurus/theme-common';
import 'highlight.js/styles/atom-one-dark.css';

type Props = {
    className?: string;
    metastring?: string;
    children: string;
};

const dedent = (str: string): string => {
    const lines = str.replace(/\t/g, '    ').split('\n');
    const nonEmpty = lines.filter(line => line.trim() !== '');
    const minIndent = Math.min(
        ...nonEmpty.map(line => line.match(/^ */)?.[0].length ?? 0)
    );
    return lines.map(line => line.slice(minIndent)).join('\n');
};

const HighlightCodeBlock: React.FC<Props> = ({ className = '', metastring = '', children }) => {
    const { colorMode } = useColorMode();
    const codeRef = useRef<HTMLElement>(null);
    const [copied, setCopied] = useState(false);

    const match = className.match(/language-(\w+)(\s+title="(.+?)")?/);
    const language = match?.[1] ?? '';
    const titleMatch = metastring.match(/title="(.+?)"/);
    const title = titleMatch?.[1] ?? '';

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [dedent(children), colorMode]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(children.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="code-block-container relative my-4 border rounded-md bg-[#1e1e1e]">
            {title && (
                <div className="code-title px-3 py-2 text-sm font-semibold text-white bg-[#111] rounded-t-md border-b border-[#333]">
                    {title}
                </div>
            )}

            <div className={'code-container'}>
                <div className="code-actions">
                    <button
                        onClick={handleCopy}
                        className="text-white bg-[#333] hover:bg-[#444] px-2 py-1 rounded text-xs"
                        title="Copy code"
                    >
                        {copied ? 'Copied!' : "Copy"}
                    </button>
                </div>

                <pre ref={codeRef} className={`hljs hljs-custom language-${language}`}>
                  {dedent(children)}
                </pre>
            </div>
        </div>
    );
};

export default HighlightCodeBlock;
