import React, { forwardRef } from 'react';
import { VolumeUp as MuteIcon } from '@material-ui/icons';
import MediaButton from '../media-button';

export default forwardRef(({ className = ''}, ref) => {
    const clickHandler = media => {
        if (media) {
            media.muted = true;
        }
    };

    return (
        <MediaButton ref={ref} className={className} clickHandler={clickHandler}>
            <MuteIcon />
        </MediaButton>
    );
})