import React, {Suspense} from "react";
import "./style.css";
import Header from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {initializeThunkCreator} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {compose} from "redux";
import Login from "./components/login/Login";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const SettingsContainer = React.lazy(() => import("./components/Settings/SettingsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader minHeight={"100vh"}/>

        }

        return (


            <div className="inner">
                <Header/>
                <Nav/>
                <div className="app-content">
                    <Suspense fallback={<Preloader />}>
                    <Route path='/' exact component={this.props.isAuth ? ProfileContainer : Login}/>
                    <Route path='/profile/:userId?' component={ProfileContainer}/>
                    <Route exact path="/dialogs" component={DialogsContainer}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/settings" component={SettingsContainer}/>
                    <Route path="/login" component={Login}/>
                    </Suspense>
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.setApp.initialized,
        isAuth: state.auth.isAuth
    };
};


export default compose(connect(mapStateToProps, {initializeApp: initializeThunkCreator}),
    withRouter)(App);
