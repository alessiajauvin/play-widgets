export default theme => ({
    card: {
        padding: theme.typography.pxToRem(10)
    },
    card__header: {
        textAlign: 'center'
    },
    card__content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.typography.pxToRem(500),
        gap: theme.typography.pxToRem(15)
    },
    'card__content--column-start': {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    'card__content--height-fit': {
        height: 'fit-content'
    }
});