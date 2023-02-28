/******
 * Any file inside the folder page / api is mapped to /api/ and
 * will be treated as an api endpoint instead of a page
*******/
import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  
  const graphQlClient = new GraphQLClient((graphqlApi), {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })
  

  const query = gql `
    mutation Createcomment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }}}) { id }
    }
  `
  
  try{
    const result = await graphQlClient.request(query, req.body)
    return res.status(200).send(result)
  }catch(error){
    console.log(error)
    return res.status(500).send(error)
  }
}
