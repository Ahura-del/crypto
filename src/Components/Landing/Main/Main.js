import React from "react";
import monitor from "../../../Assets/img/monitor.png";
import garph from "../../../Assets/img/graph-crypto-trading.png";
import stock from "../../../Assets/img/stocks.png";
import lock from "../../../Assets/img/lock-crypto.png";
import wallet from "../../../Assets/img/wallet-crypto-icon.png";
import trade from "../../../Assets/img/earning-trading.png";
import line from "../../../Assets/img/line-c-step-300x36.png";
import icon1 from "../../../Assets/img/app03r34.png";
import icon2 from "../../../Assets/img/mining.png";
import icon3 from "../../../Assets/img/crypto-wallet.png";
import icon4 from "../../../Assets/img/crypto-trading.png";
import bgCoin from "../../../Assets/img/bg-coin.png";
import playBtn from "../../../Assets/img/play-button.svg";

import "./main.scss";
const Main = () => {
  return (
    <main>
      {/* info */}
      <section id="info">
        <div className="container info-container">
          <div className="info-img">
            <img src={garph} alt="graph" className="graph" />
            <img src={stock} alt="crypto" className="stock" />

            <img src={monitor} alt="crypto" className="monitor" />
          </div>
          <div className="info-content">
            <h2>WHAT WE DO</h2>
            <h3>
              Trade crypto on your
              <br /> terms. Anywhere.
            </h3>
            <p>
              Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies
              using our crypto trading app. The Bitcoin and cryptocurrency
              markets have experienced a surge in volume recently, making it an
              exciting time to become a trader.
            </p>
            <button>Learn more</button>
          </div>

          <div className="map-site">
            <div className="map-item">
              <div className="map-item-img">
                <img src={lock} alt="" />
              </div>
              <div className="map-item-text">
                <h4>Reister</h4>
                <p>
                  Download our app and <br />
                  register in 3 minutes
                </p>
              </div>
            </div>
            <div className="map-item">
              <div className="map-item-img">
                <img src={wallet} alt="" />
              </div>
              <div className="map-item-text">
                <h4>Connect your walet</h4>
                <p>
                  Download our app and <br />
                  register in 3 minutes
                </p>
              </div>
            </div>
            <div className="map-item">
              <div className="map-item-img">
                <img src={trade} alt="" />
              </div>
              <div className="map-item-text">
                <h4>Start trading</h4>
                <p>
                  Download our app and <br />
                  register in 3 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feuters */}
      <section id="features">
        <div className="features-container container">
          <h2>Features</h2>
          <h3>How it works?</h3>
          <p>
            Cryptocurrency markets have seen an increase in volume in <br />
            recent weeks, which is a great opportunity for new traders.
          </p>
          <div className="features-items">
            <div className="features-item">
              <img src={line} alt="" className="connect-line" />
              <div className="features-item-img">
                <img src={icon1} alt="" />
              </div>
              <div className="features-item-text">
                <h4>Downlaod app</h4>
                <p>
                  Trade Bitcoin, Ethereum,
                  <br /> USDT and other altcoins <br />
                  using our crypto trading
                  <br /> app.
                </p>
              </div>
            </div>

            <div className="features-item">
              <img src={line} alt="" className="connect-line" />
              <div className="features-item-img">
                <img src={icon2} alt="" />
              </div>
              <div className="features-item-text">
                <h4>Register</h4>
                <p>
                  Trade Bitcoin, Ethereum,
                  <br /> USDT and other altcoins <br />
                  using our crypto trading
                  <br /> app.
                </p>
              </div>
            </div>
            <div className="features-item">
              <img src={line} alt="" className="connect-line" />
              <div className="features-item-img">
                <img src={icon3} alt="" />
              </div>
              <div className="features-item-text">
                <h4>Connect wallet</h4>
                <p>
                  Trade Bitcoin, Ethereum,
                  <br /> USDT and other altcoins <br />
                  using our crypto trading
                  <br /> app.
                </p>
              </div>
            </div>
            <div className="features-item">
              <div className="features-item-img">
                <img src={icon4} alt="" />
              </div>
              <div className="features-item-text">
                <h4>Start trading</h4>
                <p>
                  Trade Bitcoin, Ethereum,
                  <br /> USDT and other altcoins <br />
                  using our crypto trading
                  <br /> app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* learning */}
      <section id="learning">
        <div className="container learning-container">
          <div className="learning-text">
            <div className="learning-heading">
              <h2>Learning Crypto</h2>
              <h3>
                Watch our crypto trading
                <br />
                guide for beginners
              </h3>
            </div>
            <div className="learning-content">
              <p>
                Watch our crypto trading guide for beginners The Bitcoin and
                cryptocurrency markets have experienced a surge in volume
                recently, making it an exciting time to become a trader.
              </p>
              <a href="#">
                View all guides <span>&#8594;</span>
              </a>
            </div>
          </div>
          <div className="learning-video">
            <img src={bgCoin} alt="crypto video" className="video-bg" />
            <span className="play-btn" onClick={() => alert("hi")}>
              <img src={playBtn} alt="" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
