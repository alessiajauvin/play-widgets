import { makeStyles } from '@material-ui/core';

const globalStyles = makeStyles(theme => ({
  '@global': {
    '.cc-reporting::-webkit-scrollbar': {
      display: 'block',
      overflow: 'visible',
      width: '0.4em'
    },
    '.cc-reporting::-webkit-scrollbar-thumb': {
      borderRadius: '0.2em',
      display: 'block',
      overflow: 'visible'
    },
    '.reporting-scrollable-content::-webkit-scrollbar': {
      display: 'block',
      overflow: 'visible',
      width: '0.4em'
    },
    '.reporting-scrollable-content::-webkit-scrollbar-thumb': {
      borderRadius: '0.2em',
      display: 'block',
      overflow: 'visible'
    },
    '.chartjs-render-monitor': {
      width: '100% !important'
    },
    '.sr-only': {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    },
    '.table-layout': {
      marginTop: theme.typography.pxToRem(32),
      paddingBottom: '1.375rem'
    },
    '.div-resizable': {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      },
      justifyContent: 'space-between'
    },
    '.flex-element': {
      '&:only-child': {
        marginRight: '0',
        marginBottom: '0'
      },
      '&:not(:only-child)': {
        '&:last-child': {
          marginRight: '0',
          marginTop: '0'
        },
        marginRight: theme.typography.pxToRem(24),
        marginBottom: '0',
        [theme.breakpoints.up('md')]: {
          marginTop: `${theme.typography.pxToRem(24)} !important`
        },
        [theme.breakpoints.down('sm')]: {
          marginRight: '0',
          '&:not(:last-child)': {
            marginBottom: theme.typography.pxToRem(24)
          }
        }
      }
    },
    '.pt-1': {
      paddingTop: theme.typography.pxToRem(theme.spacing(1))
    },
    '.pt-2': {
      paddingTop: theme.typography.pxToRem(theme.spacing(2))
    },
    '.pt-3': {
      paddingTop: theme.typography.pxToRem(theme.spacing(3))
    },
    '.pt-4': {
      paddingTop: theme.typography.pxToRem(theme.spacing(4))
    }
  }
}));

export default globalStyles;
