import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const earth = (
    <FontAwesomeIcon icon={faEarthEurope} className="pr-2 h-6 w-6" />
  );
  return (
    <div className="navbar--container flex justify-center items-center py-4 text-white bg-travel-red font-medium mb-12">
      {earth}
      <h1 className="tracking-tighter text-sm">my travel journal.</h1>
    </div>
  );
};

export default Navbar;
