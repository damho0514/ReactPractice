import React from "react";
import { Link } from "react-router-dom";
import {
    Wrapper,
    Htag,
    FormWrapper,
    InputBox,
    SubmitButton,
    FooterBox,
} from "./styles";

const textMap = {
    login: "로그인",
    register: "회원가입",
};

const AuthForm = ({ type }) => {
    return (
        <Wrapper>
            <Htag>{textMap[type]}</Htag>
            <FormWrapper>
                <InputBox placeholder="아이디" />
                <InputBox placeholder="비밀번호" type="password" />
                {type === "register" && (
                    <input
                        name=""
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
                <SubmitButton type="submit">{textMap[type]}</SubmitButton>
            </FormWrapper>
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
