export default theme => ({
    player: {
        backgroundColor: theme.palette.primary.neutral000,
        border: `solid ${theme.typography.pxToRem(1)} ${theme.palette.primary.border}`,
        borderRadius: theme.typography.pxToRem(50),
        color: theme.palette.primary.main
    },
    player__controls: {
        display: 'block'
    },
    player__timestamp: {
        display: 'block'
    }
});