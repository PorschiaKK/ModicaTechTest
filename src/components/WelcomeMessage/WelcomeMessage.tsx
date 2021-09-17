import React, { useEffect, useState } from "react";

import "./WelcomeMessage.scss";

export interface IWelcomeMessageProps {
  name: string;
}

const WelcomeMessage: React.FC<IWelcomeMessageProps> = ({ name }) => {
  // ClassNames are named in BEM format. block_element__child--modifier
  const [colour, setColour] = useState('#000000')

  useEffect(() => {
    switch(name.toLowerCase()) {
      case 'jessica':
        setColour('#00abff')
        break;
      case 'bob':
        setColour('#ff6b00')
        break;
      default:
        setColour('#000000')
    }
  }, [name]);

  return (
    <div className="welcome-message">
      <div>
        <h2 className="welcome-message__heading" style={{
          color: colour,
        }}>
            Welcome, {name}
        </h2>
      </div>
    </div>
  );
};

export default WelcomeMessage;
