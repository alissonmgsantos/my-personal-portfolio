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
        ) {
          nodes {
            frontmatter {
              type
              title
              subTitle
              activity
            }
          }
        }
        pt: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/(posts/experience)/" }
            frontmatter: { language: { eq: "portuguese" } }
          }
        ) {
          nodes {
            frontmatter {
              type
              title
              subTitle
              activity
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
