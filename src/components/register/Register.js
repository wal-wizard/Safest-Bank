import React from "react";
import styled from "styled-components";
import "./Register.css"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <div className="top__section">
                <div className="grid__icons">
                    <img src={require("../images/icon_1.png")} alt="icon" className="icons_st" />
                    <img src={require("../images/icon_2.png")} alt="icon" className="icons_st" />
                    <img src={require("../images/icon_3.png")} alt="icon" className="icons_st" />
                </div>
                <TITLE>connect to your bank account</TITLE>
            </div>
            <div className="bottom__section">
                <input type={"text"} required placeholder="Your Name"  className="input__field"/>
                <br />
                <input type={"text"} required placeholder="Bank Account" className="input__field"/>
                <br />
                <input type={"text"} required placeholder="Email" className="input__field"/>
                <br />
                <input type={"text"} required placeholder="Password" className="input__field"/>
                <br />
                <h6 className="checkboxe">
                    <input type={"checkbox"} />By siging up, you  agree to <br />banks term of use & privace policy
                </h6>
                <br />
                <div className="res">
                    <a href="/" className="bnt_1"><Link to={"/"} className="lk">sign in</Link></a> 
                    or
                    <a href="/" className="btn_2">cancel</a>
                </div>
                <br />
                <p className="already">already sign up ? <Link to={"/"}>log in</Link></p>
            </div>
        </div>
    )
}

const TITLE = styled.h1`
    color: #fff;
    font-size: 18px;
    text-align: center;
    position: relative;
    top: 50%;
`

export default Register;