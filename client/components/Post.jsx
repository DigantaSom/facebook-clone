import Image from 'next/image';

import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const Post = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white rounded-md mt-6 p-4'>
        <div className='flex items-center space-x-2'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png'
            alt='Profile Pic'
            className='rounded-full w-10 h-10'
          />
          <div>
            <p className='font-medium'>Diganta Som</p>
            <p className='text-xs text-gray-500'>Date</p>
          </div>
        </div>
        <p className='pt-4 pb-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi
        </p>
      </div>
      {/* If any image */}
      <div className='relative h-60 md:h-96 bg-white'>
        <Image
          src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='Post'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {/* Footer */}
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
