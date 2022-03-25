import axios from "axios";
import React, { useEffect } from "react";
import Tabs from "./Tabs";

const ItemsList = () => {

  useEffect(() => {
    const getItems = async () => {
      const { data } = await axios.get(
        "https://elsan.void.fr/fr/jsonapi/node/elsan_praticien"
      );
      console.log(data);
    };
    getItems();
  }, []);

  return (
    <>
      <Tabs />
      <div className="flex flex-col min-h-screen">
        <div className="user-list w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl flex flex-col divide-x">
          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                <img
                  className="avatar w-20 h-20 rounded-full"
                  src="../assets/images/avatar.gif"
                  alt=""
                />
              </div>
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <a href="/" className="title font-medium text-xl">
                  Pascal CHASSOT
                </a>
                <div className="skills flex flex-col">
                  <p className="subtitle text-slate-500">Ophtalmologue</p>
                  <p
                    className="subtitle text-slate-500"
                    style={{ color: "#f9b004" }}
                  >
                    Clinique Saint-François
                  </p>
                  <p className="subtitle text-slate-500">Tel : 02 54 48 45 93</p>
                </div>
              </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
                style={{ backgroundColor: "#f9b004" }}
              >
                Rendez-vous
              </button>
            </div>
          </div>
          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                <img
                  className="avatar w-20 h-20 rounded-full"
                  src="../assets/images/avatar.gif"
                  alt=""
                />
              </div>
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <a href="/" className="title font-medium no-underline text-xl">
                  Thierry GIARD
                </a>
                <div className="skills flex flex-col">
                  <p className="subtitle text-slate-500">
                    Oto-rhino-laryngologue (ORL)
                  </p>
                  <p
                    className="subtitle text-slate-500"
                    style={{ color: "#f9b004" }}
                  >
                    Clinique Saint-François
                  </p>
                  <p className="subtitle text-slate-500">Tel : 02 54 07 50 00</p>
                </div>
              </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
                style={{ backgroundColor: "#f9b004" }}
              >
                Rendez-vous
              </button>
            </div>
          </div>
          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                <img
                  className="avatar w-20 h-20 rounded-full"
                  src="../assets/images/avatar.gif"
                  alt=""
                />
              </div>
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <a href="/" className="title font-medium no-underline text-xl">
                  Georges EID
                </a>
                <div className="skills flex flex-col">
                  <p className="subtitle text-slate-500">Gastro-entérologue</p>
                  <p
                    className="subtitle text-slate-500"
                    style={{ color: "#f9b004" }}
                  >
                    Clinique Saint-François
                  </p>
                  <p className="subtitle text-slate-500">Tel : 02 54 60 43 43</p>
                </div>
              </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
                style={{ backgroundColor: "#f9b004" }}
              >
                Rendez-vous
              </button>
            </div>
          </div>
          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                <img
                  className="avatar w-20 h-20 rounded-full"
                  src="../assets/images/avatar.gif"
                  alt=""
                />
              </div>
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <a href="/" className="title font-medium no-underline text-xl">
                  Julien EVEN
                </a>
                <div className="skills flex flex-col">
                  <p className="subtitle text-slate-500">
                    Chirurgien orthopédiste et traumatologue Chirurgien du sport
                  </p>
                  <p
                    className="subtitle text-slate-500"
                    style={{ color: "#f9b004" }}
                  >
                    Clinique Saint-François
                  </p>
                  <p className="subtitle text-slate-500">Tel : 02 54 53 60 24</p>
                </div>
              </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
                style={{ backgroundColor: "#f9b004" }}
              >
                Rendez-vous
              </button>
            </div>
          </div>
          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                <img
                  className="avatar w-20 h-20 rounded-full"
                  src="../assets/images/avatar.gif"
                  alt=""
                />
              </div>
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <a href="/" className="title font-medium no-underline text-xl">
                  Said BENARIM
                </a>
                <div className="skills flex flex-col">
                  <p className="subtitle text-slate-500">
                    Anesthésiste-réanimateur
                  </p>
                  <p
                    className="subtitle text-slate-500"
                    style={{ color: "#f9b004" }}
                  >
                    Clinique Saint-François
                  </p>
                  <p className="subtitle text-slate-500">Tel : 01 23 45 67 89</p>
                </div>
              </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
                style={{ backgroundColor: "#f9b004" }}
              >
                Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
