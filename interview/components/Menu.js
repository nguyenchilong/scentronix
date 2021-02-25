import React from 'react';
import { useRouter } from 'next/router'
import { makeStyles, List, ListItem } from '@material-ui/core';
import styles from '../styles/headerStyles';
import Button from './Button';


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	const router = useRouter();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button
					href="/shop"
					color="transparent"
					className={`${classes.navLink} ${router.pathname === '/shop' ? classes.navLinkActive : ''}`}>
					Shop
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/recipes"
					color="transparent"
					className={`${classes.navLink} ${router.pathname === '/recipes' ? classes.navLinkActive : ''}`}>
					Recipes
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/learn"
					color="transparent"
					className={`${classes.navLink} ${router.pathname === '/learn' ? classes.navLinkActive : ''}`}>
					Learn
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/about"
					color="transparent"
					className={`${classes.navLink} ${router.pathname === '/about' ? classes.navLinkActive : ''}`}>
					About Us
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/blog"
					color="transparent"
					className={`${classes.navLink} ${router.pathname === '/blog' ? classes.navLinkActive : ''}`}>
					Blog
				</Button>
			</ListItem>
		</List>
	);
}
