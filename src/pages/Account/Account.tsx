import React from "react";
import AccountCSS from "./Account.module.css";

import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";
import { Helmet } from "react-helmet";
import { PurchaseI } from "../../utils/interface";

const Account = () => {
  const account = useAccount();
  const localStoragePurchases = JSON.parse(
    localStorage.getItem("purchases") || "[]"
  ) as PurchaseI[];

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
        {account.chainId != 1 && account.chainId != 11155111 && (
          <em>For testnet networks we recommend Sepolia</em>
        )}
        {account.chain?.name ? (
          <div className={AccountCSS.accountInfo}>
            <ul>
              <li>
                Status: <strong>{account.status}</strong>
              </li>
              <li>
                ChainName: <strong>{account.chain.name}</strong>
              </li>
              <li>
                Balance:{" "}
                {balanceETH ? (
                  <strong>{balanceETH?.slice(0, 6)} ETH</strong>
                ) : (
                  <strong>0 ETH</strong>
                )}
              </li>
            </ul>
            <h2>PURCHASES</h2>
            {localStoragePurchases?.map(
              (items) =>
                account.address == items.accountAddress &&
                account.chainId == items.chainId && (
                  <div
                    key={items.txHash}
                    className={AccountCSS.containerPurchase}
                  >
                    <p>{items.courseName}</p>
                    <p>{items.price} ETH</p>
                    <p>
                      <a
                        href={`https://${account.chain?.name}.etherscan.io/tx/${items.txHash}`}
                      >
                        {items.txHash.slice(0, 6)}...
                      </a>
                    </p>
                  </div>
                )
            )}
          </div>
        ) : (
          <div className={AccountCSS.accountInfo}>
            {account.address ? (
              <div>
                <h2>Chain {account.chainId} is not supported</h2>
                <p>
                  <em>
                    If you purchase with this chain you will not be able to see
                    your transactions cronologie, but if you want, you will
                    still be able to purchase our products!
                  </em>
                </p>
              </div>
            ) : (
              <div>
                <div>
                  <h2>Wallet Disconnected</h2>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </React.StrictMode>
  );
};

export default Account;
