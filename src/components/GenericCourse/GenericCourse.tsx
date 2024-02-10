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
          setErrorTx({
            errorName: data.name,
            errorMessage: data.message,
          });
        },
      }
    );
  };

  const [errorTx, setErrorTx] = useState<ErrorI>();
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
                {errorTx?.errorName ? (
                  <div className={GenericCourseCSS.errorContainer}>
                    <strong>{errorTx.errorName}</strong>
                    <em>
                      We're sorry, an error occurred while processing your
                      request. Please try again later. If the issue persists,
                      please contact technical support for assistance.
                    </em>
                    <em>{errorTx.errorMessage}</em>
                    <button onClick={() => window.location.reload()}>
                      Try Again
                    </button>
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
