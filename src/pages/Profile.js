import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { AVATAR_BLUE } from "../utils/constants";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      setUserEmail(auth.currentUser.email);
    }
  }, []);

  return (
    <div className="profile-page">
      <div
        className={`bg-skin w-full h-[430px] absolute top-0 -z-0 bg-gradient-to-b from-indigo-800 to-[#141414] transition-colors`}
      ></div>
      <div className="profile relative flex flex-col items-center justify-center min-h-[400px]">
        <div className="avatar-container mt-12">
          <img
            src={AVATAR_BLUE}
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-800"
          />
        </div>
        <div className="user-info mt-6 text-center">
          <h1 className="text-2xl text-white font-bold">{userEmail}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
