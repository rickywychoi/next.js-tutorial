import Layout from '../components/Layout/layout'
import { getAllPostIds, getPostData } from '../lib/posts'

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()  // paths is array of objects
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      {postData.data}
    </Layout>
  )
}