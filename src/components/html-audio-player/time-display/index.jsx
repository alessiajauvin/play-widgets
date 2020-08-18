import React, { forwardRef, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import { Duration } from 'luxon';
import styles from './styles';
import clsx from 'clsx';

export const TimeDisplay = forwardRef(({ className, classes }, ref) => {
    const [currentRef, setCurrentRef] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentDuration, setCurrentDuration] = useState(0);

    useEffect(() => {
        if (ref && ref.current) {
            setCurrentRef(ref.current)
        }
    }, [ref]);

    useEffect(() => {
        if (currentRef) {
            const media = currentRef;
            const durationChangeHandler = () => {
                setCurrentDuration(media.duration);
            }
            media.addEventListener('durationchange', durationChangeHandler);

            return () => {
                media.removeEventListener('durationchange', durationChangeHandler);
            };
        }
    }, [currentRef]);

    useEffect(() => {
        if (currentRef) {
            const media = currentRef;
            const currentTimeChangeHandler = () => {
                setCurrentTime(media.currentTime);
            }
            media.addEventListener('timeupdate', currentTimeChangeHandler);

            return () => {
                media.removeEventListener('timeupdate', currentTimeChangeHandler);
            };
        }
    }, [currentRef]);

    const formatTime = seconds => Duration.fromObject({seconds}).toFormat('hh:mm:ss');

    return (
        <div className={clsx(classes['time-display'], classes['time-display--small'], classes['time-display--centered'], className)}>
            <span className={classes['time-display__current-time']}>{formatTime(currentTime)}</span>
            <span className={classes['time-display__separator']}>/</span>
            <span className={classes['time-display__current-duration']}>{formatTime(currentDuration)}</span>
        </div>
    )
});

export default withStyles(styles)(forwardRef((props, ref) => <TimeDisplay ref={ref} {...props} />));