import { useEffect } from "react";

const customSchemeAppUrl = "voyagerapp://";
const customSchemeAppResetUrl = "voyagerapp://reset-password/1de43347-124b-4a8b-bd4b-3af564972d34";

const Home = () => {
  useEffect(() => {
    window.location.href =
      "intent://reset-password/1de43347-124b-4a8b-bd4b-3af564972d34#Intent;scheme=voyagerapp;package=io.accesswealth.voyager;end";
  }, []);

  return (
    <div>
      <h1 style={{ margin: 10 }}>Hello World v2</h1>
      <a href={customSchemeAppUrl} target="_blank" style={{ margin: 10 }}>
        Open App
      </a>
      <a href={customSchemeAppResetUrl} target="_blank" style={{ margin: 10 }}>
        Open Reset Link
      </a>
    </div>
  );
};

export default Home;
