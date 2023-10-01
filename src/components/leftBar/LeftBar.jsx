import "./leftBar.scss";
import Friends from "../../assests/1.png";
import Groups from "../../assests/2.png";
import Market from "../../assests/3.png";
import Watch from "../../assests/4.png";
import Memories from "../../assests/5.png";
import Events from "../../assests/6.png";
import Gaming from "../../assests/7.png";
import Gallery from "../../assests/8.png";
import Videos from "../../assests/9.png";
import Messages from "../../assests/10.png";
import Tutorials from "../../assests/11.png";
import Courses from "../../assests/12.png";
import Fund from "../../assests/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
