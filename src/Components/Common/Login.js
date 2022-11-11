import React, { useRef, useEffect } from "react";

import { signInWithNearWallet, signOutNearWallet } from "../../near-api";

const Login = () => {
  // When creating the wallet you can choose to create an access key, so the user
  // can skip signing non-payable methods when interacting with the contract
  //const wallet = new Wallet({ createAccessKeyFor: "dev-1666176534370-56189442712103" })

  // Abstract the logic of interacting with the contract to simplify your project
  // const counter = new Counter({ contractId: process.env.CONTRACT_NAME, walletToUse: wallet });

  if (!window.walletConnection.isSignedIn()) {
    return (
      <>
        <div className="container" style={{ width: "150px" }}>
          <button className="btn btn-success" onClick={signInWithNearWallet}>
            Sign In
          </button>
        </div>
      </>
    );
  }
  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>
      <div className="container" style={{ width: "150px" }}>
        <button className="btn btn-success" style={{backgroundColor: "grey", border: "none"}} onClick={signOutNearWallet}>
          Sign out
        </button>
      </div>
    </>
  );
};
export default Login;
