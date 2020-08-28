import React from "react";
import "./style.css";
import Header from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/login/Login";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {initializeThunkCreator} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Preloader/>
                </div>
            )
        }

        return (
            <BrowserRouter>
                <div className="inner">
                    <Header/>
                    <Nav/>
                    <div className="app-content">
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route exact path="/dialogs" component={DialogsContainer}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.setApp.initialized
    };
};


export default connect(mapStateToProps, {initializeApp: initializeThunkCreator})(App);
