import Chart from "../../Components/Chart/chart";
import FeaturedInfo from "../../Components/FeaturedInfo/featuredInfo";
import "./home.css";
import { userData } from "../../DummyData";
import WidgetSm from "../../Components/WidgetSm/widgetSm";
import WidgetLg from "../../Components/WidgetLg/widgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTA5NmFkNGY2ZmY1MmUyY2NhY2RiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjY3NjMwMSwiZXhwIjoxNjMzMTA4MzAxfQ.HLZmXFLdRgZJGG-kSY1PiJFBTQTqmpfrzHUAQZpDRwA",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home