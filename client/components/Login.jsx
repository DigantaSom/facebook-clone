import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto'>
      <Image
        src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
        alt='Facebook'
        width={240}
        height={240}
      />
      <a
        onClick={signIn}
        className='px-20 py-4 z-10 text-2xl text-white cursor-pointer -mt-16 bg-blue-500 rounded-md '
      >
        Login
      </a>
    </div>
  );
};

export default Login;
