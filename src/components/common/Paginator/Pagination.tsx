import React from "react";
import classes from "../../Users/Users.module.css";

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (el: number | string) => void
}
let Pagination: React.FC<PropsType> = ({totalCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages:Array<number | string> = [];
    let current:number = currentPage;

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


    return (
        <div className={classes.pagination}>
            {pages.map((el, id) => (
                <span key={id}
                      className={currentPage === el ? classes.selected : ""}
                      onClick={() => {
                          onPageChanged(el);
                      }}
                >
                                {el}
                                </span>
            ))}
        </div>
    );
}

export default Pagination;
