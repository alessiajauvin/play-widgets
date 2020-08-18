import React from 'react';
import { withStyles } from '@material-ui/core';
import Player from '../player';
import { OrderedList } from '../../list';
import styles from './styles';
import { CenteredCard } from '../../card';
import clsx from 'clsx';

export const PlayerCard = ({src, classes}) => (
    <CenteredCard title="Using React Modular Audio Player">
        <div className={classes.player}>
            <Player src={src} />
        </div>
        <div className={classes.list}>
            <OrderedList
                title="Shortcomings"
                items={[]}
            />
        </div>
        <div className={classes.conclusion}>
            <div className={classes.conclusion__title}>Verdict:</div>
            <div className={clsx(classes.conclusion__verdict, classes['conclusion__verdict--rejected'])}>Rejected</div>
        </div>
    </CenteredCard>
);

export default withStyles(styles)(PlayerCard);