


let posts = []; // จัดเก็บโพสต์



export function getPosts(ctx) {
  ctx.body = posts;
}

export function createPost(ctx) {
    const { title, content } = ctx.request.body;
    const { username } = ctx.state.user;
  
    if (!title || typeof title !== 'string' || title.trim() === '') {
      ctx.status = 400;
      ctx.body = { error: 'Title is required and must be a non-empty string' };
      return;
    }
  
    if (!content || typeof content !== 'string' || content.trim() === '') {
      ctx.status = 400;
      ctx.body = { error: 'Content is required and must be a non-empty string' };
      return;
    }
  
    const post = {
      id: posts.length + 1,
      title: title.trim(),
      content: content.trim(),
      author: username,
    };
  
    posts.push(post);
    ctx.status = 201;
    ctx.body = post;
  }
  

  export function deletePost(ctx) {
    const postId = parseInt(ctx.params.id);
  
    if (isNaN(postId)) {
      ctx.status = 400;
      ctx.body = { error: 'Post ID must be a valid number' };
      return;
    }
  
    const index = posts.findIndex(p => p.id === postId);
    if (index === -1) {
      ctx.status = 404;
      ctx.body = { error: 'Post not found' };
      return;
    }
  
    posts.splice(index, 1);
    ctx.body = { message: 'Post deleted successfully' };
  }
  


  export function updatePost(ctx) {
    const postId = parseInt(ctx.params.id);
    const { title, content } = ctx.request.body;
    const { username } = ctx.state.user;
  
    if (isNaN(postId)) {
      ctx.status = 400;
      ctx.body = { error: 'Post ID must be a valid number' };
      return;
    }
  
    const post = posts.find(p => p.id === postId);
    if (!post) {
      ctx.status = 404;
      ctx.body = { error: 'Post not found' };
      return;
    }
  
    if (post.author !== username) {
      ctx.status = 403;
      ctx.body = { error: 'You are not the author of this post' };
      return;
    }
  
    if (title && typeof title === 'string' && title.trim() !== '') {
      post.title = title.trim();
    }
  
    if (content && typeof content === 'string' && content.trim() !== '') {
      post.content = content.trim();
    }
  
    ctx.body = { message: 'Post updated successfully', post };
  }