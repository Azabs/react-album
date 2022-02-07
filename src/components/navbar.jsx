const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <img src="./logo192.png" alt="logo" />
        <a className="navbar-brand px-3" href="#">
          <h3>React-Album</h3>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
