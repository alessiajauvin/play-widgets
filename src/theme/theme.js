import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#25282d',
      neutral000: '#ffffff',
      neutral100: '#f0f2f5',
      neutral150: '#dee4ec',
      neutral200: '#ced8e3',
      neutral250: '#b5bfcd',
      neutral300: '#9aa8bb',
      neutral350: '#828e9e',
      neutral400: '#6b7582',
      neutral450: '#5b646f',
      neutral500: '#4c535d',
      neutral700: '#000000',
      red100: '#fee2e8',
      red600: '#a12e45',
      blue200: '#bfdaff',
      blue300: '#80b5ff',
      blue400: '#4090ff',
      blue500: '#006aff',
      blue600: '#004fbd',
      border: '#e1e3e9',
      card: '#fff',
      calendar: '#e6ebf3'
    },
    secondary: {
      main: '#6b7582'
    },
    background: { default: '#f9fafc' }
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#25282d'
      },
      arrow: {
        color: '#25282d'
      }
    },
    MuiTab: {
      wrapper: {
        flexDirection: 'row'
      }
    },
    MuiContainer: {
      maxWidthXl: {
        paddingLeft: 24,
        paddingRight: 24
      }
    },
    MuiInput: {
      inputMarginDense: {
        paddingTop: 7
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#03a9f4'
      }
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: 'white'
      }
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '1.4',
        color: '#25282d99'
      },
      daysHeader: {
        paddingBottom: 3
      },
      transitionContainer: {
        '& p': {
          color: '#25282d'
        }
      }
    },
    MuiPickersDay: {
      day: {
        color: '#25282d',
        borderRadius: '4px'
      },
      daySelected: {
        backgroundColor: '#006aff',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#006aff'
        }
      },
      dayDisabled: {
        color: '#25282d59'
      },
      current: {
        color: '#006aff'
      }
    },
    MuiTableBody: {
      root: {
        '& tr:last-child th, tr:last-child td': {
          borderBottom: 0
        }
      }
    },
    MuiTableRow: {
      root: {
        height: 56
      },
      head: {
        height: 56
      },
      hover: {
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.04) !important'
        }
      }
    },
    MuiTypography: {
      h1: {
        color: '#25282d',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Lato',
        textTransform: 'capitalize',
        letterSpacing: 0.38,
        '&:disabled': {
          color: '#9ba8bc'
        }
      },
      h2: {
        color: '#25282d',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Lato',
        letterSpacing: 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',
        '&:disabled': {
          color: '#9ba8bc'
        }
      },
      h3: {
        color: '#25282d',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: -0.45,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '&:disabled': {
          color: '#9ba8bc'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      '"San Francisco"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(', ')
  }
});

export default theme;
