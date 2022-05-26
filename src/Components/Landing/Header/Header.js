import React, { useEffect, useRef } from "react";
// import {Link, NavLink} from 'react-router-dom'
import "./header.scss";

import laptop from "../../../Assets/img/crypto-bg-img-768x586.png";
import btc1 from "../../../Assets/img/coin-2.png";
import btc2 from "../../../Assets/img/coin-3.png";
import ltm from "../../../Assets/img/coin-4.png";
import eth from "../../../Assets/img/eth.png";

const Header = () => {
  //   const liRef = useRef()
  //  useEffect(()=>{
  //    let ref =liRef.current.children

  //     for(let x=0 ; x < ref.length ; x++ ){
  //       console.log(ref[x])
  //       ref[x].addEventListener('click' , (e)=>{
  //        let currentBtn =  ref[x].classList.contains('header_active__TATx7')
  //         console.log(currentBtn);
  //       })
  //     }
  //  },[])
  return (
    <header>
      <div className="container" style={{ paddingBottom: "0.5rem" }}>
        <nav className="navBar">
          <div className="brand">brand</div>
          <div className="navList">
            <ul>
              <li>
                <a className="active" href="#">Home</a>
                {/* <NavLink exact activeClassName="active" to='#' >Home</NavLink> */}
              </li>
              <li>
                <a href="#features">Features</a>

                {/* <NavLink  activeClassName="active" to='#' >Features</NavLink> */}
              </li>
              <li>
                <a href="#learning">Learning</a>
                {/* <NavLink  activeClassName="active"  to='#'>Learning</NavLink> */}
              </li>
              <li>
                <a href="#download">Download</a>

                {/* <NavLink  activeClassName="active" to='#' >Testemonial</NavLink> */}
              </li>
            </ul>
          </div>
          <div className="wallet">
            <button>Connect to wallet</button>
          </div>
        </nav>
        <div className="header">
          <div className="headerContent">
            <h1>
              Buy & sell <br />
              crypto easily
            </h1>
            <p>
              Trade Bitcoin, Ethereum, USDT and other altcoins using our
              <br /> crypto trading app.
            </p>
            <button>Get Started</button>
          </div>
          <div className="headerImage">
            <img
              src={btc1}
              alt="bitcoin"
              height={100}
              width={100}
              className="btc1"
            />
            <img src={ltm} alt="ltm" height={80} width={80} className="ltm" />
            <img src={eth} alt="eth" height={120} width={120} className="eth" />
            <img src={btc2} alt="btc" height={70} width={70} className="btc2" />
            <img src={laptop} className="laptop" alt="laptop" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
