import { useStaticQuery, graphql } from 'gatsby';
export const useQueryUser = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query User {
        markdownRemark(fileAbsolutePath: { regex: "/(user.md)/" }) {
          frontmatter {
            name
            bio
            skills
            services {
              name
              description
            }
          }
        }
      }
    `
  );
  return markdownRemark.frontmatter;
};
