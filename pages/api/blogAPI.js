const sourceURL = 'http://studies.vandoir.com.br/graphql'

export async function getFullPosts() {
  let fullPosts = {};
  const res = await fetch(`${sourceURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query localhost {
        posts {
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
    .catch(function (error) {
      console.log(error);
    });
  //  console.log(fullPosts.posts.data.posts)
  return fullPosts.posts;
}

export async function postsPorCategoria(categoriaFiltro){
  let postsDaCategoria = {};
  const res = await fetch(`${sourceURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query localhost {
        posts(where: {categoryId: ${categoriaFiltro}}) {
          nodes {
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            excerpt
          }
        }
      }
      
    `,
    }),
  })
    .then(async (res) => {
      postsDaCategoria = {
        posts: await res.json(),
      };
    })
    .catch(function (error) {
      console.log(error);
    });
  //  console.log(postsDaCategoria.posts.data.posts)
  return postsDaCategoria.posts.data.posts
}