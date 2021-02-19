import useSWR from 'swr';
import Head from 'next/head';
import React, { useState } from 'react';
import TopMenu from './TopMenu';
import Footer from './Footer';
import styles from '../styles/home.module.css';
import { isEmpty } from 'lodash';

export default function Layout({ children, home }) {
	const { data, error } = useSWR('/api/check', fetch);
	let title = '';
	let message = '';
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
			<TopMenu />
			<main className={styles.main}>{!isEmpty(message) ? message : children}</main>
			<Footer />
		</div>
	);
}


