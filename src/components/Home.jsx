function Home() {
  function handleLogout() {
    sessionStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
  return (
    <div className="w-screen h-screen">
      <div className="m-auto flex flex-col w-fit">
        <h1 className="text-blue-400">Welcome back !</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
