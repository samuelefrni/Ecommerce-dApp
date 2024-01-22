import React, { useState } from "react";
import { CourseI, PurchaseI } from "../../utils/interface";
import AbstractIMAGE from "../../assets/wp7961688-dark-violet-wallpapers.jpg";
import GenericCourseCSS from "./GenericCourse.module.css";

import { useAccount } from "wagmi";
import { addressGianni } from "../../utils/utils";
import { useSendTransaction } from "wagmi";
import { purchase } from "../../utils/data";
import { parseEther } from "viem";
import { CiWallet } from "react-icons/ci";
import { Helmet } from "react-helmet";
import SuccesPage from "../../pages/SuccesPage/SuccesPage";

const GenericCourse: React.FC<CourseI> = ({
  title,
  description,
  image,
  value,
}) => {
  const account = useAccount();
  const { sendTransaction, error } = useSendTransaction();

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
        onSuccess: () => {
          setPurchaseSuccess(true);
          const newPurchase: PurchaseI = {
            courseName,
            price,
            accountAddress,
          };
          purchase.push({ ...newPurchase });
        },
        onError: (data) => {
          setErrorMessage(data.message);
        },
      }
    );
  };

  const [errorMessage, setErrorMessage] = useState("");
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
          <div className={GenericCourseCSS.courseContainer}>
            <img
              className={GenericCourseCSS.abstractIMG}
              src={AbstractIMAGE}
              alt="Abstract Image"
            />
            <h1>{title}</h1>
            <div className={GenericCourseCSS.courseContainerIMG}>
              <img src={`/src/assets/${image}`} alt={title} />
            </div>
            {account.status === "disconnected" ? (
              <div className={GenericCourseCSS.containerConnectWallet}>
                <CiWallet />
              </div>
            ) : (
              <div className={GenericCourseCSS.buyCourseContainer}>
                {error ? (
                  <div className={GenericCourseCSS.errorContainer}>
                    <strong>{error.name}</strong>
                    <em>{errorMessage}</em>
                    <button onClick={() => window.location.reload()}>
                      Try Again
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className={GenericCourseCSS.infoCourse}>
                      <p>{description}</p>
                      <span>Price: {value} ETH</span>
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
