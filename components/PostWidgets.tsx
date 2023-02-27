import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidgets = ({ categories, slug }:{categories: string, slug: string}) => {
    const [relatedPost, setRelatedPosts] = useState([]);

    useEffect(()=>{
        if(slug){
            getSimilarPosts(categories, slug )
            .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
            .then((result)=> setRelatedPosts(result))
        }

    }, [slug])

    //console.log(relatedPost)
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4'>
        <h3 className='text-l mb-8 font-semibold border-b pb-4'>
            {slug? 'Related Posts' : 'Recent Posts'}
        </h3>
        {relatedPost.map((post: any) => (
            <div key={post.title} className='flex items-center w-full mb-4'>
                <div className='w-16 flex-none'>
                    <img 
                    alt={post.title}
                    height='60px'
                    width='60px'
                    className='align-middle rounded-full'
                    src={post.featuredImage.url}
                    />

                </div>
                <div className='flex-grow ml-4'>
                    <p className='text-gray-500 font-xs'>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                        {post.title}
                    </Link>

                </div>
            </div>
        ))}
    </div>
  )
}

export default PostWidgets