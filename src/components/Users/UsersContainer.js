import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPageCreator, getUsersThunkCreator, toggleFollowThunkCreator
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

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setPage(page);
        this.props.getUsers(page, this.props.pageSize);

    };

    render() {


        return <>
            {this.props.isLoading ? <Preloader/> :
                <Users {...this.props}  onPageChanged={this.onPageChanged}/>}

        </>
    }
}

let mapStateToProps = (state) => {
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
    setPage: setCurrentPageCreator,
    getUsers: getUsersThunkCreator
})(UsersAPIContainer);
