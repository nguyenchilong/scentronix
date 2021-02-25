import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../styles/layoutStyles';

const useStyles = makeStyles(styles);

export default function HomePage() {
	const classes = useStyles();
	return (
		<div className={classes.textCenter}>
			Home page content
		</div>
	);
}
