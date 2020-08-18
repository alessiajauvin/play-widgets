import React from 'react';
import { withStyles } from '@material-ui/core';
import Player from '../player';
import { OrderedList } from '../../list';
import styles from './styles';
import { CenteredCard } from '../../card';

export const PlayerCard = ({src, classes}) => (
    <CenteredCard title="Using HTML5 Audio Player">
        <div className={classes.player}>
            <Player src={src} />
        </div>
        <div className={classes.lists}>
            <div className={classes.lists__list}>
                <OrderedList
                    title="Advantages"
                    items={[
                        "Full control on what's rendered on screen",
                        "Doesn't introduce a new dependency",
                        "Easily unit testable since it's built using many small components",
                        "Ref can be shared amongst many players"
                    ]}
                />
            </div>
            <div className={classes.lists__list}>
                <OrderedList
                    title="Shortcomings"
                    items={[
                        'Requires a lot of boilerplate code',
                        'Requires to know the HTMLMediaElement API',
                        'Could lead to potential problems with passing around a reference (React.forwardRef)',
                        'Requires many checks for current values'
                    ]}
                />
            </div>
        </div>
        <div className={classes.conclusion}>
            <div className={classes.conclusion__title}>Verdict:</div>
            <div className={classes.conclusion__verdict}>Accepted</div>
        </div>
    </CenteredCard>
);

export default withStyles(styles)(PlayerCard);