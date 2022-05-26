import React from "react";
import monitor from "../../../Assets/img/monitor.png";
import mobile from "../../../Assets/img/cryptophone.png";
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
import windows from "../../../Assets/img/windows.svg";
import linux from "../../../Assets/img/linux.svg";
import apple from "../../../Assets/img/apple.svg";
import android from "../../../Assets/img/android.svg";
import eth from "../../../Assets/img/eth.png";
import btc2 from "../../../Assets/img/coin-3.png";
import btc1 from "../../../Assets/img/coin-2.png";
import ltm from "../../../Assets/img/coin-4.png";
import save from "../../../Assets/img/save.png";
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

      {/* downlaod */}
      <section id="download">
        <div className="container download-container">
          <div className="downlaod-img">
            <img src={monitor} alt="desktop app" className="down-monitor" />
            <img src={mobile} alt="mobile app" className="down-mobile" />
            <img src={eth} alt="" className="down-eth" />
            <img src={btc2} alt="" className="down-btc" />
            <img src={ltm} alt="" className="down-ltm" />
            <img src={garph} alt="" className="down-graph" />
          </div>
          <div className="download-content">
            <div className="download-heading">
              <h2>Downlaod app</h2>
              <h3>
                Downlaod app for <br /> any platform
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                fuga, soluta voluptas doloribus architecto repellendus ad,
                accusantium dignissimos sed aliquid exercitationem! Facilis
                voluptas explicabo, id cum ipsa fuga corrupti blanditiis!
              </p>
            </div>
            <div className="download-btn">
              <div className="desktop-download">
                {/* <h2>Download desktop app</h2> */}
                <span>
                  <img src={apple} alt="apple" />
                </span>
                <span>
                  <img src={windows} alt="windows" />
                </span>
                <span>
                  <img src={linux} alt="linux" />
                </span>
              </div>
              <div className="mobile-download">
                {/* <h2>Downlaod mobile app</h2> */}
                <span>
                  <img src={android} alt="android" />
                </span>
                <span>
                  <img src={apple} alt="apple phone" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why us */}
      <section className="whyus">
        <div className="container whyus-container">
          <div className="whyus-content">
            <h2>Why us</h2>
            <h3>
              We got everything you
              <br /> need to start trading
            </h3>
            <p>
              The Bitcoin and cryptocurrency markets have experienced <br />a
              surge in volume recently, making it an exciting time to
              <br /> become a trader.
            </p>
            <ul>
              <li>Top trading platform</li>
              <li>Secure payments</li>
              <li>Easy to start trading</li>
            </ul>
          </div>
          <div className="whyus-img">
            <img src={save} alt="save" className="save" />
            <img src={eth} alt="" className="save-eth" />
            <img src={btc1} alt="" className="save-btc" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
