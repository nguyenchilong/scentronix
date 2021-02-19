import Head from 'next/head'
import Layout from '../../components/Layout';
import ShopPage from '../../components/ShopPage'

export default function Shop() {
	return (
		<Layout>
			<Head>
				<title>Shop Page</title>
			</Head>
			<ShopPage />
		</Layout>
	)
}
