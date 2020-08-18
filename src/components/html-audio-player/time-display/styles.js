export default theme => ({
    'time-display': {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.typography.pxToRem(2),
        color: theme.palette.primary.main,
        width: theme.typography.pxToRem(105)
    },
    'time-display--small': {
        fontSize: theme.typography.pxToRem(10)
    },
    'time-display--centered': {
        justifyContent: 'space-between'
    },
    'time-display__current-time': {
        color: theme.palette.primary.blue500,
        width: theme.typography.pxToRem(50)
    },
    'time-display__current-duration': {
        color: theme.palette.primary.blue600,
        width: theme.typography.pxToRem(50)
    },
    'time-display__separator': {
        width: theme.typography.pxToRem(5)
    }
});