import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Header } from './components/header/Header';
// import { Hero } from "./components/hero/Hero";
import React, { useState, useEffect } from "react";
// import { About } from "./components/about/About";
import { Benefits } from "./components/benefits/Benefits";
// import { Roadmap } from "./components/roadmap/Roadmap";
import { Team } from "./components/Team/Team";
import { Faq } from "./components/faq/Faq";
import { Footer } from "./components/footer/Footer";
import $ from "jquery";


//blockchain
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";


//hero
import { Col, Container, Row } from "react-bootstrap";
import "./components/hero/Hero.css";
import herocard from './assets/images/hippo.png';

function App() {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [feedbackMsgStyle, setFeedbackMsgStyle] = useState('normalStyle');
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = async () => {
    console.log(" 🧮 ")
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    console.log('blockchain==================', blockchain.smartContract.methods)


    await blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log('Sorry, something went wrong please try again later.', err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
        setFeedbackMsgStyle('errorStyle');
      })
      .then((receipt) => {
        console.log(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`, receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        setFeedbackMsgStyle('successStyle');
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    // console.log('blockchain.account', blockchain.account)
    // console.log('blockchain.smartContract', blockchain.smartContract)
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    let data = getData();
    console.log('data', data)
  }, [blockchain.account]);

  const connectHandler = (e) => {
    console.log("clicked");
    // // e.preventDefault();
    dispatch(connect());
    getData();
  }
  return (
    <React.Fragment>
      <Header />
      {/* <Hero  mint={claimNFTs}  /> */}

      {/* new hero */}
      <section className="background sec-1 d-flex align-items-lg-start align-items-center " style={{ minHeight: "140vh" }}>
        <div className="container mt-lg-5 ">
          <div className="row ">
            <div className="col-lg-6 col-12 order-lg-1 order-2">
              <div className="row mx-0 justify-content-start w-100">
                <div className="col-lg-8 col-12">
                  <div className="transparent mb-4 d-flex flex-column" style={{ padding: "40px" }} >
                    <span className="fs-3 fw-700" style={{ lineHeight: "35px" }} >Presale minting will begin on January 10th.</span>
                    <span className="fs-6 fw-600 mt-3" style={{ lineHeight: "20px" }} >To get presale access to ensure you are able
                      to mint , join our discord below:</span>
                    <button className="btn-1 mt-4">Minted Amount :&nbsp; {data.totalSupply} &nbsp;/&nbsp; {CONFIG.MAX_SUPPLY}</button>
                    <button className="btn-2 mt-3">{feedback}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-1">
              <div className="row mx-0 justify-content-center w-100">
                <div className="col-lg-9 col-12 px-0">
                  <img src={herocard} className="w-100" alt="" />
                  <div className="transparent d-flex p-4 mb-4 mx-3">
                    <button className="btn btn-outline-warning col me-1">Discord</button>
                    <button className="btn btn-warning col ms-1">
                      {Number(data.totalSupply) == CONFIG.MAX_SUPPLY ? (
                        <div>The sale has ended.</div>
                      ) : (
                        <div>
                          {blockchain.account === "" ||
                            blockchain.smartContract === null ? (

                            <div className="connect-b"
                              onClick={connectHandler}
                            >
                              Connect
                              {blockchain.errorMsg !== "" ?
                                alert(blockchain.errorMsg)
                                : null}
                            </div>

                          ) : (
                            <div className="connect-b"
                              onClick={(e) => {
                                e.preventDefault();
                                claimNFTs(2);
                                getData();
                              }}
                            >
                              {claimingNft ? "Busy..." : "Mint 1 NFT"}
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* new hero */}

      <Benefits/>

      {/* <About/> */}
      {/* <Roadmap/> */}
      {/* <Team /> */}
      <Faq />
      <Footer />
    </React.Fragment>
  );
}

export default App;
