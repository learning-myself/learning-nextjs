// export async function getStaticProps() {
//   const res = await fetch('https://5cc2bf77968a0b001496d996.mockapi.io/api/products');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     },
//     revalidate: 1,
//   }
// }

import styles from './index.module.scss';
import Link from 'next/link';

export async function getServerSideProps() {
  const res = await fetch('https://5cc2bf77968a0b001496d996.mockapi.io/api/products');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {

  return (
    <div className={styles.wrapper}>
      {
        posts.map(item => (
          <div keu={item.id}>{item.name}</div>
        ))
      }
      <img src="/vercel.svg" alt="me" />
    </div>
  )
}
