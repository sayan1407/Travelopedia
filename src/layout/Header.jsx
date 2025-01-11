import logo from "../images/react.png";

const Header = () => {
  return (
    <div
      className="py-1 pt-3 pl-2"
      style={{ backgroundColor: "black", borderBottom: "1px solid #777" }}
    >
      <img
        src={logo}
        style={{ height: "35px", verticalAlign: "top" }}
        alt="React Logo"
      ></img>
      <span className="h2 pt-4 m-2 text-white-50">Travelopedia</span>
    </div>
  );
};

export default Header;
