import matter from 'gray-matter';

const getPortfolio = context => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    return {
      ...document.data,
    };
  });
  return data;
};

const getPostBySlug = async (folder, language = 'portuguese') => {
  const content = await import(`../../posts/${folder}/${language}.md`);
  const { data } = matter(content.default);
  return { ...data };
};

export { getPortfolio, getPostBySlug };
