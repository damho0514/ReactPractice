import React from "react";
import AuthForm from "../components/auth/AuthForm/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate/AuthTemplate";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default RegisterPage;
