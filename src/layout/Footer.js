import { Link } from "react-router-dom";
import { LOGO_RED } from "../utils/constants";
import { PAGE } from "../router/routes";

const Footer = () => {
  return (
    <footer className="bg-[#141414] rounded-lgd shadow my-4 mt-12">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <Link to="/" className="flex items-center mb-6 md:mb-2">
            <img src={LOGO_RED} className="h-8 mr-3" alt="Adnan" />
          </Link>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500">
            <li>
              <Link
                to={""}
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/nur-adnan/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-[#282727] lg:my-8" />
        <span className="block text-sm text-white font-medium text-center mt-4">
          Crafted By{" "}
          <Link
            to="https://www.linkedin.com/in/nur-adnan/"
            rel="noreferrer"
            target="_blank"
            className="text-red-600 hover:underline"
          >
            Nur Adnan Chowdhury
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
