import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, makeStyles } from '@material-ui/core';
import { Twitter, Facebook, LinkedIn, Favorite } from '@material-ui/icons';
import styles from '../styles/footerStyles';
const useStyles = makeStyles(styles);

export default function Footer(props) {
	const classes = useStyles();
	const { whiteFont } = props;
	const footerClasses = classNames({[classes.footer]: true, [classes.footerWhiteFont]: whiteFont});
	const aClasses = classNames({[classes.a]: true, [classes.footerWhiteFont]: whiteFont});
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a className={classes.block} href="#!">
								Privacy Policy
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a className={classes.block} href="#!">
								Terms of Use
							</a>
						</ListItem>
						
						
						<ListItem className={classes.inlineBlock}>
							<a className={classes.block} href="#!">
								<Twitter className={classes.icon} />
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a className={classes.block} href="#!">
								<Facebook className={classes.icon} />
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a className={classes.block} href="#!">
								<LinkedIn className={classes.icon} />
							</a>
						</ListItem>
					</List>
				</div>
				<div className={classes.right}>
					&copy; {new Date().getFullYear()} , made with{" "}
					<Favorite className={classes.icon} /> by{" "}
					<a href="#!" className={aClasses}>Scentronix Team</a>{" "}for a better web.
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	whiteFont: PropTypes.bool
};
