"use client";
import { createContext } from "react";

// Define context type with user and setUser
interface UserContextType {
  user: { username: string; password: string } | null;
  setUser: (user: { username: string; password: string } | null) => void;
}

// Create the context with a default value
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
