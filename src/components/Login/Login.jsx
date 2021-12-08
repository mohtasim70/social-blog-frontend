import Card from "../../UI/Card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import {authActions} from '../../store/store'
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
import UsersService from "../../services/UsersService";

const Login = () => {
    const {getUsers}= UsersService();

    const [users, setUsers]= useState([]);
    const [username, setUsername]=useState();
    const [isRequired, setisRequired]= useState(false);
    const [password, setPassword]=useState();
    const history = useHistory();
    const dispatch=useDispatch();

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

    const usernameChangeHandler= (event) => {
        setUsername(event.target.value);
        setisRequired(true);
    }
    const passwordChangeHandler= (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = () => {
     
        const user=users.find(user => user.username===username);
        if(user){
            dispatch(authActions.toggle(user));
            history.push('/posts');
        }
       else{
           alert("User doesn't exist");
       }
    }


    return (
        <div>
            <Card>
                <form >
                    <TextField
                        required
                        id="outlined"
                        label="Username"
                        margin="normal"
                        error={isRequired}
                        onChange={usernameChangeHandler}
                    />
                    <br/>          
                    <TextField
                        required
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        error
                        onChange={passwordChangeHandler}
                    />
                    <br/>
                    <Button onClick={onSubmitHandler} variant="contained">Login</Button>


                </form>

            </Card>
        </div>
    );

}

export default Login;