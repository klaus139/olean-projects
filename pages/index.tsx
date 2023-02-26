import type { NextPage } from 'next'
import Head from 'next/head';
import { PostCard, PostWidgets, Categories } from '../components';

const Home: NextPage = () => {

  const posts = [
    {title: 'react testing', excerpt: 'learn react testing'},

    {title: 'react with tailwind testing', excerpt: 'learn react with tailwind testing'},
  ]
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Olean Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div> 
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg: sticky relative top-8'>
          <PostWidgets />
          <Categories />
        </div>

      </div>
    </div>
    </div>
  )
}

export default Home
