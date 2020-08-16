import React from "react";
import "./style.css";
import Header from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="inner">
                <Header/>
                <Nav/>
                <div className="app-content">
                    <Route path="/profile" component={Profile} />
                    <Route exact path="/dialogs" component={DialogsContainer} />
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
