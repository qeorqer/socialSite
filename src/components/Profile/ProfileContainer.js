import React from "react";
import Profile from "./Profile";
import Axios from "axios";
import {connect} from "react-redux";
import {setUserProfileCreator} from "../../redux/profileReducer";
import {setLoadingCreator} from "../../redux/usersReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
       if(!userId){
           userId = 10990;
       }
        this.props.setLoading(true);
        let baseUrl = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
        Axios.get(baseUrl).then((response) => {
            this.props.setUserProfile(response.data);

            this.props.setLoading(false);
        });

    }
    render() {
        return (
                <Profile {...this.props} profile = {this.props.profile}/>
        );

    }
}
let mapStateToProps = (state) => ({
        isLoading: state.usersPage.isLoading,
        profile: state.profilePage.profile,
        id: state.auth.id
    }
)

let UrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile: setUserProfileCreator,
    setLoading: setLoadingCreator
})(UrlData);
