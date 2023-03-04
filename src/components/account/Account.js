import React from "react";
import "./Account.css";

import LeftMenu from "../menus/left_menu/LeftMenu";
import RightMenu from "../menus/right_menu/RightMenu";

const Account = () => {
    return (
        <>
            <LeftMenu />
            <RightMenu />
            <div className="account">

                <div className="top_account">
                    <div className="infos__profile">
                        <img src={require("../images/profile.png")} alt="profile" className="profile_pic" />
                        <h1 className="your__name">Your Name</h1>
                        <p className="your__email">your-email@email.com</p>
                    </div>

                    <div className="balance__square">
                        <h3 className="op_b">balance</h3>
                        <h3 className="money">R$ 4,180.20</h3>
                        <button className="tranfer">transfer</button>
                    </div>
                </div>
                <div className="botton_account">
                    <h3 className="lattest">
                        latest transactions
                    </h3>
                    <div className="grid__trans">
                        <div className="movings">
                            <h4><i class="bi bi-browser-safari"></i>Lorem Ipsun Congnaturus</h4>
                            <h4><i class="bi bi-browser-safari"></i>Lorem Ipsun Congnaturus</h4>
                            <h4><i class="bi bi-browser-safari"></i>Lorem Ipsun Congnaturus</h4>
                            <h4><i class="bi bi-browser-safari"></i>Lorem Ipsun Congnaturus</h4>
                            <h4><i class="bi bi-browser-safari"></i>Lorem Ipsun Congnaturus</h4>
                            <h4><i class="bi bi-browser-safari"></i>Lorem Ipsun Congnaturus</h4>
                        </div>

                        <div className="moving_cash">
                            <h4> - $2,300.30</h4>
                            <h4> - $9,500.30</h4>
                            <h4> - $1,500.50</h4>
                            <h4> - $1,500.50</h4>
                            <h4> - $1,500.50</h4>
                            <h4> - $1,500.50</h4>
                            <h4> - $1,500.50</h4>
                        </div>
                    </div>
                    <p className="more"> more<i class="bi bi-caret-right-fill"></i></p>
                </div>
            </div>
        </>

    )
}

export default Account;