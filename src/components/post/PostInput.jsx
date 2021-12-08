import { Modal, TextField, Button, Card } from "@mui/material";
import { forwardRef, useState } from "react";
import Box from '@mui/material/Box';
import classes from './PostInput.module.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PostInput = (props) => {
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');

    const [isEmpty, setisEmpty] = useState(true);
    const [open, setOpen] = useState(false);

    const [openSuccess, setOpenSuccess] = useState(false);
    const userId = useSelector(state => state.auth.profile.id);
    const handleCloseBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
    };


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onChangeData = (event) => {
        setData(event.target.value);
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const createPost =  async() => {
        const post = {
            title,
            body: data,
            userId
        };

        let value=await props.addPost(post);
        setOpen(false);
        setOpenSuccess(true);

    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };
    return (
        <div>
            <Card sx={{ padding: 4, margin: 7 }} >
                <h3>Write Something....</h3>
                <Button variant="contained" onClick={handleOpen}>
                    Create Post
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <form>
                            <TextField
                                id="outlined"
                                error={isEmpty}
                                placeholder="Write a title"
                                label="Write a title"
                                margin="medium"
                                style={{ paddingBottom: 10 }}
                                onChange={onChangeTitle}
                                value={title}
                            />
                            <br />
                            <TextField
                                id="outlined"
                                error={isEmpty}
                                placeholder="Write a blog"
                                label="Write a blog"
                                margin="medium"
                                style={{ paddingBottom: 10 }}
                                onChange={onChangeData}
                                value={data}
                            />
                            <br />

                            <Button disabled={!(data && title)} variant="contained" onClick={createPost}>
                                Post
                            </Button>


                        </form>
                    </Box>
                </Modal>

            </Card>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseBar}>
                <Alert onClose={handleCloseBar} severity="success" sx={{ width: '100%' }}>
                    Your post is successful!
                </Alert>
            </Snackbar>

        </div>
    );


};

export default PostInput;