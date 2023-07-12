import React, {useState} from "react";
import './Header.css';
import Logo from'./images/logo.png';
import Hamberger from'./images/Hamberger.png';


const Header = () => {

    const [isDrop,setIsDrop] = useState(false);

    const dropDownHandler = () => {
        setIsDrop(!isDrop);
    }

    return(
        <div className="header">
            <div className="header_box">
                    <img src={Logo} alt="logo" className="Logo" />
                    <span className="Logo_txt">COZ Shopping</span>    
                <button onClick={dropDownHandler}><img src={Hamberger} className="Hamberger" /></button>
                {isDrop && (
                <div className="drop">
                    {<ul>
                        <li>ooo님, 안녕하세요!</li>
                        <li>상품리스트 페이지</li>
                        <li>북마크 페이지</li>
                    </ul>}
                </div>
            )}
            </div>
        </div>
    )
}

export default Header;