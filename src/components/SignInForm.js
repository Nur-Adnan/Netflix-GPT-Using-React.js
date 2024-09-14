import { Link, useNavigate } from "react-router-dom";
import validate from "../validator/validate";
import { PAGE } from "../router/routes";
import { useRef, useState } from "react";
import authenticate from "../auth/authenticate";

const SignInform = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [emailPhone, setEmailPhone] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const navigate = useNavigate();

  const handleEmailPhone = (event) => {
    setEmailPhone(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    // Client side validation
    const isError = validate(emailPhone, password);
    setErrorMessage(isError);
    if (isError) return;
    setLoadingBtn(true);

    // Send provided credential to server for validation
    const userCredential = await authenticate(emailPhone, password);
    let errorMessage = null;
    switch (userCredential?.error?.code) {
      case "auth/user-disabled":
        errorMessage = "Your account has been disabled!";
        break;

      case "auth/invalid-login-credentials":
        errorMessage = "Invalid login credentials.";
        break;

      default:
        errorMessage = "Something went wrong with your credentials.";
        break;
    }
    setAuthError(errorMessage);
    setLoadingBtn(false);

    if (userCredential?.error) return;
    navigate(PAGE.BROWSE);
  };

  return (
    <div className="bg-black/70 w-full sm:w-[450px] m-auto px-6 md:px-16 py-8 md:py-12 mx-4 sm:mx-auto flex items-center rounded-lg">
      <div className="w-full">
        <h1 className="mb-5 text-white text-4xl font-bold">Sign In</h1>
        {authError && (
          <div className="p-3 bg-[#e87c03] text-white text-xs rounded-md mb-5">
            {authError}
          </div>
        )}
        <div className="mb-2 text-white">
          <input
            type="text"
            value={emailPhone}
            onChange={handleEmailPhone}
            placeholder="Enter Email"
            autoComplete="username"
            className={`px-4 py-4 w-full text-white bg-transparent border border-white rounded-[4px] focus:border-white focus-visible:outline-none text-sm ${
              errorMessage?.emailPhone ? "border-[#e87c03]" : "border-white"
            }`}
          />
          <div className="error px-1 py-2 text-[#e87c03] text-xs">
            {errorMessage?.emailPhone}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2 text-white">
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              autoComplete="password"
              className={`px-4 py-4 w-full text-white bg-transparent border border-white rounded-[4px] focus:border-white focus-visible:outline-none text-sm ${
                errorMessage?.password ? "border-[#e87c03]" : "border-white"
              }`}
            />
            <div className="error px-1 py-2 text-[#e87c03] text-xs">
              {errorMessage?.password}
            </div>
          </div>
          <div className="my-2">
            <button
              onClick={handleSignIn}
              disabled={loadingBtn ? true : false}
              className="flex items-center justify-center px-6 py-2 mt-4 bg-[#e50914] text-white w-full font-semibold text-lg rounded-[4px] hover:bg-[#f40612] disabled:bg-red-800 transition-all duration-300"
            >
              {loadingBtn ? (
                <div className="w-5 h-5 border-t m-[2px] border-gray-300 border-solid rounded-full animate-spin "></div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2 items-center">
            <input
              id="rememberPswrd"
              type="checkbox"
              className="appearance-none rounded-sm w-4 h-4 bg-white relative flex items-center justify-center checked:bg-[#4d4c4c] checked:text-white checked:before:content-['✓'] before:absolute before:text-white"
            />
            <label
              htmlFor="rememberPswrd"
              className="text-white text-xs cursor-pointer"
            >
              Remember Password
            </label>
          </div>
          <div className="help">
            <Link to="/" className="text-xs hover:underline text-white">
              Need Help?
            </Link>
          </div>
        </div>
        <div className="text-md mt-8 flex items-center gap-2 text-gray-400">
          <span className="text-sm">New to NetflixGPT?</span>
          <Link to={PAGE.SIGNUP} className="text-white text-sm hover:underline">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInform;
