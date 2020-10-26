import { graphql, useStaticQuery } from 'gatsby';
export const useQueryAbout = () => {
  const result = useStaticQuery(
    graphql`
      query About {
        en: markdownRemark(
          fileAbsolutePath: { regex: "posts/about/(about_english.md)/" }
        ) {
          data: frontmatter {
            bio
            skills
          }
        }
        pt: markdownRemark(
          fileAbsolutePath: { regex: "posts/about/(about_portuguese.md)/" }
        ) {
          data: frontmatter {
            bio
            skills
          }
        }
      }
    `
  );
  return result;
};
