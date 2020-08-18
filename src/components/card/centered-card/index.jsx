import React from 'react';
import { Card, CardHeader, CardContent, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import styles from '../styles';

export const CenteredCard = ({title, children, classes}) => (
    <Card className={classes.card}>
        <CardHeader className={classes.card__header} title={title} />
        <CardContent className={clsx(classes.card__content, classes["card__content--column-start"], classes['card__content--height-fit'])}>
            {children}
        </CardContent>
    </Card>
);

export default withStyles(styles)(CenteredCard);