import React from "react";
import styles from './Expand.module.css';
import {ChevronDownIcon, ChevronRightIcon, ChevronUpIcon} from "@primer/octicons-react";

type Props = {
    className?: string;
    title?: string;
    children?: React.ReactNode;
}

export const Expand: React.FC<Props> = ({ className = '', title = '', children }) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className={`${styles.expandBox} ${className}`}>
            <div className={`${styles.expandHeader}`} onClick={() => setExpanded(!expanded)}>
                {!expanded && <ChevronRightIcon size={16} onClick={() => setExpanded(true)} />}
                {expanded && <ChevronDownIcon size={16} onClick={() => setExpanded(false)} />}
                {title}
            </div>

            {expanded &&
                <div className={`${styles.expandBody}`}>
                    {children}
                </div>
            }
        </div>
    )
}