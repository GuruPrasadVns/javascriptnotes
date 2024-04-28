function Post(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Post('DS', 'Blog about DS', 'Guru');

console.log(post);