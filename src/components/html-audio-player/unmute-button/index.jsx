import React, { forwardRef } from 'react';
import { VolumeOff as UnmuteIcon } from '@material-ui/icons';
import MediaButton from '../media-button';

export default forwardRef(({ className = ''}, ref) => {
    const clickHandler = media => {
        if (media) {
            media.muted = false;
        }
    };

    return (
        <MediaButton ref={ref} className={className} clickHandler={clickHandler}>
            <UnmuteIcon />
        </MediaButton>
    );
})