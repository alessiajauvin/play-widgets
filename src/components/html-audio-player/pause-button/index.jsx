import React, { forwardRef } from 'react';
import { Pause as PauseIcon } from '@material-ui/icons';
import MediaButton from '../media-button';

export default forwardRef(({ className = ''}, ref) => {
    const clickHandler = media => {
        if (media) {
            media.pause();
        }
    };

    return (
        <MediaButton ref={ref} className={className} clickHandler={clickHandler}>
            <PauseIcon />
        </MediaButton>
    );
})