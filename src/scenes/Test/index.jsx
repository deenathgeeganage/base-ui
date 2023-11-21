import { useEffect, useState } from "react";
import useAxiosPrivate from "../../components/hooks/useAxiosPrivate";

const Test = () => {
  const axios = useAxiosPrivate();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/demo")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <>{data}</>;
};

export default Test;
