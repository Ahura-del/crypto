import { Button, Grid } from "@mui/material";
import React from "react";
import styles from "./header.module.css";
import bg from "../../../Assets/img/bg-nft-234s.png";
import laptop from "../../../Assets/img/crypto-bg-img-768x586.png";
import btc1 from '../../../Assets/img/coin-2.png';
import btc2 from '../../../Assets/img/coin-3.png';
import ltm from '../../../Assets/img/coin-4.png';
import eth from '../../../Assets/img/eth.png';


const Header = () => {
  return (
    <Grid
      container
      xs={12}
      style={{ background: `url(${bg})`, height: "100vh" }}
    >
      <Grid container xs={9} marginRight="auto" marginLeft="auto">
        <nav className={styles.navBar}>
          <div className={styles.brand}>brand</div>
          <div className={styles.navList}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Learning</a>
              </li>
              <li>
                <a href="">Testemonial</a>
              </li>
            </ul>
          </div>
          <div className={styles.wallet}>
            <button>Connect to wallet</button>
          </div>
        </nav>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Buy & sell crypto easily</h1>
            <p>
              Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto
              trading app.
            </p>
            <button>Get Started</button>
          </div>
          <div className={styles.headerImage}>
            <img src={btc1} alt="bitcoin" height={100} width={100} className={styles.btc1}/>
            <img src={ltm} alt="ltm" height={80} width={80} className={styles.ltm}/>
            <img src={eth} alt="eth" height={120} width={120} className={styles.eth}/>
            <img src={btc2} alt="btc" height={70} width={70} className={styles.btc2}/>
            <img src={laptop} alt="laptop" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
