// import React from "react";
// import moment from "moment";
// import Link from "next/link";

// const PostCard = ({ post }) => (
//   <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
//     <div className="relative overflow-hidden shadow-md pb-80 mb-6">
//       <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
//     </div>

//     <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
//       <Link href={`/post/${post.slug}`}>{post.title}</Link>
//     </h1>
//     <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
//       <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
//         <img
//           alt={post.author.name}
//           height="30px"
//           width="30px"
//           className="align-middle rounded-full"
//           src={post.author.photo.url}
//         />
//         <p className="inline align-middle tex-gray-700 ml-2 text-lg">{post.author.name}</p>
//       </div>
//       <div className="font-medium text-gray-700">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//         <span>{moment(post.createdAt).format("MMM DD YYYY")}</span>
//       </div>
//     </div>
//     <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
//       {post.excerpt}
//     </p>
//     <div className="text-center">
//       <Link href={`/post/${post.slug}`}>
//         <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
//       </Link>
//     </div>
//   </div>
// );

// export default PostCard;

import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }:{post: any}) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-0 lg:p-2 md:p-2 sm:p-2 pb-12 mb-5">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="w-24 h-24 object-cover rounded-full mr-4 lg:mr-8 mb-4 lg:mb-0"
        />
        <div className="flex-1">
          <h1 className="transition duration-300 cursor-pointer hover:text-pink-600 text-1xl font-semibold pl-1">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h1>
          <div className="flex items-center text-gray-700 font-medium mb-2 pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("MMM DD YYYY")}</span>
          </div>
          <p className="text-gray-600 font-normal text-sm mb-2 pl-2">{post.excerpt}</p>
          <div className="text-center">
            <Link href={`/post/${post.slug}`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-sm font-medium rounded-md text-white px-4 py-2 cursor-pointer">
                Read More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
