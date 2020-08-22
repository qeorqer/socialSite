import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPageCreator, getUsersThunkCreator, toggleFollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../preloader/Preloader";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setPage(page);
        this.props.getUsers(page, this.props.pageSize);

    };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        let current = this.props.currentPage;

        /*making pagination in a dumb way*/
        pages.push(1);
        if (current > 3) {
            pages.push("...");
        }
        if (current - 2 > 0 && current - 2 !== 1) {
            pages.push(current - 2);
        }
        if (current - 1 > 0 && current - 1 !== 1) {
            pages.push(current - 1);
        }
        if (current !== 1) {
            pages.push(current);
        }
        if (current + 1 && current + 1 < pagesCount) {
            pages.push(current + 1);
        }
        if (current + 2 < pagesCount) {
            pages.push(current + 2);
            pages.push("...");

        }
        if (current !== pagesCount) {
            pages.push(pagesCount);
        }


        return <>
            {this.props.isLoading ? <Preloader/> :
                <Users {...this.props} pages={pages} onPageChanged={this.onPageChanged}/>}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default connect(mapStateToProps, {
    toggleFollow: toggleFollowThunkCreator,
    setPage: setCurrentPageCreator,
    getUsers: getUsersThunkCreator
})(UsersAPIContainer);
