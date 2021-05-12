import { useRouter } from 'next/router';
import axios from 'axios';

export async function getStaticPaths() {
  const { data } = await axios.get('https://5cc2bf77968a0b001496d996.mockapi.io/api/products');

  const paths = data.map(item => ({
    params: {
      id: item.id
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(`https://5cc2bf77968a0b001496d996.mockapi.io/api/products/${params.id}`);

  return {
    props: {
      post: data
    }
  }
}

function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(post, router);

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>This is a  post {id}</div>
  )
}

export default Post;
