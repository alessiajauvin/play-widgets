export default theme => ({
    player: {
        width: '90%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    },
    conclusion: {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.typography.pxToRem(2),
        alignItems: 'baseline'
    },
    conclusion__title: {
        fontWeight: 500,
        fontSize: 'larger'
    },
    conclusion__verdict: {
        color: theme.palette.primary.blue600,
        fontWeight: 800,
        fontSize: 'xx-large'
    },
    'conclusion__verdict--rejected': {
        color: theme.palette.primary.red600
    }
});