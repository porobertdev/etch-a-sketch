import React from 'react';

interface ToolbarProps {
    children: React.ReactNode;
}

const Toolbar = ({ children }: ToolbarProps) => {
    return <div id="toolbar">{children}</div>;
};

export default Toolbar;
