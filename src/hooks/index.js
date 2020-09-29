import { useStaticQuery, graphql } from 'gatsby';
export const useQueryUser = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query User {
        markdownRemark(fileAbsolutePath: { regex: "/(user.md)/" }) {
          frontmatter {
            name
            hard_skills
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
