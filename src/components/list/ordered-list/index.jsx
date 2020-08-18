import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles';

export const OrderedList = ({ title, items = [], classes }) => {

    return (
        <>
            {title ? <div className={classes.title}>{title}</div> : null}
            {items.length > 0
            ? (
                <ol className={classes.list}>
                    {items.map((item, idx) => <li key={idx} className={classes.list__item}>{item}</li>)}
                </ol>
            )
            : null}
        </>
    )
};

export default withStyles(styles)(OrderedList);