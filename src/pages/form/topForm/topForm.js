import NavBar from '../../../components/navBar/navBar';
import './topForm.css';

const TopForm = ({
  isConnectedToPeraWallet,
  handleConnectWalletClick,
  handleDisconnectWalletClick
}) => {
  return (
    <body className="container">
      <NavBar />
      <p className="main-text">Create Your DAO</p>
      <p className='btm-text' style={{fontSize:'20px'}}>Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no/low-code setup process.</p>
      <button
        className="connect"
        onClick={isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick}
      >
        {isConnectedToPeraWallet ? 'Disconnect' : 'Connect to Pera Wallet'}
      </button>
    </body>
  );
};

export default TopForm;
