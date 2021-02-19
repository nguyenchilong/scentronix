import Head from 'next/head'
import Layout from '../../components/Layout';
import AboutPage from '../../components/AboutPage'

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About Us Page</title>
			</Head>
			<AboutPage />
		</Layout>
	)
}
