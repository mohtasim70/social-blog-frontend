import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authActions } from '../../store/store';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const isLogin= useSelector(state => state.auth.isLogged);
    const dispatch=useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    }


    return (
        <header className={classes.header}>
            <div className={classes.logo}>Blogs TkXel</div>
            <nav className={classes.nav}>
                <ul>
                    {/* {!isLogin &&
                    <li><NavLink to='/signup' activeClassName={classes.active}> Signup</NavLink></li>
                    } */}
                    {!isLogin && 
                    <li><NavLink to='/login' activeClassName={classes.active}>Login</NavLink></li>

                    }
                    {isLogin &&
                    <li onClick={logout}><NavLink to='/login' activeClassName={classes.active}>Logout</NavLink></li>
                    }

                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;