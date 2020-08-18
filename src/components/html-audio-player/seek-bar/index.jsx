import React, { forwardRef, useState, useEffect } from 'react';
import { Slider, withStyles } from '@material-ui/core';
import styles from './styles';
import clsx from 'clsx';

export const SeekBar = forwardRef(({ className = '', classes}, ref) => {
    const wrapperClasses = { 'seek-bar': classes['seek-bar']};
    delete classes['seek-bar'];

    const [currentRef, setCurrentRef] = useState(null);

    const [max, setMax] = useState(0);
    const [currentTimestamp, setCurrentTimestamp] = useState(0);

    useEffect(() => {
        if (ref) {
            setCurrentRef(ref.current);
        }
    }, [ref]);

    useEffect(() => {
        if (currentRef) {
            const media = currentRef;
            const durationChangeHandler = () => {
                setMax(media.duration);
            };
            media.addEventListener('durationchange', durationChangeHandler);

            return () => {
                media.removeEventListener('durationchange', durationChangeHandler);
            };
        }
    }, [currentRef]);

    useEffect(() => {
        if (currentRef) {
            const media = currentRef;
            const timeUpdateHandler = () => {
                setCurrentTimestamp(media.currentTime);
            };
            media.addEventListener('timeupdate', timeUpdateHandler);

            return () => {
                media.removeEventListener('timeupdate', timeUpdateHandler);
            };
        }
    }, [currentRef])

    const onSeek = (event, value) => {
        event.preventDefault();
        if (currentRef) {
            currentRef.currentTime = value;
        }
    }

    // The wrapper `div` exists so that placement is controlled by the parent
    return (
        <div className={clsx(wrapperClasses['seek-bar'], className)} >
            <Slider
                defaultValue={0}
                min={0}
                max={max}
                value={currentTimestamp}
                onChangeCommitted={onSeek}
                classes={classes}
            />
        </div>
    );
});

export default withStyles(styles)(
    forwardRef((props, ref) => <SeekBar ref = {ref} {...props} />)
);