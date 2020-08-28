import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utilits/validators/validators";
import classes from '../common/FormsControls/formControls.module.css';

let LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name="email" type="text" placeholder="login" validate={[required]}/>
            <Field component={Input} name="password" type="password" placeholder="password" validate={[required]}/>
        </div>
        <div>
            <Field component={Input} type="checkbox" name="rememberMe" id="checkbox_id" value={false}/>
            <label htmlFor="checkbox_id">Remeber me</label>
            {props.error &&
            <div className={classes.formSummaryError}>
                {props.error}
            </div>
            }

            <button> login</button>
        </div>
    </form>
)
LoginForm = reduxForm({
    form: "login"
})(LoginForm);

export default LoginForm;