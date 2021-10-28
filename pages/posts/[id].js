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
  const post = await axios
    .get(`https://5cc2bf77968a0b001496d996.mockapi.io/api/products/${params.id}`)
    .then(response => response.data)
    .catch(() => ({
      id: params.id,
      name: 'unknown'
    }))
  ;

  return {
    props: {
      post
    },
    revalidate: 10
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
