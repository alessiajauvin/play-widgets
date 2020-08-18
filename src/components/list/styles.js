export default theme => ({
    list: {
        backgroundColor: theme.palette.background.default,
        border: `solid ${theme.typography.pxToRem(1)} ${theme.palette.primary.border}`,
    },
    list__item: {
        color: theme.palette.primary.neutral500,
        lineHeight: theme.typography.pxToRem(30)
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: 'larger',
        fontWeight: 600,
        textAlign: 'center'
    }
});