import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const res = await fetch('https://5cc2bf77968a0b001496d996.mockapi.io/api/products');
  const posts = await res.json();

  const paths = posts.map(item => ({
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
  const res = await fetch(`https://5cc2bf77968a0b001496d996.mockapi.io/api/products/${params.id}`)
  const post = await res.json();

  return {
    props: {
      post
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
