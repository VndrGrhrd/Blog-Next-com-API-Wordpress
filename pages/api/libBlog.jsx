export function libBlog(){
    const Postlegth = fullPosts.posts.data.posts.nodes.length
    let item = 0
    let Categoria = fullPosts.posts.data.posts.nodes[item].categories.nodes
    let categoriaPost = {
      categoriaId: Categoria.map((item) => {
        return item.categoryId
      }),
      categoriaName: Categoria.map((item) => {
        return item.name
      }),
    } //retorna um array com as categorias do Post

    let Autor = fullPosts.posts.data.posts.nodes[item].author.node
    let autorPost = {
      autorId: Autor.userId,
      autorAvatar: Autor.avatar.url,
      autorName: Autor.name,
      autorUser: Autor.username,
    }

    let PostItem = fullPosts.posts.data.posts.nodes[item]
    let postItemObj = {
      postId: PostItem.postId,
      PostTitle: PostItem.title,
      imgfeatured: PostItem.featuredImage.node.slug,
      imgAltTxt: PostItem.featuredImage.node.altText,
      isSticky: PostItem.isSticky,
      status: PostItem.status,
      conteudo: PostItem.content,
      categoria: PostItem.categories.nodes.map((item) => {
        return item.categoryId
      }),
    }
}

for (item = 0; item < Postlegth; ++item) {
  console.log('NOVO POST')
  categoriaPost.categoriaName.map((item) => {
    return console.log(item.toString())
  })
  console.log(autorPost.autorName)
  console.log(postItemObj.PostTitle)
  console.log(postItemObj.imgfeatured)
  console.log(postItemObj.conteudo)
}