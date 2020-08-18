export default theme => ({
    player: {
        backgroundColor: theme.palette.primary.neutral000,
        border: `solid ${theme.typography.pxToRem(1)} ${theme.palette.primary.border}`,
        borderRadius: theme.typography.pxToRem(50),
        color: theme.palette.primary.main,
        padding: theme.typography.pxToRem(10)
    },
    player__controls: {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.typography.pxToRem(10)
    },
    'player__play-button': {
        marginLeft: theme.typography.pxToRem(3)
    },
    'player__pause-button': {
        marginLeft: theme.typography.pxToRem(3)
    },
    'player__seek-bar': {
        flexGrow: 1,
        marginTop: theme.typography.pxToRem(5)
    },
    'player__mute-button': {
        marginRight: theme.typography.pxToRem(3),
        color: theme.palette.primary.blue600
    },
    'player__unmute-button': {
        marginRight: theme.typography.pxToRem(3),
        color: theme.palette.primary.red600
    },
    'player__time-display': {
        marginLeft: theme.typography.pxToRem(60),
        marginTop: theme.typography.pxToRem(-15)
    }
});