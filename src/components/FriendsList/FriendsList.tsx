import "./FriendsList.scss";
import React, { useState, useEffect, ReactElement, ImgHTMLAttributes, JSXElementConstructor } from "react";

export interface IFriendsListProps {
  list: Array<any>;
  name: string;
}

const FriendsList: React.FC <IFriendsListProps>= ({name, list}) => {
  const [friends, setFriends] = useState(null)

  useEffect(() => {
    console.log(list)
    let items = []
    if(list.length === 0) items.push(<span>We couldn't find your friends list</span>)
    for(var i = 0; i < list.length; i++){
      items.push(
        <span className="friend--content">
          {list[i].dp && <img className="friend--img" src={list[i].dp} alt={list[i].name} />}
          <p>{list[i].name}</p>
          {list[i].rating === 1 && <p>&#128151;</p>}
        </span>
      )
    }
    setFriends(items)
	}, [ name ]);



  return (
    <ul className="friends-list">
      {friends && friends.map((item) => (
        <li className="friend">{item}</li>
			))}
    </ul>
  );
};

export default FriendsList;
