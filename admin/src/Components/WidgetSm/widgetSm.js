import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const  WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTA5NmFkNGY2ZmY1MmUyY2NhY2RiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjY3NjMwMSwiZXhwIjoxNjMzMTA4MzAxfQ.HLZmXFLdRgZJGG-kSY1PiJFBTQTqmpfrzHUAQZpDRwA",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;