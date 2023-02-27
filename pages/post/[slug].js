import React from 'react';
import { getPostDetails, getPosts } from '../../services';
import { PostDetail, Categories, PostWidgets, Author, Comments, CommentsForm, Payment } from '../../components';

const PostDetails = ( { post }) => {
  //console.log(post)
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author}/>
          <CommentsForm slug={post.slug}/>
          <Comments slug={post.slug}/>

        </div>
        <div className='col-span-1 lg:col-span-4'>
        <div className='lg: sticky relative top-8'>
          <PostWidgets slug={post.slug} categories={post.categories.map((category) => category.slug)} />
          <Categories />
        </div>

        </div>

      </div>
   
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params}) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const post = await getPosts();
  return {
    paths: post.map(( {node: { slug }}) => ({params: { slug }})),
    fallback: false,
  }
}