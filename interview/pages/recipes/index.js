import Head from 'next/head'
import Layout from '../../components/Layout';
import RecipesPage from '../../components/RecipesPage'

export default function Recipes() {
	return (
		<Layout>
			<Head>
				<title>Recipes Page</title>
			</Head>
			<RecipesPage />
		</Layout>
	)
}
