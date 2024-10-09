import ProtectedRouter from "@/components/protected-router";
import NotFoundPage from "@/pages/404";
import AdminPage from "@/pages/admin";
import LoginPage from "@/pages/admin/login";
import UsersPage from "@/pages/admin/users";
import CreateUserPage from "@/pages/admin/users/create-user/indext";
import HomePage from "@/pages/home";
import ProductPage from "@/pages/product";
import path from "path";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRouter>
        <AdminPage />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/admin/users",
        element: <UsersPage />,
      },
      {
        path: "/admin/product",
        element: <ProductPage />,
      },
      {
        path: "/admin/users/create-user",
        element: <CreateUserPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
