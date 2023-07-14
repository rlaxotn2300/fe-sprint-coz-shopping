import React, {useState} from "react";
import './Header.css';
import {Link} from 'react-router-dom'
import Logo from'../images/logo.png';
import Hamberger from'../images/Hamberger.png';
import productImg from '../images/product.png'
import starImg from '../images/star.png'


const Header = () => {

    const [isDrop,setIsDrop] = useState(false);

    const dropDownHandler = () => {
        setIsDrop(!isDrop);
    }

    const blurHandle = () => {
        setIsDrop(false)
    }

    return(
        <div className="header"  onBlur={blurHandle}>
            <div className="header_box">
                    <Link to='/'><img src={Logo} alt="logo" className="Logo" /></Link>
                    <span className="Logo_txt">COZ Shopping</span>    
                <button onClick={dropDownHandler}><img src={Hamberger} className="Hamberger" /></button>
                {isDrop && (
                <div className="drop">
                    {<ul>
                        <li>ooo님, 안녕하세요!</li>
                        <li><img src={productImg}/>상품리스트 페이지</li>
                        <li><img src={starImg}/>북마크 페이지</li>
                    </ul>}
                </div>
            )}
            </div>
        </div>
    )
}

export default Header;