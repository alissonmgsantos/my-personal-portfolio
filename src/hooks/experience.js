import { graphql, useStaticQuery } from 'gatsby';
export const useQueryExperience = () => {
  const result = useStaticQuery(
    graphql`
      query Experience {
        en: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/(posts/experience)/" }
            frontmatter: { language: { eq: "english" } }
          }
          sort: { order: DESC, fields: frontmatter___position }
        ) {
          nodes {
            frontmatter {
              type
              title
              subTitle
              activity
              period
            }
          }
        }
        pt: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/(posts/experience)/" }
            frontmatter: { language: { eq: "portuguese" } }
          }
          sort: { order: DESC, fields: frontmatter___position }
        ) {
          nodes {
            frontmatter {
              type
              title
              subTitle
              activity
              period
            }
          }
        }
      }
    `
  );
  let en = result['en'].nodes.map(value => value.frontmatter);
  let pt = result['pt'].nodes.map(value => value.frontmatter);
  return { en, pt };
};
