import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Members from "./Pages/Members.jsx";
import ManageMembers from "./Pages/ManageMembers.jsx";
import About from "./Pages/About.jsx";
import DashboardLayout from "./Components/DashboardLayout.jsx";
import EditMemberForm from "./Components/EditForm/EditForm.jsx";
import Error from "./Components/Errors/Error.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Members />
          </>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/manage-members",
        element: <ManageMembers />,
        children: [
          {
            path: "edit-member/:id",
            element: <EditMemberForm />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools/>
    <ToastContainer position="top-center" />
    </QueryClientProvider>
  </React.StrictMode>
);
