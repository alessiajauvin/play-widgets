export default theme => ({
    player: {
        width: '90%',
    },
    lists: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: theme.typography.pxToRem(20)
    },
    lists__list: {
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