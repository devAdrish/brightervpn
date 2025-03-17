const Home = () => {
  const handleOpenApp = () => {
    const appUrl = "voyagerapp:/";
    window.location.href = appUrl;
  };

  const handleOpenResetAccount = () => {
    const appUrl = "voyagerapp://reset-password/1de43347-124b-4a8b-bd4b-3af564972d34";
    window.location.href = appUrl;
  };

  return (
    <div>
      <h1 style={{ margin: 10 }}>Hello World v1</h1>
      <button style={{ margin: 10 }} onClick={handleOpenApp}>
        Open App
      </button>
      <button style={{ margin: 10 }} onClick={handleOpenResetAccount}>
        Open Reset Link
      </button>
    </div>
  );
};

export default Home;
