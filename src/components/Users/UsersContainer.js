import React from "react";
import { connect } from "react-redux";
import { toggleFollowCreator, setUsersCreator, setCurrentPageCreator, setTotalCountCreator, setLoadingCreator } from "../../redux/usersReducer";
import Axios from "axios";
import Users from "./Users";
import Preloader from "../preloader/Preloader"

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
       this.props.setLoading(true);
      let baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
      Axios.get(baseUrl).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setLoading(false);
      });
    }
  }
  onPageChanged = (page) => {
    this.props.setPage(page);
    let baseUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`;
     this.props.setLoading(true);
    Axios.get(baseUrl).then((response) => {
      this.props.setUsers(response.data.items);
       this.props.setLoading(false);
      
    });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    let pages = [];
    let current = this.props.currentPage;

    /*making pagination in a dumb way*/
    pages.push(1);
    if(current > 3){
      pages.push("...");
    }
    if(current-2 > 0 && current - 2 !== 1){
      pages.push(current-2);
    }
    if(current-1 > 0 &&  current - 1 !== 1){
      pages.push(current-1);
    }
    if(current !== 1){
    pages.push(current);
    }
    if(current+1 && current+1 < pagesCount ){
      pages.push(current+1);
    }
    if(current+2 < pagesCount){
      pages.push(current+2 );
      pages.push("...");

    }
    if (current != pagesCount){
      pages.push(pagesCount);
    }
   

    return <>
    {this.props.isLoading ? <Preloader /> :  <Users users = {this.props.users} toggleFollow = {this.props.toggleFollow} pages = {pages} currentPage = {this.props.currentPage} onPageChanged = {this.onPageChanged} isLoading = {this.props.isLoading} /> }
   
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  };
};

export default connect(mapStateToProps, {
  toggleFollow:toggleFollowCreator,
  setUsers: setUsersCreator,
  setPage: setCurrentPageCreator,
  setTotalCount: setTotalCountCreator,
  setLoading: setLoadingCreator
})(UsersAPIContainer);
