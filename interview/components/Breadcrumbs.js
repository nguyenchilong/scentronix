
import Link from 'next/link';
import styles from '../styles/recipes.module.css';

export default function Breadcrumbs({ breadcrumbs }) {
	return (
		<section className={styles.breadcrumbs}>
			<ul>
				{
					breadcrumbs.map(
						(breadcrumb, index) => (<li key={index}><Link href={breadcrumb.url}><a>{breadcrumb.title}</a></Link></li>)
					)
				}
			</ul>
		</section>
	);
}
