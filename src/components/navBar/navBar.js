import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navBar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

// these lines read the API key and scorer ID from your .env.local file
const APIKEY = process.env.NEXT_PUBLIC_GC_API_KEY;
const SCORER_ID = process.env.NEXT_PUBLIC_GC_SCORER_ID;
// endpoint for submitting passport
const SUBMIT_PASSPORT_URI =
  "https://api.scorer.gitcoin.co/registry/submit-passport";
// endpoint for getting the signing message
const SIGNING_MESSAGE_URI =
  "https://api.scorer.gitcoin.co/registry/signing-message";

// score needed to see hidden message
const THRESHOLD_NUMBER = 5;

// these lines add the corretc header information to the request
const headers = APIKEY
  ? {
      "Content-Type": "application/json",
      "X-API-Key": APIKEY,
    }
  : undefined;

function Passport() {
  // here we deal with any local state we need to manage
  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState(false);
  const [score, setScore] = useState("");
  const [noScoreMessage, setNoScoreMessage] = useState("");

  /* todo check user's connection when the app loads */
  useEffect(() => {
    checkConnection();
    async function checkConnection() {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        // if the user is connected, set their account and fetch their score
        if (accounts && accounts[0]) {
          setConnected(true);
          setAddress(accounts[0].address);
          checkPassport(accounts[0].address);
        }
      } catch (err) {
        console.log("not connected...");
      }
    }
  }, []);

  /* todo connect user's wallet */
  async function connect() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      setConnected(true);
      checkPassport(accounts[0]);
    } catch (err) {
      console.log("error connecting...");
    }
  }
  /* todo check user's passport */
  async function checkPassport(currentAddress = address) {
    setScore("");
    setNoScoreMessage("");
    //
    const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${currentAddress}`;
    try {
      const response = await fetch(GET_PASSPORT_SCORE_URI, {
        headers,
      });
      const passportData = await response.json();
      if (passportData.score) {
        // if the user has a score, round it and set it in the local state
        const roundedScore = Math.round(passportData.score * 100) / 100;
        setScore(roundedScore.toString());
      } else {
        // if the user has no score, display a message letting them know to submit thier passporta
        console.log(
          "No score available, please add stamps to your passport and then resubmit."
        );
        setNoScoreMessage(
          "No score available, please submit your passport after you have added some stamps."
        );
      }
    } catch (err) {
      console.log("error: ", err);
    }
  }
  /* todo get signing message from API */
  async function getSigningMessage() {
    try {
      const response = await fetch(SIGNING_MESSAGE_URI, {
        headers,
      });
      const json = await response.json();
      return json;
    } catch (err) {
      console.log("error: ", err);
    }
  }
  /* todo submit passport for scoring */
  async function submitPassport() {
    setNoScoreMessage("");
    try {
      // call the API to get the signing message and the nonce
      const { message, nonce } = await getSigningMessage();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      // ask the user to sign the message
      const signature = await signer.signMessage(message);

      // call the API, sending the signing message, the signature, and the nonce
      const response = await fetch(SUBMIT_PASSPORT_URI, {
        method: "POST",
        headers,
        body: JSON.stringify({
          address,
          scorer_id: SCORER_ID,
          signature,
          nonce,
        }),
      });

      const data = await response.json();
      console.log("data:", data);
    } catch (err) {
      console.log("error: ", err);
    }
  }
}

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="nav-bar">
        <Navbar.Brand href="/" className="nav-bar-title">
          <Logo />
          <p className="nav-bar-title-text">Wildchain</p>
        </Navbar.Brand>
        <Nav className="nav-bar-mid">
          <Nav.Link href="/" className="item">
            Home
          </Nav.Link>
          <Nav.Link
            href="https://passport.gitcoin.co/#/welcome"
            className="item"
          >
            Configure Your Gitcoin Passport
          </Nav.Link>
          {/* <Nav>
            {!connected && <button onClick={connect}>Connect Wallet</button>}
            {score && (
              <div>
                <h1>Your passport score is {score} 🎉</h1>
                <div>
                  {Number(score) >= THRESHOLD_NUMBER && (
                    <h2>Congratulations, you can view this secret message!</h2>
                  )}
                  {Number(score) < THRESHOLD_NUMBER && (
                    <h2>
                      Sorry, your score is not high enough to view the secret
                      message.
                    </h2>
                  )}
                </div>
              </div>
            )}
            {connected && (
              <div>
                <button onClick={submitPassport}>Submit Passport</button>
                <button onClick={() => checkPassport()}>
                  Check passport score
                </button>
              </div>
            )}
            {noScoreMessage && <p>{noScoreMessage}</p>}
          </Nav> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
