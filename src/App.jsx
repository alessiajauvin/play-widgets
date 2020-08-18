import React from "react";
import {
  makeStyles,
  createGenerateClassName,
  StylesProvider,
  ThemeProvider,
  Container,
  Typography,
} from "@material-ui/core";
import globalStyles from "./theme/globals-jss.util";
import theme from "./theme/theme";
import clsx from "clsx";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { MaterialUIPlayerCard } from "./components/material-ui-player";
import { ReactModularAudioPlayerCard } from "./components/react-modular-audio-player";
import { HtmlAudioPlayerCard } from "./components/html-audio-player";

const useStyles = makeStyles((styleTheme) => ({
  baseline: {
    fontSize: "initial",
  },
  container: {
    minHeight: "100vh",
    overflow: "scroll",
    height: "100%",
  },
  muiContainer: {
    paddingLeft: styleTheme.typography.pxToRem(24),
    paddingRight: styleTheme.typography.pxToRem(24),
    [styleTheme.breakpoints.up("md")]: {
      paddingLeft: styleTheme.typography.pxToRem(38),
      paddingRight: styleTheme.typography.pxToRem(38),
    },
  },
  'muiContainer--flex': {
    display: 'flex',
    flexDirection: 'column',
    gap: styleTheme.typography.pxToRem(20)
  },
  title: {
    textAlign: 'center'
  }
}));

const generateClassName = createGenerateClassName({
  seed: "ucc-reporting",
});

const App = () => {
  globalStyles();

  const classes = useStyles();

  const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline className={classes.baseline}>
          <div className={clsx("cc-reporting", classes.container)}>
            <Container className={clsx(classes.muiContainer, classes["muiContainer--flex"])} maxWidth="xl" role="main">
              <Typography className={classes.title} component="h1" variant="h1">
                Play Widgets
              </Typography>
              <HtmlAudioPlayerCard src={source} />
              <MaterialUIPlayerCard src={source} />
              <ReactModularAudioPlayerCard src={source} />
            </Container>
          </div>
        </ScopedCssBaseline>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
