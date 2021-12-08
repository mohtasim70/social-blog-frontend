
import Card from "../../UI/Card";
import Avatar from '@mui/material/Avatar';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useEffect, useState } from 'react';
import {useParams } from "react-router";
import PostService from "../../services/PostService";
import { useSelector } from "react-redux";

const PostPage = () => {

    const params= useParams();

    const [post,setPost]= useState();
    const user = useSelector(state => state.auth.profile);
    const [access,setAccess]= useState(false);
    const {getPost}= PostService();

    useEffect(() => {
        GetPost(params.id);
    },[params.id]);


    const GetPost = async(id) => {
        try{
            var data = await getPost(id);
            if(data.userId===user.id){
                setAccess(true);
                setPost(data); 
            }

        }
        catch{
            alert("Cant get post in post page");
        }

    }


    return (
        <div>
            <div className="post">
                { access ?
                <Card>
                    <Avatar
                        sx={{ width: 24, height: 24 }}
                    />
                    <h4>{user.username}</h4>
                    { post &&
                    <>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    </>
                    }
                
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Comments</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
                :
                <h1>Not Allowed to access post</h1>

                }

            </div>
        </div>
    );

};

export default PostPage;