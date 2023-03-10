import type { NextPage } from 'next'
import Head from 'next/head';
import { PostCard, PostWidgets, Categories } from '../components';
import { getPosts } from '../services';

export default function Home ({ posts }:{posts:any}) {

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Olean Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post: any, index: any)=> (
          <PostCard key={index} post={post.node} />
        ))}
      </div> 
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg: sticky relative top-8'>
          <PostWidgets categories={''} slug={''} />
          <Categories />
        </div>

      </div>
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = ( await getPosts()) || [];

  return {
    props: { posts }
  }
}

