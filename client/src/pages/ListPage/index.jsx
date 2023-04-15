import { useState } from "react";
import BigBuyTab from "./BigBuyTab";
import ExpressBuyTab from "./ExpressBuyTab";
import NavBar from "@/layouts/NavBar";
import GoBack from "@/layouts/GoBack";

const EXPRESS_TAB_NAME = "express-buy";
const BIG_TAB_NAME = "big-buy";

const ListPage = () => {
  const [activeTab, setActiveTab] = useState(EXPRESS_TAB_NAME);
  const changeActiveTab = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <main className=" bg-[url('../../assets/images/mainBg.png')] bg-top min-h-screen">
      <div className=" bg-white bg-opacity-80 min-h-screen">
        <header className="container">
          <NavBar />
          <GoBack />
        </header>
        <div
          role="tablist"
          aria-label="List types Tabs"
          className="flex py-5 container "
        >
          <TabButton
            keyName={EXPRESS_TAB_NAME}
            changeActiveTab={changeActiveTab}
            activeTab={activeTab}
          >
            Compra Express
          </TabButton>
          <TabButton
            keyName={BIG_TAB_NAME}
            changeActiveTab={changeActiveTab}
            activeTab={activeTab}
          >
            Compra en Volumen
          </TabButton>
        </div>

        <div className=" h-full " role="tabpanel">
          {activeTab === EXPRESS_TAB_NAME && <ExpressBuyTab />}
          {activeTab === BIG_TAB_NAME && <BigBuyTab />}
        </div>
      </div>
    </main>
  );
};

function TabButton({ keyName, children, changeActiveTab, activeTab }) {
  return (
    <button
      role="tab"
      aria-selected={activeTab === keyName}
      className={` ${
        activeTab === keyName
          ? "bg-primary text-white border border-primary"
          : "bg-white text-black border border-primary "
      }
      first:rounded-l-md last:rounded-r-md
       flex-grow  py-2 font-medium flex justify-center items-center  text-sm`}
      onClick={() => changeActiveTab(keyName)}
    >
      {children}
    </button>
  );
}

export default ListPage;
