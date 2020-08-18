export default theme => ({
    root: {
        backgroundColor: theme.palette.primary.neutral000,
        border: `solid ${theme.typography.pxToRem(1)} ${theme.palette.primary.border}`,
        borderRadius: theme.typography.pxToRem(50),
        color: theme.palette.primary.main
    },
    playIcon: {
        color: theme.palette.primary.neutral300,
        '&:hover': {
            color: theme.palette.primary.neutral400
        }
    },
    volumeIcon: {
        color: theme.palette.primary.neutral300,
        '&:hover': {
            color: theme.palette.primary.neutral400
        }
    },
    pauseIcon: {
        color: theme.palette.primary.neutral300,
        '&:hover': {
            color: theme.palette.primary.neutral400
        }
    },
    mainSlider: {
        color: theme.palette.primary.neutral150
    }
});