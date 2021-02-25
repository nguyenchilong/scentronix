import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../styles/layoutStyles';
import Button from './Button';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export default function AboutPage() {
	const classes = useStyles();
	return (
		<div className={classes.textCenter}>
			About Us page content<br/>
			
			<Button color="primary" round>
				<Home />
				Back Home
			</Button>
		</div>
	);
}
