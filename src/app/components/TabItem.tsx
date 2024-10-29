import React from "react";

type TabItemProps = {
  active: boolean;
  selectTab: () => void;
  children: any;
};

const TabItem = ({ active, selectTab, children }: TabItemProps) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabItem;
