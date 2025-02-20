import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const marginVisibility = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/profile" || location.pathname === "/home";

  return (
    <div>
      <div>
        {/* Main Content Container */}
        <main className={`${marginVisibility ? "" : "mt-[100px]"}`}>
          {children} {/* This is where the actual posts will go */}
        </main>
      </div>
    </div>
  );
};

export default Layout;