import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, WhiteBox, LogoWrapper } from "./styles";

const AuthTemplate = ({ children }) => {
    return (
        <Wrapper>
            <WhiteBox>
                <LogoWrapper>
                    <Link to="/">{children}</Link>
                </LogoWrapper>
            </WhiteBox>
        </Wrapper>
    );
};

export default AuthTemplate;
