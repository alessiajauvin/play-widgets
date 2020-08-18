import React from 'react';
import { withStyles } from '@material-ui/core';
import Player from '../player';
import { OrderedList } from '../../list';
import styles from './styles';
import { CenteredCard } from '../../card';
import clsx from 'clsx';

export const PlayerCard = ({src, classes}) => (
    <CenteredCard title="Using Material-UI Player">
        <div className={classes.player}>
            <Player src={src} />
        </div>
        <div className={classes.list}>
            <OrderedList
                title="Shortcomings"
                items={[
                    'Cannot change the volume icon',
                    "Styling is limited. It's only possible to style according to what is provided",
                    'Impossible to deactivate volume control (up-down). `mute` must be kept',
                    'Controls cannot be separated. Either at start or at end',
                    'Time markers positions are fixed',
                    'The only possible modification on the slider is the colour',
                    'Forces the use of `makeStyles`'
                ]} 
            />
        </div>
        <div className={classes.conclusion}>
            <div className={classes.conclusion__title}>Verdict:</div>
            <div className={clsx(classes.conclusion__verdict, classes['conclusion__verdict--rejected'])}>Rejected</div>
        </div>
    </CenteredCard>
);

export default withStyles(styles)(PlayerCard);