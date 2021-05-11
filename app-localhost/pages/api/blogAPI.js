export async function getFullPosts() {
  let fullPosts = {};
  const res = await fetch("http://localhost/sites/wp-estudo/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query localhost {
        posts {
          nodes {
            author {
              node {
                avatar {
                  url
                }                
                userId
                name
                username
              }
            }
      categories {
              nodes {
                categoryId
                name
                slug
              }
            }
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
            postId
            slug
            title
            tags {
              nodes {
                slug
                tagId
                name
              }
            }
            excerpt
          }
        }
      }
      
    `,
    }),
  })
    .then(async (res) => {
      fullPosts = {
        posts: await res.json(),
      };
    })
    .then(async (res) => {
      fullPosts = {
        posts: await res.json(),
      }
    })
    .catch(function (error) {
      console.log(error)
    })
    //  console.log(fullPosts.posts.data.posts)
    return fullPosts.posts.data.posts
    }




