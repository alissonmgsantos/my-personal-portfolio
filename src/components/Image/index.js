import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ src, width = 'auto', height = 'auto' }) => {
  const { data } = useStaticQuery(graphql`
    query Images {
      data: allFile(filter: { extension: { regex: "/(svg|png|jpeg|jpg)/" } }) {
        edges {
          node {
            id
            name
            extension
            publicURL
          }
        }
      }
    }
  `);
  let file = data.edges.filter(image => image.node.name === src);
  if (file[0]?.node) {
    return (
      <img
        className="ml-2 mr-2"
        src={file[0].node.publicURL}
        width={width}
        heigh={height}
        alt={file[0].node.name}
      />
    );
  } else {
    return true;
  }
};

export default Image;
