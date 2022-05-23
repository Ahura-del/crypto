import React from "react";
import monitor from "../../../Assets/img/monitor.png";
import garph from "../../../Assets/img/graph-crypto-trading.png";
import stock from "../../../Assets/img/stocks.png";
import lock from "../../../Assets/img/lock-crypto.png";
import wallet from "../../../Assets/img/wallet-crypto-icon.png";
import trade from "../../../Assets/img/earning-trading.png";

import "./main.scss";
const Main = () => {
  return (
    <main>
      <section className="info">
        <div className="container">
          <div className="info-img">
            <img src={garph} alt="graph" className="graph" />
            <img src={stock} alt="crypto" className="stock" />

            <img src={monitor} alt="crypto" className="monitor" />
          </div>
          <div className="info-content">
            <h3>WHAT WE DO</h3>
            <h2>
              Trade crypto on your
              <br /> terms. Anywhere.
            </h2>
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
    </main>
  );
};

export default Main;
