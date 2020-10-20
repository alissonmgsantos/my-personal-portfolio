import { graphql, useStaticQuery } from 'gatsby';
export const useQueryHome = () => {
  const result = useStaticQuery(
    graphql`
      query Home {
        en: markdownRemark(fileAbsolutePath: { regex: "posts/en/(home.md)/" }) {
          data: frontmatter {
            username
            description
          }
        }
        pt: markdownRemark(fileAbsolutePath: { regex: "posts/pt/(home.md)/" }) {
          data: frontmatter {
            username
            description
          }
        }
      }
    `
  );
  return result;
};
