import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/auth/page";
import OtpBox from "./components/OtpBox";

import ChatbotIntegration from "./pages/chatbot/page";
import ChatbotPreview from "./pages/chatbotPreview/page";
import OrganizationSetup from "./pages/organization/page";
import HomePage from "./pages/home/page";

const router = createBrowserRouter([
  {
    element: <App />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/login",
    element: <AuthPage />,
  },
  {
    path: "/auth/login/otp-verification",
    element: <OtpBox />,
  },
  {
    path: "/organization-setup",
    element: <OrganizationSetup />,
  },
  {
    path: "/chatbot",
    element: <ChatbotIntegration />,
  },
  {
    path: "/chatbot/preview",
    element: <ChatbotPreview />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
