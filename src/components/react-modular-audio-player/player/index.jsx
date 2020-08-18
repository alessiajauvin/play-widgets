import React from 'react';
import { withStyles } from '@material-ui/core';
import AudioPlayer from 'react-modular-audio-player';
import styles from './styles';

export const Player = ({src, classes}) => {
    const rearrangedPlayer = [
        {
            className: classes.player__controls,
            innerComponents: [
                { type: 'play' },
                { type: 'seek' },
                { type: 'volume' }
            ]
        },
        {
            className: classes.player__time,
            innerComponents: [
                { type: 'time' }
            ]
        }
    ];

    return (
        <div className={classes.player}>
            <AudioPlayer
                audioFiles={[{src}]}
                rearrange={rearrangedPlayer}
                hideForward
                hideLoop
                hideRewind
            />
        </div>
)};

export default withStyles(styles)(Player);