const DataQuery = `
{
  shop {
    description
    name
    articles(first: 50) {
      edges {
        node {
          id
        }
      }
    }
    products(first: 5) {
      edges {
        node {
          id
          handle
          title
          description
          images(first: 1){
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          collections(first: 50) {
            edges {
              node {
                id
                handle
                description
                descriptionHtml
                image {
                  altText
                  id
                  originalSrc
                  transformedSrc
                }
                title
                updatedAt
              }
            }
          }
        }
      }
    }
  }
}`;



export default {
    DataQuery,
}