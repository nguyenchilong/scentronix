import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Hidden, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import styles from '../styles/headerStyles';

const useStyles = makeStyles(styles);

export default function Header(props) {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	React.useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener('scroll', headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener('scroll', headerColorChange);
			}
		};
	});
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName('header')[0]
				.classList.remove(classes[color]);
			document.body
				.getElementsByTagName('header')[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
				.getElementsByTagName('header')[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName('header')[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};
	const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed
	});
	const brandComponent = (
		<Link href="/" as="/">
			<Button className={classes.title}>
				<img className={classes.logo} src="/monkey.png" alt={brand} />
			</Button>
		</Link>
	);
	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandComponent : null}
				<div className={classes.flex}>
					{leftLinks !== undefined ? (
						<Hidden smDown implementation="css">
							{leftLinks}
						</Hidden>
					) : (
						brandComponent
					)}
				</div>
				<Hidden smDown implementation="css">
					{rightLinks}
				</Hidden>
				<Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
			<Hidden mdUp implementation="js">
				<Drawer
					variant="temporary"
					anchor={"right"}
					open={mobileOpen}
					classes={{
						paper: classes.drawerPaper
					}}
					onClose={handleDrawerToggle}
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
					</div>
				</Drawer>
			</Hidden>
		</AppBar>
	);
}

Header.defaultProp = {
	color: 'white'
};

Header.propTypes = {
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'transparent',
		'white',
		'rose',
		'dark'
	]),
	rightLinks: PropTypes.node,
	leftLinks: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			'primary',
			'info',
			'success',
			'warning',
			'danger',
			'transparent',
			'white',
			'rose',
			'dark'
		]).isRequired
	})
};
