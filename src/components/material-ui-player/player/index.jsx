import React from 'react';
import AudioPlayer from 'material-ui-audio-player';
import { PlayArrow as PlayIcon, Pause as PauseIcon } from '@material-ui/icons';
import styles from './styles';
import { makeStyles } from '@material-ui/core';

const icons = {
    PlayIcon,
    PauseIcon
}

export default ({src}) => (
    <AudioPlayer
        src={src}
        elevation={0}
        useStyles={makeStyles(styles)}
        icons={icons}
    />
);