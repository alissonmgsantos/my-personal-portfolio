import matter from 'gray-matter';
const getPostBySlug = async (folder, language = 'portuguese') => {
  const content = await import(`../../posts/${folder}/${language}.md`);
  const { data } = matter(content.default);
  return { ...data };
};

export { getPostBySlug };
