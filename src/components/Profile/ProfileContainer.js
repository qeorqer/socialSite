import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props} />
        );

    }
}

let mapStateToProps = (state) => ({
        isLoading: state.usersPage.isLoading,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id
    }
)
export default compose(
    connect(mapStateToProps, {
        getProfile: getProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter
)(ProfileContainer);
