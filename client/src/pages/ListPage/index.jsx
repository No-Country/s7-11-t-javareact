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
    <main className="z-0 lg:bg-contain bg-[url('../../assets/images/mainBg.png')]">
      
      <div className="p-4 lg:px-11 bg-white bg-opacity-80">
        <div
          role="tablist"
          aria-label="List types Tabs"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] py-5 lg:px-5"
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
              py-2 px-[6%] lg:px-[20%] font-medium flex justify-center items-center w-168 h-29 text-smv`}
      onClick={() => changeActiveTab(keyName)}
    >
      {children}
    </button>
  );
}

export default ListPage;
