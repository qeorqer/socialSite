import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utilits/validators/validators";
import classes from '../common/FormsControls/formControls.module.css';
import { loginFormValuesType } from "./Login";

type propsType = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<loginFormValuesType, propsType> & propsType > = ({handleSubmit, error, submitting, captcha}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="loginInputs">
                <Field component={Input} name="email" type="text" placeholder="login" validate={[required]}/>
                <Field component={Input} name="password" type="password" placeholder="password" validate={[required]}/>
            </div>
            <div className="loginCheckbox">
                <Field component={Input} type="checkbox" name="rememberMe" id="checkbox_id" value={false}/>
                <label htmlFor="checkbox_id">Remeber me</label>
                {captcha &&
                    <div className="captcha">
                <img src={captcha} alt="captcha"/>
                <Field component={Input} type="text" name="captcha" placeholder="Enter captcha" validate={[required]}/>
                </div>
                }
                {error &&
                <div className={classes.formSummaryError}>
                    {error}
                </div>
                }
                <div className="loginBtnHolder">
                    <button disabled={submitting}> login</button>
                </div>
            </div>
        </form>
    )
}
const RLoginForm = reduxForm<loginFormValuesType, propsType>({
    form: "login"
})(LoginForm);

export default RLoginForm;