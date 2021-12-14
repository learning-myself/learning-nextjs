import { useRouter } from "next/router";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

// export async function getStaticPaths() {
//   const { data } = await axios.get(
//     "https://5cc2bf77968a0b001496d996.mockapi.io/api/products"
//   );

//   const paths = data.map((item) => ({
//     params: {
//       id: item.id,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export const getStaticPaths = async () => {
//   let paths;
//   try {
//     const { data } = await axios.get(
//       "https://5cc2bf77968a0b001496d996.mockapi.io/api/products"
//     );
//     paths = data.map((item) => ({
//       params: {
//         id: item.id,
//       },
//     }));
//   } catch (err) {
//     paths = [];
//   }
//   console.log("paths", paths);
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export async function getStaticProps({ params }) {
//   const post = await axios
//     .get(
//       `https://5cc2bf77968a0b001496d996.mockapi.io/api/products/${params.id}`
//     )
//     .then((response) => response.data)
//     .catch(() => null);
//   console.log("params", params, post);
//   return {
//     props: {
//       post,
//     },
//     // revalidate: 10,
//   };
// }

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params);
  const post = await axios
    .get(
      `https://5cc2bf77968a0b001496d996.mockapi.io/api/products/${params.id}`
    )
    .then((response) => response.data)
    .catch(() => null);
  return {
    props: {
      post,
    },
  };
};

const Post: NextPage = ({ post }) => {
  const router = useRouter();
  // const { id } = router.query;
  // console.log("post12", post);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return post ? (
    <div>
      <p>This is a post {post.id}</p>
      <p>This is a post {post.name}</p>
      <p>This is a post {post.price}</p>
    </div>
  ) : (
    <div>failed</div>
  );
};

export default Post;
