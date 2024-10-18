const Home = () => {
  const handleOpenApp = () => {
    const appUrl = "https://brightervpn-test.vercel.app/mobile-app";
    window.location.href = appUrl;
  };

  const handleOpenMyAccount = () => {
    const appUrl = "https://brightervpn-test.vercel.app/mobile-app/account";
    window.location.href = appUrl;
  };

  const handleOpeniOS = () => {
    const appUrl = "https://brightervpn-test.vercel.app";
    window.location.href = appUrl;
  };

  return (
    <div>
      <h1 style={{ margin: 10 }}>Hello World</h1>

      <button style={{ margin: 10 }} onClick={handleOpenApp}>
        Open BrighterVPN App
      </button>
      <button style={{ margin: 10 }} onClick={handleOpenMyAccount}>
        Open BrighterVPN Account
      </button>
      <button style={{ margin: 10 }} onClick={handleOpeniOS}>
        Open BrighterVPN iOS
      </button>
    </div>
  );
};

export default Home;
