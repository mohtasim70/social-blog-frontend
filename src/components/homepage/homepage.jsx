import { Fragment, useEffect, useState } from "react";
import PostService from "../../services/PostService";
import PostList from "../post/PostList";

const Homepage =() => {

 const { getPosts } = PostService();

 const [posts, setPosts]= useState();

 useEffect(() => {
    getAllPosts();
 },[])

 const getAllPosts = async () => {
    try {
      var data = await getPosts();
      setPosts(data); 
    }
    catch {
      alert('Error whlle fetching posts');
    }
  }
    return (
        <Fragment>
            { posts &&
            <PostList posts={posts} />
            }
        </Fragment>
    );
}

export default Homepage;