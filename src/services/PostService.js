import http from "./HttpService";

const PostService = () => {
    const getPosts = async () => {
        try {
          const response = await http.get("https://jsonplaceholder.typicode.com/posts");
          return await response.data;
        } catch (error) {
          console.log("failed", error);
        }
      };

      const getPostsUser = async (userId) => {
        try {
          const response = await http.get("https://jsonplaceholder.typicode.com/posts");
          let data=await response.data;
          data=data.filter((data) => data.userId===userId);
          return data;
        } catch (error) {
          console.log("failed", error);
        }
      };

      const getPost = async (id) => {
        try {
          const response = await http.get("https://jsonplaceholder.typicode.com/posts/"+id);
          return await response.data;
        } catch (error) {
          console.log("failed", id);
        }
      };
      const deletePost = async (id) => {
        try {
          const response = await http.delete("https://jsonplaceholder.typicode.com/posts/"+id);
          return await response.data;
        } catch (error) {
          console.log("failed", error);
        }
      };

      const createPost = async (postObj) => {
        try {
          const response = await http.post("https://jsonplaceholder.typicode.com/posts", postObj);
          const value=await response.data;
          return value;
        } catch (error) {
          console.log("failed to create", error);
        }
      };
      
      const editPost = async (id, postObj) => {
        try {
          const response = await http.put("https://jsonplaceholder.typicode.com/posts/"+id, postObj);
          const value=await response.data;
          return value;
        } catch (error) {
          console.log("failed to create", error);
        }
      };

      return {getPosts,getPostsUser, getPost, createPost, deletePost, editPost};

};

export default PostService;