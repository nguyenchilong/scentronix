import Head from 'next/head'
import Layout from '../../components/Layout';
import LearnPage from '../../components/LearnPage'

export default function Learn() {
	return (
		<Layout>
			<Head>
				<title>Learn Page</title>
			</Head>
			<LearnPage />
		</Layout>
	)
}
