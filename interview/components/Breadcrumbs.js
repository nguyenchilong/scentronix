
import Link from 'next/link';
import { makeStyles } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import styles from '../styles/recipesStyles';
const useStyles = makeStyles(styles);

export default function Breadcrumbs({ breadcrumbs }) {
	const classes = useStyles();
	return (
		<section className={classes.breadcrumbs}>
			<ul className={classes.breadcrumbUl}>
				{
					breadcrumbs.map(
						(breadcrumb, index) => (
							<li key={index} className={classes.breadcrumbLi}>
								<Link href={breadcrumb.url}>
									<a className={classes.breadcrumbLink}>
										{breadcrumb.title}
									</a>
								</Link>
								{(index < (breadcrumbs.length - 1)) ? <ChevronRight className={classes.arrowRight} /> : ''}
							</li>)
					)
				}
			</ul>
		</section>
	);
}
