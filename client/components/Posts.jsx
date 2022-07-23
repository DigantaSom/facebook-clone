import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Post from './Post';

import { addAllPost, selectPost } from '../public/src/features/postSlice';

const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT = 'http://localhost:8080/api/v1/post';

  const posts = useSelector(selectPost);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(FACEBOOK_CLONE_ENDPOINT);
      dispatch(addAllPost(data));
    };
    fetchData();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
