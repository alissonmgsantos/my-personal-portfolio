import matter from 'gray-matter';

const getPostBySlug = async slug => {
  const content = await import(`../../posts/${slug}.md`);
  const { data } = matter(content.default);
  return { ...data };
};

export { getPostBySlug };
