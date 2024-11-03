import Login from "@/components/Login";
import Profile from "@/components/Profile";
import UserContextProvider from "@/context/UserContextProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import ThemeButton from "@/components/ThemeButton";

export default function Home() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div className="bg-gray-400 dark:bg-gray-900 dark:text-gray-500">
          <ThemeButton />
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}
