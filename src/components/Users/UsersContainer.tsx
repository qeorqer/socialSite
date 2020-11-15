import React from "react";
import {connect} from "react-redux";
import {
    actions, getUsersThunkCreator, toggleFollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/usersSelectors";
import {userType} from "../../redux/types/types";
import { StateAppType } from "../../redux/store";

type MapStateToPropsType = {
    currentPage:number
    pageSize:number
    isLoading:boolean
    users:Array<userType>
    totalCount:number
    followingInProgress:Array<number>
}
type MapDispatchToPropsType = {
    getUsers:(currentPage:number,pageSize:number) => void
    setPage:(currentPage:number) => void
    toggleFollow:(flag:boolean, id:number) => void
}
type PropsType = MapDispatchToPropsType & MapStateToPropsType;

class UsersAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage:any):void=> {
        this.props.setPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);

    };

    render() {


        return <>
            {this.props.isLoading ? <Preloader/> :
                <Users {...this.props}  onPageChanged={this.onPageChanged}/>}

        </>
    }
}

let mapStateToProps = (state:StateAppType):MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    };
}

export default connect(mapStateToProps, {
    toggleFollow: toggleFollowThunkCreator,
    setPage: actions.setCurrentPageCreator,
    getUsers: getUsersThunkCreator
})(UsersAPIContainer);
