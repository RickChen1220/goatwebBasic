import React from "react";
import axios from "axios";

const ApiMuda = () => {
  axios
    .get("https://goat-360609.de.r.appspot.com/agent/detail?name=mudamuda")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default ApiMuda;
