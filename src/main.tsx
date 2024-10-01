import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToasttifyProvider } from "./contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Tạo instance của QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToasttifyProvider>
          <App />
        </ToasttifyProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
