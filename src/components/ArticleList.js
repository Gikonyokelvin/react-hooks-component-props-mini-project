import React from 'react'
import blogData from '../data/blog';
import Article from './Article';
function ArticleList({posts = blogData.posts}) {
  return (
    <div>
      <main>
        <Article posts={posts} key={posts.id} />
        <Article posts={posts} key={posts.id} />
        <Article posts={posts} key={posts.id}/>
      </main>
    </div>
  );
}

export default ArticleList;
