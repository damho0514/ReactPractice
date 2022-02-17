import React from "react";
import AuthTemplate from "../../components/auth/AuthTemplate/AuthTemplate";
import AuthForm from "../../components/auth/AuthForm/AuthForm";
const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};

export default LoginPage;
