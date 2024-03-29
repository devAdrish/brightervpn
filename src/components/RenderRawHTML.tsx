import React from "react";

type RenderRawHtmlProps = {
  htmlData: string;
};

export const RenderRawHTML: React.FC<RenderRawHtmlProps> = ({ htmlData }) => {
  const processHtmlData = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlData;
    const paragraph = tempDiv.querySelector("p");
    if (paragraph) {
      paragraph.classList.add("raw-html");
    }
    const modifiedHtmlString = tempDiv.innerHTML;
    return modifiedHtmlString;
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `p.raw-html { 
            margin: 0;
            padding: 5px,
          }`,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: processHtmlData(),
        }}
      />
    </>
  );
};
