const Home = () => {
  const handleOpenApp = () => {
    const appUrl = "https://brightervpn-test.vercel.app/mobile-app";
    const fallbackUrl = "https://play.google.com/store/apps/details?id=com.yourapp";

    window.location.href = appUrl;
    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 2000);
  };

  const handleOpenMyAccount = () => {
    const appUrl = "https://brightervpn-test.vercel.app/mobile-app/account";
    const fallbackUrl = "https://play.google.com/store/apps/details?id=com.yourapp";
    window.location.href = appUrl;

    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 3000);
  };

  return (
    <div>
      <h1 style={{ margin: 10 }}>Hello World</h1>

      <button style={{ margin: 10 }} onClick={handleOpenApp}>
        Open BrighterVPN App
      </button>
      <button onClick={handleOpenMyAccount}>Open BrighterVPN Account</button>
    </div>
  );
};

export default Home;
