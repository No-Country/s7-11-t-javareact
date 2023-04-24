import { useState } from "react";
import BigBuyTab from "./BigBuyTab";
import ExpressBuyTab from "./ExpressBuyTab";import NavBar from "@/layouts/NavBar";

const EXPRESS_TAB_NAME = "express-buy";
const BIG_TAB_NAME = "big-buy";

const ListPage = () => {
  const [activeTab, setActiveTab] = useState(EXPRESS_TAB_NAME);
  const changeActiveTab = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <main className="z-0 h-screen lg:bg-contain bg-[url('../../assets/images/mainBg.webp')]">
      <div className="p-4 lg:px-11 bg-white bg-opacity-80">
        <div role="tablist" aria-label="List types Tabs" className="flex">
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

        <div className="mt-8 h-full" role="tabpanel">
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
