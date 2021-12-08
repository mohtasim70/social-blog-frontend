import { useEffect, useState } from "react";
import UsersService from "../../services/UsersService";
import Post from "./Post";
const PostList = (props) => {
    const {getUsers}= UsersService();

    const [users, setUsers]=useState();
    useEffect(() => {
        getAllUsers();
    },[]);

    const getAllUsers = async () => {
        try {
            var data = await getUsers();
            setUsers(data); 
          }
          catch {
            alert('Error whlle fetching users');
          }
    };

    return (
        <div>
            <ul>
                {
                    users &&
                    props.posts.map(post => (
                        <Post
                            data={post}
                            user={users.find(user => user.id===post.userId)}
                            delete={props.delete}
                        />
                    ))
                }
            </ul>
        </div>
    );

};

export default PostList;