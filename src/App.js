import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import { observer } from "mobx-react";

// Components
//import Loading from "./components/Loading";
import SchoolList from "./components/SchoolList";
import ElementaryList from "./components/SchoolList/ElementaryList";
import MiddleSchoolList from "./components/SchoolList/MiddleSchoolList";
import HighSchoolList from "./components/SchoolList/HighSchoolList";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Store
// import authStore from "./components/store/authStore";

function App() {
  // const getView = () => {
  // if (authorStore.loading {/*|| bookStore.loading*/}) {

  // if (authStore.loading) {
  //   return <Loading />;
  // } else {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/schoollist" />
        <Route path="/login/" component={Login} />
        <Route path="/schoollist/" component={SchoolList} />
        <Route path="/elementarylist/" component={ElementaryList} />
        <Route path="/middleschoollist/" component={MiddleSchoolList} />
        <Route path="/highschoollist/" component={HighSchoolList} />
        {/* <Route path="/books/:bookColor?" component={BookList} /> */}
        <Route path="/signup/" component={Signup} />
        {/* <Route path="/authors/:authorID" component={AuthorDetail} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default withRouter(observer(App));
