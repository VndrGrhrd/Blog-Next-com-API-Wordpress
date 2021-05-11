import Head from 'next/head'
import  {getFullPosts} from './api/blogAPI'
import styles from '../styles/Home.module.css'

export default function HomePage( {postsObj} ) {
  
  const url = 'http://localhost/sites/wp-estudo/wp-content/uploads/2021/05/'
  // const categoria = postsObj.posts.data.categories
  // const PostItem = postsObj.posts.data.posts
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>App Localhost</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Teste Nextjs + API GraphQL WP
        </h1>
        {/* <div className={styles.grid}>
          <div>
            <select>
            {categoria.nodes.map((item) => {
              return (
                <option key={item.categoryId} data-categorie={item.categoryId}>
                  {item.name}
                </option>
              )
            })}
            </select>
          </div>
          {PostItem.nodes.map((post) =>{
            return (
              <article key={post.postId} className={styles.postsContainer}>
                <div><img src={post.featuredImage.node.sourceUrl}></img></div>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            )
          })}
        </div> */}
      </main>
    </div>
    {console.log(postsObj)}
    </>
  )
}

export const getStaticProps = async () => {
   const postsObj = await getFullPosts()

   return {
     props: {
       postsObj,
    },
     revalidate: 1, // In seconds
   }
 }