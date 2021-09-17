import React, {useState, useEffect} from "react";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import "./App.scss";
import FriendsList from "../FriendsList/FriendsList";
import SiteName from "../SiteName/SiteName";

const lists = (name) => {
  var list
  switch(name.toLowerCase()) {
    case 'jessica':
      list = [{
        name: 'Nelson',
        rating: 0,
        dp: 'https://i.pravatar.cc/150?img=18'
      }, {
        name: 'Juli',
        rating: 1,
        dp: 'https://i.pravatar.cc/150?img=36'
      }, {
        name: 'Marivel',
        rating: 0,
        dp: 'https://randomuser.me/api/portraits/women/56.jpg'
      }, {
        name: 'Tomeka',
        rating: 0,
        dp: 'https://i.pravatar.cc/150?img=24'
      }, {
        name: 'Russ',
        rating: 0,
        dp: 'https://i.pravatar.cc/150?img=61'
      }]
      break;
    case 'bob':
      list = [{
        name: 'Brian',
        rating: 0,
        dp: 'https://i.pravatar.cc/150?img=12'
      }, {
        name: 'Valene',
        rating: 1,
        dp: 'https://i.pravatar.cc/150?img=26'
      }, {
        name: 'Juli',
        rating: 0,
        dp: 'https://i.pravatar.cc/150?img=36'
      }]
      break;
    default:
      list = []
  }
  return list
}

const App: React.FC = () => {
  const [siteName, setSiteName] = useState("Modica");
  const [user, setUserName] = useState("Jessica");

  useEffect(() => {
    setTimeout(() => {
      setSiteName("Modica Group");
    }, 3000);
  }, []);


  return (
    <div className="app">
      <SiteName name={siteName} colour="#811519" />

      <WelcomeMessage name={user} />

        <FriendsList name={user} list={lists(user)} />

      <input
        placeholder="Enter your name"
        onChange={(ev) => {
          setUserName(ev.target.value)
          console.log("User updated name", ev.target.value);
        }} />
    </div>
  );
};

export default App;
