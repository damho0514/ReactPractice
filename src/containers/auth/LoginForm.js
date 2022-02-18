import React, { Component } from "react";
import { connect } from "react-redux";
import AuthForm from "../../components/auth/AuthForm/AuthForm";
import { changeField, initializeForm } from "../../modules/auth";

class LoginForm extends Component {
    handleChange = (e) => {
        const { value, name } = e.target;
        this.props.changeField({
            type: "login",
            key: name,
            value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", this.props.form);
    };

    componentDidMount() {
        this.props.initializeForm();
    }
    render() {
        const { form } = this.props;
        return (
            <AuthForm
                type="login"
                form={form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default connect(({ auth }) => ({ form: auth.login }), {
    changeField,
    initializeForm,
})(LoginForm);
