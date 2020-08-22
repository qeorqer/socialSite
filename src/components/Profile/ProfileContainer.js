import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.id) {
            userId = this.props.id;
        }
        this.props.getProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );

    }
}
let mapStateToProps = (state) => ({
        isLoading: state.usersPage.isLoading,
        profile: state.profilePage.profile,
        id: state.auth.id
    }
)
export default compose(
    connect(mapStateToProps, {
        getProfile: getProfileThunkCreator,
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
