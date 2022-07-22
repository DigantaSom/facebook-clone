package com.digantasom.facebookclone.service;

import com.digantasom.facebookclone.entity.PostEntity;
import com.digantasom.facebookclone.model.Post;
import com.digantasom.facebookclone.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;

public class PostServiceImpl implements PostService {
  private PostEntityRepository postEntityRepository;

  public PostServiceImpl(PostEntityRepository postEntityRepository) {
    this.postEntityRepository = postEntityRepository;
  }

  @Override
  public Post addPost(Post post) throws Exception {
    try {
      PostEntity postEntity = new PostEntity();
      BeanUtils.copyProperties(post, postEntity);

      if (post.getFile() != null && !post.getFile().equalsIgnoreCase("null")) {
        postEntity.setImage(post.getFile());
      } else {
        postEntity.setImage(null);
      }

      postEntity = postEntityRepository.save(postEntity);

      post.setId(postEntity.getId());
      post.setFile(null);
      post.setImage(postEntity.getImage());
    } catch (Exception e) {
      throw new Exception("Could not save Post: " + e);
    }
    return post;
  }
}
