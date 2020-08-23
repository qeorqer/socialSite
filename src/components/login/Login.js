import React from 'react';

const Login = props =>{
    let style = `
    .inner {
  grid-template-areas: 
  "hdr hdr"
  "cnt cnt";
  grid-template-rows: 120px 1fr;
  grid-template-columns: 1fr 5fr;
  grid-gap: 10px;
  max-width: 1200px;
    margin: 0 auto;
}
nav{
display:none
}
   
   `
    return (
        <div>
    <h1>Login</h1>

            <style>
                {style}
            </style>
        </div>
)}

export default Login;