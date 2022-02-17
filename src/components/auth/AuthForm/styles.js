import styled from "styled-components";

export const Wrapper = styled.div``;

export const Htag = styled.h3`
    margin: 0;
    display: inline-flex;
    color: #62666a;
    margin-bottom: 1rem;
`;

export const FormWrapper = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
`;

export const InputBox = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid gray;
    padding-bottom: 0.5rem;
    outline: none;
    &:focus {
        color: gray;
        border-bottom: 1px solid #ffffff;
    }

    margin-top: 1rem;
`;

export const SubmitButton = styled.button`
    border-radius: 1.25rem;
    background: #222429;
    height: 2.5rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    color: white;
    cursor: pointer;
`;

export const FooterBox = styled.div`
    text-align: right;

    a {
        font-weight: 600;
        text-decoration: underline;
        color: #62666a;
    }
`;
