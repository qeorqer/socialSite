import React from "react";

type propsType = {
    message: string
}
const Message:React.FC<propsType> = (props) => <div>{props.message}</div>;


export default Message;
