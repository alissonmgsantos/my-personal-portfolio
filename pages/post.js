import matter from 'gray-matter';
import React from 'react';
const Post = ({ content, data }) => {
  const frontmatter = data;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{content}</p>
    </div>
  );
};

Post.getInitialProps = async context => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../posts/home.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };

  return { slug };
};

export default Post;
