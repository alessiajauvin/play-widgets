import React, { createRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PlayButton from '../play-button';
import PauseButton from '../pause-button';
import SeekBar from '../seek-bar';
import MuteButton from '../mute-button';
import UnmuteButton from '../unmute-button';
import TimeDisplay from '../time-display';


export const Player = ({src, classes}) => {
    const audioPlayerRef = createRef();
    const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    

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
                onVolumeChange={event => setMuted(event.target.muted)}
            />
            <div className={classes.player__controls}>
                {!currentlyPlaying
                 ? <PlayButton ref={audioPlayerRef} className={classes['player__play-button']} />
                 : <PauseButton ref={audioPlayerRef} className={classes['player__play-button']} />}
                <SeekBar ref={audioPlayerRef} className={classes['player__seek-bar']} />
                {!muted
                 ? <MuteButton ref={audioPlayerRef} className={classes['player__mute-button']} />
                 : <UnmuteButton ref={audioPlayerRef} className={classes['player__unmute-button']} />}
            </div>
            <TimeDisplay ref={audioPlayerRef} className={classes['player__time-display']} />
        </div>
)};

export default withStyles(styles)(Player);