import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostService from "../../services/PostService";
import PostInput from "../post/PostInput";
import PostList from "../post/PostList";

const Dashboard = () => {
  const { getPostsUser, createPost, deletePost } = PostService();

  const [posts, setPosts] = useState();
  const user = useSelector(state => state.auth.profile);

  useEffect(() => {
    getAllPostsUser(user.id);
  }, [])

  const getAllPostsUser = async (id) => {
    try {
      var data = await getPostsUser(id);
      setPosts(data);
    }
    catch {
      alert('Error whlle fetching posts');
    }
  }

  const AddPost = async (post) => {
    try {
      const result = await createPost(post);
      setPosts((prevPosts) => {
        return [result, ...prevPosts];
      });
    }
    catch {
      alert('Error while creating Post');
    }
  }
  const DeletePost = async (post) => {
    try {
      const result = await deletePost(post);
      setPosts(posts.filter(item => item.id !== post)
      );
    }
    catch {
      alert('Error while deleting Post');
    }
  }
  return (
    <Fragment>
      <PostInput addPost={AddPost} />
      {posts &&
        <PostList posts={posts} delete={DeletePost} />
      }
    </Fragment>
  );
}

export default Dashboard;