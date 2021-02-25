
import Breadcrumbs from './Breadcrumbs';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import Image from 'next/image'
import styles from '../styles/recipesStyles';
import { makeStyles } from '@material-ui/core';
import { QueryBuilder, Print, Add, GroupWork } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export default function RecipesPage() {
	const classes = useStyles();
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
		<GridContainer className={classes.container}>
			<Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>
			<GridItem md={6}>
				<h1 className={classes.pb5}>Whole-Grain Banana Bread</h1>
				<p>
					This one-bowl banana bread - our <u>2018 Recipe of the Year</u> - uses the simplest ingredients, but in incredibly moist and flavorful.
					While the recipe calls for a 50/50 mix of flours(all-purpose and whole wheat), we often make the bread 100% whole wheat,
					and honestly? No one can tell, it's that good and not only is this bread delicious - it's versatile.
				</p>
				
				<GridItem container className={classes.actionGroups}>
					<GridItem container md={4}>
						<GridItem item md={4}>
							<QueryBuilder className={classes.fIcons} />
						</GridItem>
						<GridItem item md={8}>
							<h3 className={classes.titleItemsGroups}>PREP</h3>
							<p>10 mins</p>
						</GridItem>
					</GridItem>
					<GridItem item md={4}>
						<h3 className={classes.titleItemsGroups}>BAKE</h3>
						<p>1 hr to 1 hr 15 mins</p>
					</GridItem>
					<GridItem item md={4}>
						<h3 className={classes.titleItemsGroups}>Total</h3>
						<p>1 hr to 1 hr 15 mins</p>
					</GridItem>
				</GridItem>
				<GridItem className={classes.breakLine}></GridItem>
				<GridItem container className={classes.group2}>
					<GridItem container md={5}>
						<GridItem item md={3}>
							<GroupWork className={classes.fIcons} />
						</GridItem>
						<GridItem item md={9}>
							<h3 className={classes.titleItemsGroups}>Yield</h3>
							<p>1 loaf, 12 generous servings</p>
						</GridItem>
					</GridItem>
					<GridItem item md={4}>
						<button className={classes.buttonOutline}>
							<Add />{' '}
							Save Recipes
						</button>
					</GridItem>
					<GridItem item md={3}>
						<button className={classes.buttonOutline}>
							<Print />{' '}
							Print
						</button>
					</GridItem>
				</GridItem>
			</GridItem>
			
			<GridItem md={6}>
				<Image src="/break.png" alt="Break Item" width={500} height={400}></Image>
			</GridItem>
		</GridContainer>
	);
}
