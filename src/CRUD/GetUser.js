import axios from "axios";

export const getUserData = async () => {
    const res = await axios.get("/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 201) {
      console.log(res.data);
      console.log("data get");
    } else {
      console.log(res);
    }
};