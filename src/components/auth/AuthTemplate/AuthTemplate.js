import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, WhiteBox, LogoWrapper } from "./styles";

const AuthTemplate = ({ children }) => {
    return (
        <Wrapper>
            <WhiteBox>
                <LogoWrapper>
                    <Link to="/">REACTERS</Link>
                </LogoWrapper>
                {children}
            </WhiteBox>
        </Wrapper>
    );
};

export default AuthTemplate;
