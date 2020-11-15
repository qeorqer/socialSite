import React from "react";
import classes from "./formControls.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type formControlsType = {
    meta: WrappedFieldMetaProps
}

const FormControl:React.FC<formControlsType> = ({meta:{touched,error}, children}) => {
    const hasError = error && touched;
    return (

        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            {children}

            { hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => (
    <FormControl {...props}><textarea {...props.input} {...props}/> </FormControl>
)
export const Input: React.FC<WrappedFieldProps> = (props) => (
    <FormControl {...props}><input {...props.input} {...props}/> </FormControl>
)