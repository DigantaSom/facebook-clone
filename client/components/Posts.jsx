import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';

import { selectPost } from '../public/src/features/postSlice';

const Posts = () => {
  const posts = useSelector(selectPost);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
