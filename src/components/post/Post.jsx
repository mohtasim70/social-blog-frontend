import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from "../../UI/Card";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import classes from './Post.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
const Post = (props) => {

    // const likeStyle = {
    //     cursor: "pointer",
    //     margin: 1,
    //     fill: 'blue',
    //     animation: 'infinite',
    //     AnimationEffect: 'sdsd'

    // };
    const [postId, setPostId] = useState()
    const deletePost = async () => {
        let value = await props.delete(postId);
        // setOpen(false);
        // setOpenSuccess(true);

    };
    const mypage = props.data.userId === useSelector(state => state.auth.profile.id);
    return (
        <div>
            <div className="post">
                <Card>
                    <Avatar
                        sx={{ width: 24, height: 24 }}
                    />
                    <h4>{props.user.username}</h4>
                    <p>{props.data.title}</p>
                    {
                        mypage &&
                        <>
                            <ButtonGroup size="medium" variant="text" aria-label="text button group">
                                <Link to={`/posts/edit/${props.data.id}`}>
                                    <EditIcon sx={{ cursor: "pointer", margin: 1 }}>Edit</EditIcon>
                                </Link>
                                {/* <ThumbUpAltOutlinedIcon className={classes.myIcon} sx={likeStyle}>Like</ThumbUpAltOutlinedIcon> */}
                                {/* <InsertCommentOutlinedIcon sx={{ margin: 1 }}>Comment</InsertCommentOutlinedIcon> */}
                                <DeleteForeverRoundedIcon onClick={async () => await props.delete(props.data.id)} sx={{ cursor: "pointer", margin: 1 }}>DeleteForeverRoundedIcon</DeleteForeverRoundedIcon>
                            </ButtonGroup>
                            <br />
                            <Link className='btn' to={`/posts/${props.data.id}`}>
                                View Fullscreen
                            </Link>
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




            </div>
        </div>
    );

};

export default Post;