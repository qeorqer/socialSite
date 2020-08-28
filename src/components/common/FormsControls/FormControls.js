import React from "react";
import classes from "./formControls.module.css"

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (

        <div className={classes.formControl + " " + (hasError && classes.error)}>
            {props.children}

            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => (
    <FormControl {...props}><textarea {...props.input} {...props}/> </FormControl>
)
export const Input = (props) => (
    <FormControl {...props}><input {...props.input} {...props}/> </FormControl>
)