import { BsFillMoonFill } from "react-icons/bs";
import Toggle from "./ThemeToggle/ThemeToggle";

function Header() {


  return (
    <>
      <div className="shadow-xl bg-white dark:bg-light-grey dark:text-white px-4 py-8 text-base flex items-center justify-between font-semibold ">
        <h1>Where in the world ?</h1>
        <span className="flex items-center">
          {" "}
        <Toggle />
          <h2 className="ml-2"> Dark Mode </h2>
        </span>
      </div>
    </>
  );
}

export default Header;
