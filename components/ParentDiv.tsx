import React, { ReactNode } from 'react';

interface ParentDivProps {
    children: ReactNode;
    parentClassName?: string;
    childClassName?: string;
}

const ParentDiv: React.FC<ParentDivProps> = ({ children, parentClassName = "", childClassName = "" }) => {
    return (
        // Outer container with flex layout and optional custom class
        <div className={`${parentClassName} flex h-full w-full justify-center`}>
            {/* Inner container with flex layout, centered content, and optional custom class */}
            <div className={`${childClassName} w-full flex flex-col items-center h-full px-[12px] md:px-0 md:w-[678px] lg:w-[930px] xl:w-[1208px]`}>
                {children}
            </div>
        </div>
    );
};

export default ParentDiv;
