import React from 'react';
import styled from "styled-components";

export default function Nav() {
    return (
        <>
            <Header>
                <Logo>
                    <Image src={require("../../../Assets/images/logo.svg").default} alt="logo" />
                </Logo>
                <Button>Sign Up</Button>

            </Header>
        </>
    )
}
const Header = styled.header`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 20px;

`
const Logo = styled.h1`
    width:100px;
`
const Image = styled.img`
    width:100%;
    display:block;
`
const Button = styled.a`
    padding:8px 20px;
    border-radius:5px;
    background:#00f;
    font-size:16px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
`
