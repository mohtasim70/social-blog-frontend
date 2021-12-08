import { Fragment } from 'react';
import './App.css';
import { Redirect, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/homepage';
import PrivateRoute from './components/PrivateRoute';
import Post from './components/post/Post';
import PostPage from './components/post/PostPage';
import EditPost from './components/post/EditPost';

function App() {
  return (
      <Layout>

        <Switch>
        <Route path="/" exact >
          <Homepage/>
        </Route>
          <Route path="/signup">

          </Route>
          <Route path="/login" exact>
              <Login/>
          </Route>
          <PrivateRoute path="/posts" exact>
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/posts/edit/:id">
            <EditPost/>
          </PrivateRoute>
          <PrivateRoute path="/posts/:id">
            <PostPage/>
          </PrivateRoute>

       

        </Switch>

      </Layout>
  );
}

export default App;
