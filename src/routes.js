import AdminPage from "./pages/AdminPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "blogs",
    element: <ListPage />,
  },
  {
    path: "admin",
    element: <AdminPage />,
    auth: true,
  },
  {
    path: "blogs/create",
    element: <CreatePage />,
    auth: true,
  },
  {
    path: "blogs/:id/edit",
    element: <EditPage />,
    auth: true,
  },
  {
    path: "blogs/:id",
    element: <ShowPage />,
  },
];

export default routes;
