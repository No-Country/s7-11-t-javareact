import { useState } from "react";
import BigBuyTab from "./BigBuyTab";
import ExpressBuyTab from "./ExpressBuyTab";
const EXPRESS_TAB_NAME = "express-buy";
const BIG_TAB_NAME = "big-buy";
import "./index.css";
const ListPage = () => {
  const [activeTab, setActiveTab] = useState(EXPRESS_TAB_NAME);

  const changeActiveTab = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <main className="w-full max-w-7xl mx-auto">
      <div
        role="tablist"
        aria-label="List types Tabs"
        className="flex items-center justify-center p-10"
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
          En volumen
        </TabButton>
      </div>

      <div className="mt-8 box-list flex justify-between flex-col" role="tabpanel">
        {activeTab === EXPRESS_TAB_NAME && <ExpressBuyTab />}
        {activeTab === BIG_TAB_NAME && <BigBuyTab />}
      </div>
    </main>
  );
};

function TabButton({ keyName, children, changeActiveTab, activeTab }) {
  return (
    <button
      role="tab"
      aria-selected={activeTab === keyName}
      className={` ${activeTab === keyName ? "bg-my-blue text-white border border-my-blue" : "bg-white text-black border border-my-blue"}
              py-2 px-4 font-medium flex justify-center items-center w-168 h-29 text-sm`}
      onClick={() => changeActiveTab(keyName)}
    >
      {children}
    </button>
  );
}

export default ListPage;
