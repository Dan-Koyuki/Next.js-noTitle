"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import Link from "next/link";
import RegisterPage from "../auth/register";
import LoginPage from "../auth/login";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();
  // Menu State
  const [modalState, setModalState] = useState("none");
  const [isModalOpen, setModalOpen] = useState(false);

  // Authentication State
  const [isVerified, setVerified] = useState(false);
  const [token, setToken] = useState("");

  /**
   * Token
   */
  useEffect(() => {
    if (token) {
      setVerified(true);
    }
  }, [token, setVerified]);

  const tokenSetter = () => {
    setToken(String(localStorage.getItem("token")));
  };

  /**
   * Auth
   */
  const SignOut = () => {
    setVerified(false);
    setToken("");
    localStorage.removeItem("token");
    router.push('/')
  };

  const SignIn = () => {
    setModalState("Sign In");
    setModalOpen(true);
  };

  const SignUp = () => {
    setModalState("Sign Up");
    setModalOpen(true);
  };

  const CloseModal = () => {
    setModalState("none");
    setModalOpen(false);
  };

  /**
   * Menu
   */
  const handleMenuClick = (menuType) => {
    if (modalState === menuType && isModalOpen) {
      // Close the currently open menu if the same button is clicked
      CloseModal();
    } else {
      setModalState(menuType);
      setModalOpen(true);
    }
  };

  return (
    <div>
      <div className="flex flex-row px-28 py-4 h-[58px] bg-gray-700 justify-between border-b-2 rounded-sm text-white">
        <div className="w-1/5">
          <Link href={"/"} className="text-2xl font-bold">
            SBLink~Admin
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-6 w-4/5">
          {isVerified ? (
            <div>
              <p onClick={SignOut} className="cursor-pointer">
                Sign Out
              </p>
            </div>
          ) : (
            <div className="flex flex-row-reverse gap-6">
              <p onClick={SignIn} className="cursor-pointer">
                Sign In
              </p>
              <p onClick={SignUp} className="cursor-pointer">
                Sign Up
              </p>
            </div>
          )}
          {/* <p
            onClick={() => handleMenuClick("ServiceMenu")}
            className="cursor-pointer flex flex-row items-center gap-1"
          >
            
            {modalState === "ServiceMenu" ? (
              <IoIosClose size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </p>
          <p
            onClick={() => handleMenuClick("GeneralMenu")}
            className="cursor-pointer flex flex-row items-center gap-1"
          >
            General
            {modalState === "GeneralMenu" ? (
              <IoIosClose size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </p> */}
        </div>
      </div>

      {
        isModalOpen &&
          (modalState === "Sign Up" ? (
            <RegisterPage
              modalSetting={isModalOpen}
              closeFunc={CloseModal}
              tokenSetter={tokenSetter}
            />
          ) : modalState === "Sign In" ? (
            <LoginPage
              tokenSetter={tokenSetter}
              closeFunc={CloseModal}
              modalSetting={isModalOpen}
            />
          ) : modalState === "GeneralMenu" ? null : null) // <GeneralMenu modalSetting={isModalOpen} closFunc={CloseModal} /> // <ServiceMenu modalSetting={isModalOpen} closFunc={CloseModal} />
      }
    </div>
  );
};

export default TopBar;
