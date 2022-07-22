import { useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { addPost } from '../public/src/features/postSlice';

const CreatePost = () => {
  const FACEBOOK_CLONE_ENDPOINT = '';

  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const dispatch = useDispatch();

  const handleClickFileButton = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = e => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = e => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!inputRef.current.value) {
      return;
    }
    const formData = new FormData();
    formData.append('file', imageToPost);
    formData.append('post', inputRef.current.value);
    formData.append('name', session?.user?.name);
    formData.append('email', session?.user?.email);
    formData.append('profilePic', session?.user?.image);

    try {
      const response = await axios.post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: 'application/json' },
      });
      inputRef.current.value = '';
      dispatch(addPost(response.data));
      removeImage();
    } catch (err) {
      console.log('Error creating post:', err);
    }
  };

  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
      <div className='flex p-4 space-x-2 items-center'>
        <Image
          src={session?.user?.image}
          alt='Profile Pic'
          width={40}
          height={40}
          className='rounded-full cursor-pointer'
        />
        <form className='flex flex-1'>
          <input
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user?.name
              .split(' ')[0]
              .trim()}?`}
            className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4'
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>

      {imageToPost && (
        <div
          className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer'
          onClick={removeImage}
        >
          <img src={imageToPost} alt='Post' className='h-10 object-contain' />
          <RiDeleteBin6Line className='h-8 hover:text-red-500' />
        </div>
      )}

      <div className='flex justify-evenly py-2'>
        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
          <HiOutlineVideoCamera size={20} className='text-red-500' />
          <p className='font-semibold text-gray-600'>Live Video</p>
        </div>

        <div
          className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'
          onClick={handleClickFileButton}
        >
          <IoMdPhotos size={20} className='text-green-500' />
          <p className='font-semibold text-gray-600'>Photo / Video</p>
          <input
            type='file'
            ref={hiddenFileInput}
            hidden
            accept='image/*'
            onChange={addImageToPost}
          />
        </div>

        <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
          <BsEmojiSmile size={20} className='text-yellow-500' />
          <p className='font-semibold text-gray-600'>Feeling / Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
