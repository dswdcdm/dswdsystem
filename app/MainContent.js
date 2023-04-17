import LeftMainContent from "@/components/LeftMainContent";
import RightMainContent from "@/components/RightMainContent";
import React from "react";

const MainContent = () => {
  return (
    <div className="md:flex gap-2 p-4 justify-between">
      <LeftMainContent />
      <section>mid content</section>
      <RightMainContent />
    </div>
  );
};

export default MainContent;
