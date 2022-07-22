package com.digantasom.facebookclone.service;

import com.digantasom.facebookclone.model.Post;

import java.util.List;

public interface PostService {
  Post addPost(Post post) throws Exception;
  List<Post> getPosts();
}
