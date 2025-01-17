"use client";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("user: ", user);
  if (!user) return <div>Please login</div>;
  return <div>Welcome, {user?.username}</div>;
};

export default Profile;
