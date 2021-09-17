import React from "react";

import "./SiteName.scss";

export interface ISiteNameProps {
  name: string;
  colour: string;
}

const SiteName: React.FC<ISiteNameProps> = ({ name, colour }) => {
  return (
    <div className="site-name">
      <h1 className="site-name__heading" style={{
        color: colour,
      }}>{name}</h1>
    </div>
  );
};

export default SiteName;
