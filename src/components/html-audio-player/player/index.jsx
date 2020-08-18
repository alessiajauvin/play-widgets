import React, { createRef, useEffect, forwardRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const PlayButton = forwardRef((_, ref) => {
    const [currentAudio, setCurrentAudio] = useState(null);

    useEffect(() => {
        if (ref) {
            setCurrentAudio(ref.current);
        }
    }, [ref]);

    const playHandler = () => {
        if (currentAudio) {
            currentAudio.play();
        }
    };
    return <button onClick={playHandler}>Play</button>;
});

const PauseButton = forwardRef((_, ref) => {
    const [currentAudio, setCurrentAudio] = useState(null);

    useEffect(() => {
        if (ref) {
            setCurrentAudio(ref.current);
        }
    }, [ref]);

    const pauseHandler = () => {
        if (currentAudio) {
            currentAudio.pause();
        }
    };

    return <button onClick={pauseHandler}>Pause</button>
});

export const Player = ({src, classes}) => {
    const audioPlayerRef = createRef();
    const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    

    return (
        <div className={classes.player}>
            {/* No need to put any styling or precise that
                it's hidden since the `controls` value is `false`.
            See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attr-controls */}
            <audio
                ref={audioPlayerRef}
                src={src}
                onPlay={() => setCurrentlyPlaying(true)}
                onPause={() => setCurrentlyPlaying(false)}
                onDurationChange={event => setDuration(event.target.duration)}
                onTimeUpdate={event => setCurrentTime(event.target.currentTime)}
            />
            <div className={classes.player__controls}>
                <PlayButton ref={audioPlayerRef} />
                <PauseButton ref={audioPlayerRef} />
            </div>
            <div className={classes.player__timestamp}>currentlyPlaying: {JSON.stringify(currentlyPlaying)}</div>
            <div>Timestamp: {currentTime} / {duration}</div>
        </div>
)};

export default withStyles(styles)(Player);