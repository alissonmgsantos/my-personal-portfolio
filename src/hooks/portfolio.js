import { graphql, useStaticQuery } from 'gatsby';
export const useQueryPortfolio = () => {
  const result = useStaticQuery(
    graphql`
      query Portfolio {
        data: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(posts/portfolio)/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                type
                image
                preview
                repository
                descriptionPT
                descriptionEN
                tags
              }
            }
          }
        }
      }
    `
  );
  if (result.data) {
    return result.data.edges.map(value => value.node.frontmatter);
  } else {
    return [];
  }
};
