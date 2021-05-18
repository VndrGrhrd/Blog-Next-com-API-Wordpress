export async function getFullPosts() {
  let fullPosts = {};
  const res = await fetch("http://localhost/sites/Blog-Next-com-API-Wordpress/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query localhost {
        posts(where: {categoryId: $categoryid}) {
          nodes {
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
            slug
            title
            excerpt
            isSticky
          }
        }
        categories {
          nodes {
            categoryId
            name
            slug
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
      };
    })
    .catch(function (error) {
      console.log(error);
    });
  //  console.log(fullPosts.posts.data.posts)
  return fullPosts.posts;
}
