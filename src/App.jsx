import { Layout, Result, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import useAuth from "./components/hooks/useAuth";
import MainRouter from "./components/MainRouter";
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const auth = useAuth();
  useEffect(() => {
    console.log(auth, auth.auth);
    if (auth.auth && Object.keys(auth.auth).length === 0) {
      const redirectUrl = encodeURI(window.location.href);
      const pathName = window.location.pathname;
      const lastUrlSegment = pathName.slice(
        pathName.lastIndexOf("/") + 1,
        pathName.length
      );
      if (lastUrlSegment !== "login") {
        window.location.href = window.location.href =
          window.location.origin + `/login?redirect=${redirectUrl}`;
      } else {
        setLoading(false);
      }
    } else {
      console.log("not empty");
      // do things like setting loading to done
      // setError(true);
      setLoading(false);
    }
  }, [auth]);
  return (
    <>
      {loading && loadingView}
      {error && errorView}
      {!error && !loading && (
        <div>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

const { Content } = Layout;
const loadingView = (
  <Layout>
    <Content
      style={{
        padding: "0 0",
        paddingTop: 300,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Spin tip="Loading..." />
    </Content>
  </Layout>
);

const errorView = (
  <Result
    style={{
      paddingTop: 200,
    }}
    status="500"
    title="Error occurred while loading the configuration"
    subTitle="Please refresh your browser window"
  />
);

export default App;
