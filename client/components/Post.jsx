import Image from 'next/image';

import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const Post = ({ post }) => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white rounded-md mt-6 p-4'>
        <div className='flex items-center space-x-2'>
          <img
            src={post.profilePic}
            alt='Profile Pic'
            className='rounded-full w-10 h-10'
          />
          <div>
            <p className='font-medium'>{post.name}</p>
            <p className='text-xs text-gray-500'>{post.timestamp}</p>
          </div>
        </div>
        <p className='pt-4 pb-1'>{post.post}</p>
      </div>

      {/* If any image */}
      {post.image != null && (
        <div className='relative h-60 md:h-96 bg-white'>
          <Image src={post.image} alt='Post' layout='fill' objectFit='cover' />
        </div>
      )}

      {/* Post Footer */}
      <div className='flex items-center justify-center bg-white p-2'>
        <div className='flex items-center flex-grow justify-center space-x-1 hover:bg-gray-100  p-2 rounded-xl cursor-pointer'>
          <FiThumbsUp className='h-4' />
          <p className='text-sm sm:text-base'>Like</p>
        </div>
        <div className='flex items-center flex-grow justify-center space-x-1 hover:bg-gray-100  p-2 rounded-xl cursor-pointer'>
          <FaRegCommentAlt className='h-4' />
          <p className='text-sm sm:text-base'>Comment</p>
        </div>
        <div className='flex items-center flex-grow justify-center space-x-1 hover:bg-gray-100  p-2 rounded-xl cursor-pointer'>
          <RiShareForwardLine className='h-4' />
          <p className='text-sm sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
