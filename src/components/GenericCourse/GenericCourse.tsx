import React, { useState } from "react";
import { CourseI, ErrorI, PurchaseI } from "../../utils/interface";
import AbstractIMAGE from "../../assets/wp7961688-dark-violet-wallpapers.jpg";
import GenericCourseCSS from "./GenericCourse.module.css";

import { useAccount } from "wagmi";
import { addressGianni } from "../../utils/utils";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { CiWallet } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SuccesPage from "../../pages/SuccesPage/SuccesPage";

const GenericCourse: React.FC<CourseI> = ({
  title,
  description,
  image,
  value,
}) => {
  const account = useAccount();
  const { sendTransaction } = useSendTransaction();

  const handlePurchase = (
    courseName: string,
    price: string,
    accountAddress: string
  ) => {
    sendTransaction(
      {
        to: addressGianni,
        value: parseEther(value),
      },
      {
        onSuccess: (txHash) => {
          const localStoragePurchases = JSON.parse(
            localStorage.getItem("purchases") || "No Purchases"
          ) as PurchaseI[];

          const newPurchase: PurchaseI = {
            courseName,
            price,
            accountAddress,
            txHash,
            chainId: account.chainId,
          };

          localStoragePurchases.push(newPurchase);

          localStorage.setItem(
            "purchases",
            JSON.stringify(localStoragePurchases)
          );

          setPurchaseSuccess(true);
        },
        onError: (data) => {
          setErroreMessage({
            errorName: data.name,
            errorMessage: data.message,
          });
        },
      }
    );
  };

  const [errorMessage, setErroreMessage] = useState<ErrorI>();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  return (
    <React.StrictMode>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Buy ${title} course`} />
      </Helmet>
      {purchaseSuccess ? (
        <SuccesPage
          title={title}
          image={image}
          setPurchaseSuccess={setPurchaseSuccess}
        />
      ) : (
        <div className={GenericCourseCSS.mainContainer}>
          <Link to={"/account"}>
            <span>⚠️</span> <br />
            <span>
              <strong>Check your chain before purchase</strong>
            </span>
          </Link>
          <div className={GenericCourseCSS.courseContainer}>
            <img
              className={GenericCourseCSS.abstractIMG}
              src={AbstractIMAGE}
              alt="Abstract Image"
            />
            <h1>{title}</h1>
            <div className={GenericCourseCSS.courseContainerIMG}>
              <img src={image} alt={title} />
            </div>
            {account.status === "disconnected" ? (
              <div className={GenericCourseCSS.containerConnectWallet}>
                <CiWallet />
              </div>
            ) : (
              <div className={GenericCourseCSS.buyCourseContainer}>
                {errorMessage ? (
                  <div>
                    {errorMessage.errorMessage.includes(
                      "User rejected the request"
                    ) && (
                      <div className={GenericCourseCSS.errorContainer}>
                        <strong>{errorMessage.errorName}</strong>
                        <em>User rejected the request</em>
                        <button onClick={() => window.location.reload()}>
                          Try Again
                        </button>
                      </div>
                    )}
                    {errorMessage.errorMessage.includes(
                      "executing this transaction exceeds the balance"
                    ) && (
                      <div className={GenericCourseCSS.errorContainer}>
                        <strong>{errorMessage.errorName}</strong>
                        <em>
                          The total cost of executing this transaction exceeds
                          the balance of the account
                        </em>
                        <button onClick={() => window.location.reload()}>
                          Try Again
                        </button>
                      </div>
                    )}
                    {!errorMessage.errorMessage.includes(
                      "User rejected the request"
                    ) &&
                      !errorMessage.errorMessage.includes(
                        "executing this transaction exceeds the balance"
                      ) && (
                        <div className={GenericCourseCSS.errorContainer}>
                          <strong>Something went wrong</strong>
                          <button onClick={() => window.location.reload()}>
                            Try Again
                          </button>
                        </div>
                      )}
                  </div>
                ) : (
                  <div>
                    <div className={GenericCourseCSS.infoCourse}>
                      <p>{description}</p>
                      <p>Price: {value} ETH</p>
                      <button
                        onClick={() =>
                          handlePurchase(
                            title,
                            value,
                            `0x${account.address?.slice(2)}`
                          )
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </React.StrictMode>
  );
};

export default GenericCourse;
