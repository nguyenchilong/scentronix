
import Breadcrumbs from './Breadcrumbs';
import Image from 'next/image'
import styles from '../styles/recipes.module.css';

export default function RecipesPage() {
	const breadcrumbs = [
		{
			url: '/recipes',
			title: 'Recipes'
		},
		{
			url: '/bread',
			title: 'Bread'
		},
		{
			url: '#!',
			title: 'Quick Bread'
		}
	];
	return (
		<section className="container">
			<div className={styles.main}>
				<div className="row">
					<Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>
					<div className="col-md-6">
						<h1 className="pb-5">Whole-Grain Banana Bread</h1>
						<p>
							This one-bowl banana bread - our <u>2018 Recipe of the Year</u> - uses the simplest ingredients, but in incredibly moist and flavorful.
							While the recipe calls for a 50/50 mix of flours(all-purpose and whole wheat), we often make the bread 100% whole wheat,
							and honestly? No one can tell, it's that good and not only is this bread delicious - it's versatile.
						</p>
						<div className={styles.actionGroups}>
							<div className={`${styles.group1} row`}>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">
											<i className="far fa-clock fa-3x"></i>
										</div>
										<div className="col-md-8">
											<h3 className={styles.titleItemsGroups}>PREP</h3>
											<p>10 mins</p>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<h3 className={styles.titleItemsGroups}>BAKE</h3>
									<p>1 hr to 1 hr 15 mins</p>
								</div>
								<div className="col-md-4">
									<h3 className={styles.titleItemsGroups}>Total</h3>
									<p>1 hr to 1 hr 15 mins</p>
								</div>
							</div>
							<div className={styles.breakLine}></div>
							<div className={`${styles.group2} row`}>
								<div className="col-md-5">
									<div className="row">
										<div className="col-md-3">
											<i className="far fa-dot-circle fa-3x"></i>
										</div>
										<div className="col-md-9">
											<h3 className={styles.titleItemsGroups}>Yield</h3>
											<p>1 loaf, 12 generous servings</p>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<button className={styles.buttonOutline}>
										<i className="fas fa-plus"></i>{' '}
										Save Recipes
									</button>
								</div>
								<div className="col-md-3">
									<button className={styles.buttonOutline}>
										<i className="fas fa-print"></i>{' '}
										Print
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<Image src="/break.png" alt="Break Item" width={500} height={400}></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
