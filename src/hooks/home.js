import { graphql, useStaticQuery } from 'gatsby';
export const useQueryHome = () => {
  const result = useStaticQuery(
    graphql`
      query Home {
        en: markdownRemark(
          fileAbsolutePath: { regex: "posts/home/(home_english.md)/" }
        ) {
          data: frontmatter {
            username
            photo
            skills
          }
        }
        pt: markdownRemark(
          fileAbsolutePath: { regex: "posts/home/(home_portuguese.md)/" }
        ) {
          data: frontmatter {
            username
            photo
            skills
          }
        }
      }
    `
  );
  return result;
};
