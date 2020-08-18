import React, { forwardRef, useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';

export default forwardRef(({ className = '', clickHandler, children }, ref) => {
    const [currentRef, setCurrentRef] = useState(null);

    useEffect(() => {
        if (ref) {
            setCurrentRef(ref.current)
        }
    }, [ref]);

    return (
        <IconButton onClick={() => clickHandler(currentRef)} className={className}>
            {children}
        </IconButton>
    );
})