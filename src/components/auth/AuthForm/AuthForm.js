import React from "react";
import { Link } from "react-router-dom";
import {
    Wrapper,
    Htag,
    CustomForm,
    InputBox,
    SubmitButton,
    FooterBox,
} from "./styles";

const textMap = {
    login: "로그인",
    register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
    return (
        <Wrapper>
            <Htag>{textMap[type]}</Htag>
            <CustomForm onSubmit={onSubmit}>
                <InputBox
                    placeholder="아이디"
                    onChange={onChange}
                    name="username"
                    value={form.username}
                />
                <InputBox
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                />
                {type === "register" && (
                    <InputBox
                        name="passwrodConfirm"
                        placeholder="비밀번호 확인"
                        value={form.passwrodConfirm}
                        type="password"
                        onChange={onChange}
                    />
                )}
                <SubmitButton type="submit">{textMap[type]}</SubmitButton>
            </CustomForm>
            <FooterBox>
                {type === "login" ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </FooterBox>
        </Wrapper>
    );
};

export default AuthForm;
