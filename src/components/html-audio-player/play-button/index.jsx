import React, { forwardRef } from 'react';
import { PlayArrow as PlayIcon } from '@material-ui/icons';
import MediaButton from '../media-button';

export default forwardRef(({ className = ''}, ref) => {
    const clickHandler = media => {
        if (media) {
            media.play();
        }
    };

    return (
        <MediaButton ref={ref} className={className} clickHandler={clickHandler}>
            <PlayIcon />
        </MediaButton>
    );
})