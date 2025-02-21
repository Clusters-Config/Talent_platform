import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const marginVisibility = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/profile" || location.pathname === "/home"
  || location.pathname === "/dashboard" || location.pathname==="/opensource";

  return (
    <div>
      <div>
        {/* Main Content Container */}
        <main className={`${marginVisibility ? "" : "mt-[50px]"}`}>
          {children} {/* This is where the actual posts will go */}
        </main>
      </div>
    </div>
  );
};

export default Layout;