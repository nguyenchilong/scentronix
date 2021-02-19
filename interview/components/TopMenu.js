
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css';

export default function TopMenu() {
	const router = useRouter();
	return (
		<header className={styles.header}>
			{/*<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">*/}
			<nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand">
							<img className={styles.logo} src="/monkey.png" alt="Logo Monkey" />
						</a>
					</Link>
					<button className="navbar-toggler navbar-toggler-right"
					        type="button"
					        data-toggle="collapse"
					        data-target="#navbarResponsive"
					        aria-controls="navbarResponsive"
					        aria-expanded="false"
					        aria-label="Toggle navigation">
						Menu
						<i className="fas fa-bars ml-1"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className={`${styles.navbarNav} navbar-nav text-uppercase ml-auto`}>
							<li className={styles.navItem}>
								<Link href="/shop">
									<a className={`${styles.navLink} ${router.pathname === '/shop' ? styles.active : ''}`}>
										Shop
									</a>
								</Link>
							</li>
							<li className={styles.navItem}>
								<Link href="/recipes">
									<a className={`${styles.navLink} ${router.pathname === '/recipes' ? styles.active : ''}`}>
										Recipes
									</a>
								</Link>
							</li>
							<li className={styles.navItem}>
								<Link href="/learn">
									<a className={`${styles.navLink} ${router.pathname === '/learn' ? styles.active : ''}`}>
										Learn
									</a>
								</Link>
							</li>
							<li className={styles.navItem}>
								<Link href="/about">
									<a className={`${styles.navLink} ${router.pathname === '/about' ? styles.active : ''}`}>
										About
									</a>
								</Link>
							</li>
							<li className={styles.navItem}>
								<Link href="/blog">
									<a className={`${styles.navLink} ${router.pathname === '/blog' ? styles.active : ''}`}>
										Blog
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
