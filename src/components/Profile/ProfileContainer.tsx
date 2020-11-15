import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {StateAppType} from "../../redux/store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    getProfile: (userId:number,mine:boolean) => void,
    getStatus: (userId:number) => void
    updateStatus: (status:string) => void
}
type PathParamType = {
    userId: string
}

type propsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamType>;
class ProfileContainer extends React.Component<propsType> {
    updateProfile() {
        let userId:number | null = +this.props.match.params.userId;
        let mine = false;
        if (!userId) {
            userId = this.props.id;
            mine = true;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        if (!userId){
            console.error("ID must exist in query")
        } else{
            this.props.getProfile(userId,mine);
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps:propsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId} />
        );

    }
}

let mapStateToProps = (state:StateAppType) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id,
    }
)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile: getProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter
)(ProfileContainer);
