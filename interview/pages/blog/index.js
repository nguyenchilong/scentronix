import Head from 'next/head'
import Layout from '../../components/Layout';
import BlogPage from '../../components/BlogPage'

export default function Blog() {
	return (
		<Layout>
			<Head>
				<title>Blog Page</title>
			</Head>
			<BlogPage />
		</Layout>
	)
}
