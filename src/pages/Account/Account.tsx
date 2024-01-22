import React from "react";
import AccountCSS from "./Account.module.css";

import { useAccount, useBalance } from "wagmi";
import { purchase } from "../../utils/data";
import { formatEther } from "viem";
import { Helmet } from "react-helmet";

const Account = () => {
  const account = useAccount();

  const { data: balance } = useBalance({
    address: account.address,
  });

  const balanceETH = balance?.value ? formatEther(balance.value) : null;

  return (
    <React.StrictMode>
      <Helmet>
        <title>Account</title>
        <meta name="description" content={`Informations about your account`} />
      </Helmet>
      <div className={AccountCSS.accountContainer}>
        <div className={AccountCSS.accountInfo}>
          <ul>
            <li>
              Status: <strong>{account.status}</strong>
            </li>
            <li>
              ChainId: <strong>{account.chainId}</strong>
            </li>
            <li>
              ChainName: <strong>{account.chain?.name}</strong>
            </li>
            <li>
              Balance: <strong>{balanceETH?.slice(0, 6)} ETH</strong>
            </li>
          </ul>
          <h2>PURCHASES</h2>
          {purchase.map(
            (items) =>
              account.address == items.accountAddress && (
                <div className={AccountCSS.containerPurchase}>
                  <p>{items.courseName}</p>
                  <p>- {items.price} ETH</p>
                </div>
              )
          )}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Account;
