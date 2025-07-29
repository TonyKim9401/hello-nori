import React from "react";

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold border-b dark:border-black pb-1 mb-2">
        {title}
      </h2>
      <div className="flex flex-col py-4">{children}</div>
    </div>
  );
}

export default Section;
