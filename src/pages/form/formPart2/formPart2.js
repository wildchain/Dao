import './formPart2.css';
import { useEffect, useState } from 'react';

const FormPart2 = ({ accountAddress, handleBack }) => {
  const [inputs, setInputs] = useState([
    <div style={{ display: 'flex' }}>
      <input className="input2" placeholder="Address" />
      <input className="input2" type="number" placeholder="Tokens" />
    </div>
  ]);
  // console.log(inputs)
  const [check, setCheck] = useState(true);
  const [early, setEarly] = useState(true);
  const [vote, setVote] = useState(true);
  const [quad, setQuad] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(
    () =>
      setInputs([
        <div style={{ display: 'flex' }}>
          <input className="input2" placeholder="Address" value={accountAddress} />
          <input className="input2" type="number" placeholder="Tokens" />
        </div>
      ]),
    [accountAddress]
  );

  function confirmAction() {
    let confirmAction = window.confirm("Each Wallet has 25% of voting power. Are you sure you want to continue? Consider airdropping your tokens to your community.");
  }

  const handleChecked = () => {
    setCheck((prev) => !prev);
  };

  const handleEarly = () => {
    setEarly((prev) => !prev);
  };
  const handleVote = () => {
    setVote((prev) => !prev);
  };
  const handleQuad = () => {
    setQuad((prev) => !prev);
  };
  const handleSubmit = () => {
    confirmAction()
    setSubmitted((prev) => !prev);
  };

  const handleAddInputs = () => {
    setInputs((prev) => [
      ...prev,
      <div style={{ display: 'flex' }}>
        <input className="input2" placeholder="Address" />
        <input className="input2" type="number" placeholder="Tokens" />
      </div>
    ]);
  };

  return (
    <body className="part-2">
      <div className="governance">
        <legend style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
          Who can participate in governance?
        </legend>
        <div
          style={{
            background: check ? '#219D8033' : 'white',
            width: '65%',
            borderRadius: '6px',
            paddingLeft: '15px',
            marginTop: 10,
            marginBottom: 10,
            paddingTop: 10,
            paddingBottom: 10,
            accentColor: 'green'
          }}
        >
          <input
            type="radio"
            id="huey"
            name="drone"
            value="huey"
            checked={check}
            onChange={handleChecked}
          />
          <label for="huey" style={{ fontWeight: 500, paddingLeft: 10 }}>
            Token holders
          </label>
          <p style={{ marginLeft: 31, opacity: 0.9, marginTop: 5 }}>
            {' '}
            Tokens act as voting chips. The more tokens you hold, the more weight your vote has. 1
            token equals 1 vote.{' '}
          </p>
        </div>
        <div
          style={{
            background: !check ? '#219D8033' : 'white',
            width: '65%',
            borderRadius: '6px',
            paddingLeft: '15px',
            marginTop: 10,
            marginBottom: 10,
            paddingTop: 10,
            paddingBottom: 10,
            accentColor: 'green'
          }}
        >
          <input
            type="radio"
            id="dewey"
            name="drone"
            value="dewey"
            checked={!check}
            onChange={handleChecked}
          />
          <label for="dewey" style={{ fontWeight: 500, paddingLeft: 10 }}>
            Multisig members
          </label>
          <p style={{ marginLeft: 31, opacity: 0.9, marginTop: 5 }}>
            {' '}
            Only multisig members can vote. 1 wallet address equals 1 approval.{' '}
          </p>
        </div>
      </div>

      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10, marginTop: 50 }}>
          Mint your token
        </p>
        <p style={{ opacity: 0.9, marginBottom: 40, width: '65%' }}>
          Define the token details and distribute tokens to a core team and DAO treasury. For more
          on token minting best practices
        </p>
      </div>
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Name</p>
        <p style={{ opacity: 0.9, marginBottom: 14 }}>
          The full name of the token. Example: Unicoin
        </p>
        <input className="input" placeholder="Name ..." />
      </div>
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Symbol</p>
        <p style={{ opacity: 0.9, marginBottom: 14 }}>
          The abbreviation of the token. Example: UNI.
        </p>
        <input className="input" placeholder="Symbol ..." />
      </div>
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Distribute tokens</p>
        <p style={{ opacity: 0.9, marginBottom: 10 }}>
          Add the wallets you'd like to distribute tokens to. If you need help distributing tokens.
        </p>
        {inputs.map((item) => item)}
      </div>
      <button onClick={handleAddInputs} className="butin">
        {' '}
        Add Wallet{' '}
      </button>
      <legend style={{ fontWeight: 600, fontSize: 20, marginBottom: 10, marginLeft: '28%' }}>
        Proposal creation
      </legend>
      <p style={{ opacity: 0.9, marginBottom: 10, marginLeft: '28%' }}>
        Specify who is permitted to create proposals and what the minimum token requirement is.
      </p>
      <div style={{ display: 'flex', alignItems: 'start', marginLeft: '28%' }}>
        <div style={{ paddingBottom: 60, width: '31.8%' }}>
          <p style={{ fontWeight: 500 }}>Who is eligible?</p>
          <div
            style={{
              background: check ? '#219D8033' : 'white',
              borderRadius: '6px',
              paddingLeft: '15px',
              marginTop: 10,
              marginBottom: 10,
              paddingTop: 10,
              paddingBottom: 10,
              accentColor: 'green'
            }}
          >
            <input
              type="radio"
              id="huey"
              name="bro"
              value="huey"
              checked={check}
              onChange={handleChecked}
            />
            <label for="huey" style={{ fontWeight: 500, paddingLeft: 10 }}>
              Token holders
            </label>
            <p style={{ marginLeft: 31, opacity: 0.9, marginTop: 5 }}>
              {' '}
              Only token holders with a certain number of tokens are eligible to create proposals.{' '}
            </p>
          </div>
          <div
            style={{
              background: !check ? '#219D8033' : 'white',
              borderRadius: '6px',
              paddingLeft: '15px',
              marginTop: 10,
              marginBottom: 10,
              paddingTop: 10,
              paddingBottom: 10,
              accentColor: 'green'
            }}
          >
            <input
              type="radio"
              id="dewey"
              name="bro"
              value="dewey"
              checked={!check}
              onChange={handleChecked}
            />
            <label for="dewey" style={{ fontWeight: 500, paddingLeft: 10 }}>
              Any wallet
            </label>
            <p style={{ marginLeft: 31, opacity: 0.9, marginTop: 5 }}>
              {' '}
              Any wallet can create proposals.{' '}
            </p>
          </div>
        </div>

        <div className="tokens">
          <p style={{ fontWeight: 500 }}>Minimum token required</p>
          <input className="input2" style={{ marginTop: 10 }} type="number" defaultValue="1" />
        </div>
      </div>

      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Support threshold</p>
        <p style={{ opacity: 0.9, marginBottom: 0, width: '65%' }}>
          Support threshold is the percentage of tokens or that are required to vote “Yes” for a
          proposal to be approved, calculated based on total tokens that voted.
        </p>
      </div>
      <div style={{ display: 'flex', marginLeft: '28%', alignItems: 'center' }}>
        <div>
          <input className="input3" style={{ marginTop: 25, width: 300 }} defaultValue="50%" />
        </div>
        <div>
          <p style={{ marginLeft: 190 }}>50%</p>
          <div class="meter">
            <span style={{ width: '50%' }}></span>
          </div>
        </div>
      </div>

      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Minimum participation</p>
        <p style={{ opacity: 0.9, marginBottom: 0, width: '65%' }}>
          Minimum participation is the percentage of the token supply that must vote on a proposal
          for the vote to be valid. Make sure you set this at a low level that your DAO can meet, so
          you don't lock your voting process.
        </p>
      </div>
      <div style={{ display: 'flex', marginLeft: '28%', alignItems: 'center' }}>
        <div>
          <input className="input3" style={{ marginTop: 25, width: 300 }} defaultValue="50%" />
        </div>
        <div>
          <p style={{ marginLeft: 150 }}>2 out of 4 Tokens</p>
          <div class="meter">
            <span style={{ width: '50%' }}></span>
          </div>
        </div>
      </div>

      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Minimum duration</p>
        <p style={{ opacity: 0.9, marginBottom: 14, width: '65%' }}>
          Minimum duration is the shortest length of time a proposal can be open for voting. You can
          extend the duration for each proposal but not shorten it.
        </p>
        <div style={{ display: 'flex' }}>
          <div>
            <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>days</p>
            <input className="input3" type="number" defaultValue="1" />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>hours</p>
            <input className="input3" type="number" defaultValue="0" />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>minutes</p>
            <input className="input3" type="number" defaultValue="0" />
          </div>
        </div>
      </div>

      <div className="governance">
        <legend style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Early execution</legend>
        <p style={{ opacity: 0.9, marginBottom: 10, width: '65%' }}>
          Allow proposal execution before the vote ends if the requirements are met and the vote
          outcome cannot be changed by more voters participating.
        </p>
        <div style={{ display: 'flex' }}>
          <div
            className="input2"
            style={{ background: early ? '#219D8033' : 'white', accentColor: 'green' }}
          >
            <input
              type="radio"
              id="earlyNo"
              name="early"
              value="earlyNo"
              checked={early}
              onChange={handleEarly}
            />
            <label for="earlyNo" style={{ fontWeight: 500, paddingLeft: 10 }}>
              No
            </label>
          </div>
          <div
            className="input2"
            style={{ background: !early ? '#219D8033' : 'white', accentColor: 'green' }}
          >
            <input
              type="radio"
              id="earlyYes"
              name="early"
              value="earlyYes"
              checked={!early}
              onChange={handleEarly}
            />
            <label for="earlyYes" style={{ fontWeight: 500, paddingLeft: 10 }}>
              Yes
            </label>
          </div>
        </div>
      </div>
      <div className="governance">
        <legend style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Vote change</legend>
        <p style={{ opacity: 0.9, marginBottom: 10, width: '65%' }}>
          This setting allows voters to change their vote during the voting period. If you enabled
          early execution, this setting is automatically turned off.
        </p>
        <div style={{ display: 'flex' }}>
          <div
            className="input2"
            style={{ background: vote ? '#219D8033' : 'white', accentColor: 'green' }}
          >
            <input
              type="radio"
              id="voteNo"
              name="vote"
              value="earlyNo"
              checked={vote}
              onChange={handleVote}
            />
            <label for="voteNo" style={{ fontWeight: 500, paddingLeft: 10 }}>
              No
            </label>
          </div>
          <div
            className="input2"
            style={{ background: !vote ? '#219D8033' : 'white', accentColor: 'green' }}
          >
            <input
              type="radio"
              id="voteYes"
              name="vote"
              value="earlyYes"
              checked={!vote}
              onChange={handleVote}
            />
            <label for="voteYes" style={{ fontWeight: 500, paddingLeft: 10 }}>
              Yes
            </label>
          </div>
        </div>
      </div>
      <div className="governance">
        <legend style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Implement Quadratic Funding</legend>
        <p style={{ opacity: 0.9, marginBottom: 10, width: '65%' }}>
        This setting means that small contributions from a large number of people can be more valuable than large contributions from a small number of people.
        </p>
        <div style={{ display: 'flex' }}>
          <div
            className="input2"
            style={{ background: quad ? '#219D8033' : 'white', accentColor: 'green' }}
          >
            <input
              type="radio"
              id="quadNo"
              name="quad"
              value="quadNo"
              checked={quad}
              onChange={handleQuad}
            />
            <label for="quadNo" style={{ fontWeight: 500, paddingLeft: 10 }}>
              No
            </label>
          </div>
          <div
            className="input2"
            style={{ background: !quad ? '#219D8033' : 'white', accentColor: 'green' }}
          >
            <input
              type="radio"
              id="quadYes"
              name="quad"
              value="quadYes"
              checked={!quad}
              onChange={handleQuad}
            />
            <label for="quadYes" style={{ fontWeight: 500, paddingLeft: 10 }}>
              Yes
            </label>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={handleBack} className="butin" style={{ background: '#219D80' }}>
          Back
        </button>
        {submitted?<div class="lds-ring"><div></div><div></div><div></div><div></div></div>:<button className="submit" onClick={handleSubmit}>Submit</button>}
      </div>
    </body>
  );
};

export default FormPart2;
