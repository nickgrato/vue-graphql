export class QueryService{

    getProductQuery(handleId){
        let query = `
            {
              productByHandle(handle:"${handleId}") {
                title
                description
                onlineStoreUrl
                images(first: 1){
                  edges {
                    node {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }`;
        return query
      }

}