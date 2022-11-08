import "./Card.css";
import Section from "./Section";
import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    const res = await axios.get("/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 201) {
      console.log(res.data);
      console.log("data get");
      setData(res.data.data);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="slider">
      <div className="main">
        {data.length > 0
          ? data.map((el, i) => {
              return <Section key={el.id} sec={el} />;
            })
          : "no users found"}
      </div>
    </div>
  );
}

export default Card;
