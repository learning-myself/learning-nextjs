import axios from "axios";

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://5cc2bf77968a0b001496d996.mockapi.io/api/products"
  );

  // if (data.length === 0) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}

import styles from "./index.module.scss";
import Link from "next/link";

// export async function getServerSideProps() {
//   const res = await fetch('https://5cc2bf77968a0b001496d996.mockapi.io/api/products');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

export default function Home({ posts }) {
  return (
    <div className={styles.wrapper}>
      {posts.length > 0 &&
        posts.map((item) => (
          <div key={item.id}>
            <Link href={`/posts/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      <img src="/vercel.svg" alt="me" />
    </div>
  );
}
