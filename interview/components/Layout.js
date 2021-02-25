import useSWR from 'swr';
import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import styles from '../styles/layoutStyles';

const useStyles = makeStyles(styles);

export default function Layout({ children, home, props }) {
	const { data, error } = useSWR('/api/check', fetch);
	let title = '';
	let message = '';
	const classes = useStyles();
	const { ...rest } = props;
	if (error) {
		title = 'Error API Endpoint';
		message = 'Not have any server online';
	} else {
		title = 'Next.js Sample Website';
		message = '';
	}
	return (
		<div className="bg-white">
			<Head>
				<title>{title}</title>
			</Head>
			
			<Header
				brand="NextJS Material UI"
				leftLinks={<Menu />}
				fixed
				color="white"
				changeColorOnScroll={{
					height: 400,
					color: "white"
				}}
				{...rest}
			/>
			
			<main className={classNames(classes.main)}>
				{!isEmpty(message) ? message : children}
			</main>
			<Footer />
		</div>
	);
}


