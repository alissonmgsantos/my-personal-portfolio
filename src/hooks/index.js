import { useStaticQuery, graphql } from 'gatsby';
export const useQueryUser = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query User {
        markdownRemark(fileAbsolutePath: { regex: "/(user.md)/" }) {
          frontmatter {
            name
            pt {
              code
            }
            en {
              code
            }
          }
        }
      }
    `
  );
  return markdownRemark.frontmatter;
};
