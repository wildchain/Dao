import NavBar from "../../../components/navBar/navBar";
import "./topForm.css";

const TopForm = ({
  isConnectedToPeraWallet,
  handleConnectWalletClick,
  handleDisconnectWalletClick,
}) => {
  return (
    <body className="container">
      <NavBar />
      <p className="main-text">Start Your Grant Application</p>
      <p className="btm-text" style={{ fontSize: "20px" }}>
        Create a Grant, Set Funding Goals, Create Multiple Funding Rounds. You
        Decide!
      </p>
      <button
        className="connect"
        onClick={
          isConnectedToPeraWallet
            ? handleDisconnectWalletClick
            : handleConnectWalletClick
        }
      >
        {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
      </button>
    </body>
  );
};

export default TopForm;
