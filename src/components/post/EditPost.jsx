import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useHistory, useParams } from "react-router";
import PostService from "../../services/PostService";
import Card from "../../UI/Card";


const EditPost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const {id}= useParams();
    const history = useHistory();
    const { getPost, editPost } = PostService();
    useEffect(() => {
        GetPost(id);
    }, [id]);


    const GetPost = async (id) => {
        try {
            var data = await getPost(id);
            setTitle(data.title);
            setBody(data.body)
        }
        catch {
            alert(id);
        }
    }

    const EditPost = async (id, data) => {
        try {
            var data = await editPost(id, data);
            alert("Successfully edited");

            history.push('/posts');
        }
        catch {
            alert("Cant edit post");
        }
    }


    const onTitleChange= (event) => {
        setTitle(event.target.value);
    }
    const onBodyChange =(event) => {
        setBody(event.target.value);
    }

    const onSubmitHandler =() => {
        const data= {
            body,
            title
        };
        EditPost(id,data);
    }


    return (
        <div>
            <Card>
                <form >
                    <TextField
                        id="outlined"
                        label="Title"
                        margin="normal"
                        value={title}
                        onChange={onTitleChange}
                    />
                    <br />
                    <TextField
                        id="outlined"
                        label="Body"
                        margin="normal"
                        value={body}
                        onChange={onBodyChange}
                    />
                    <br />
                    <Button onClick={onSubmitHandler} variant="contained">Edit</Button>

                </form>

            </Card>
        </div>
    );

};

export default EditPost;