export default theme => ({
    'seek-bar': {
        width: '100%'
    },
    root: {
      color: theme.palette.primary.neutral200,
      height: theme.typography.pxToRem(10),
    },
    thumb: {
      height: theme.typography.pxToRem(12),
      width: theme.typography.pxToRem(12),
      backgroundColor: '#fff',
      border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.border}`,
      marginTop: theme.typography.pxToRem(-1),
      marginLeft: theme.typography.pxToRem(-8),
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    track: {
      height: theme.typography.pxToRem(10),
      borderRadius: theme.typography.pxToRem(4),
      border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.neutral350}`,
    },
    rail: {
      height: theme.typography.pxToRem(10),
      borderRadius: theme.typography.pxToRem(4),
      border: `${theme.typography.pxToRem(1)} solid ${theme.palette.primary.neutral350}`,
    },
    active: {}
  });