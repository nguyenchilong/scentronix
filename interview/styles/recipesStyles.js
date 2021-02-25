import {
	container,
	primaryColor,
	grayColor,
	dangerColor
} from '../libs/material';

const recipesStyle = {
	container,
	breadcrumbs: {
		width: '100%'
	},
	breadcrumbUl: {
		listStyle: 'none',
		width: '100%',
		padding: '0'
	},
	breadcrumbLi: {
		display: 'inline-block',
		paddingRight: '15px',
		'&:after': {
			content: " > ",
			fontSize: 'medium',
			color: primaryColor
		},
		'&:last-child': {
			paddingRight: '0'
		},
		'&:last-child:after': {
			content: '0'
		}
	},
	breadcrumbLink: {
		textTransform: 'uppercase',
		textDecoration: 'none',
		paddingRight: '15px',
		'&:visited,&:link,&:active,&:hover': {
			color: 'inherit',
			textDecoration: 'none'
		}
	},
	actionGroups: {
		paddingTop: '50px'
	},
	group2: {
		padding: '40px 0'
	},
	breakLine: {
		borderBottom: `solid 1px ${grayColor}`,
		width: '100%',
		padding: '15px 0'
	},
	buttonOutline: {
		background: 'none',
		border: `solid 2px ${dangerColor}`,
		width: '100%',
		padding: '5px 0',
		textTransform: 'uppercase'
	},
	titleItemsGroups: {
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	arrowRight: {
		color: primaryColor,
		position: 'absolute',
		margin: '-2px -10px'
	},
	pb5: {
		paddingBottom: '50px'
	},
	fIcons: {
		fontSize: '4rem',
		margin: '10px -40px'
	}
	
};

export default recipesStyle;
