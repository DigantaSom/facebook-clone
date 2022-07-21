import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';

import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
      <div className='flex items-center text-gray-500'>
        <p className='flex flex-grow text-lg font-semibold'>Contacts</p>
        <div className='flex space-x-1 px-2'>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <RiVideoAddFill />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <BiSearch />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name='Master Yoda'
        src='https://images.pexels.com/photos/7499839/pexels-photo-7499839.jpeg?auto=compress&cs=tinysrgb&w=800'
        status='Online'
      />
      <Contacts
        name='Obi-Wan Kenobi'
        src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=800'
        status='Offline'
      />
      <Contacts
        name='Anakin Skywalker'
        src='https://images.pexels.com/photos/9482193/pexels-photo-9482193.jpeg?auto=compress&cs=tinysrgb&w=800'
        status='Online'
      />
      <Contacts
        name='Darth Sidious'
        src='https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=800'
        status='Online'
      />
    </div>
  );
};

export default RightSidebar;
