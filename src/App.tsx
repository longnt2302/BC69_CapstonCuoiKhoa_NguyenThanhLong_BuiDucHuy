import { useLocation } from "react-router-dom";
import { routers } from "./router";
import { useEffect } from "react";
import { reloadScripts } from "./utils";
function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Navigated to:", location.pathname);
    const scriptUrls = ["/assets/js/plugins.js", "/assets/js/scripts.js"];
    // Gọi lại hàm để tải lại các file JS cần thiết
    reloadScripts(scriptUrls);
  }, [location]);
  return <>{routers()}</>;
}

export default App;
