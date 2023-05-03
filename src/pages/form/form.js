import FormPart1 from './formPart1/formPart1';
import FormPart2 from './formPart2/formPart2';
import TopForm from './topForm/topForm';
import { PeraWalletConnect } from '@perawallet/connect';
// import algosdk, { waitForConfirmation } from 'algosdk';
import { useEffect, useState } from 'react';

const peraWallet = new PeraWalletConnect();

const Form = () => {
  const [accountAddress, setAccountAddress] = useState(null);
  const isConnectedToPeraWallet = !!accountAddress;

  useEffect(() => {
    // reconnect to session when the component is mounted
    peraWallet.reconnectSession().then((accounts) => {
      // Setup disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });
  }, []);

  function handleConnectWalletClick() {
    peraWallet.connect().then((newAccounts) => {
      // setup the disconnect event listener
      peraWallet.connector?.on('disconnect', handleDisconnectWalletClick);

      setAccountAddress(newAccounts[0]);
    });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }

  const [next, setNext] = useState(true);
  const handleNext = () => {
    setNext((prev) => !prev);
  };
  console.log(next);

  return (
    <>
      <TopForm
        isConnectedToPeraWallet={isConnectedToPeraWallet}
        handleConnectWalletClick={handleConnectWalletClick}
        handleDisconnectWalletClick={handleDisconnectWalletClick}
      />
      {next && <FormPart1 handleNext={handleNext} />}
      {!next && <FormPart2 accountAddress={accountAddress} handleBack={handleNext} />}
    </>
  );
};

export default Form;
