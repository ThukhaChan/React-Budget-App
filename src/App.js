import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader,dashboardAction } from "./pages/Dashboard";
import Main, { mainLoader } from "./layouts/Main";
import Error from "./pages/Error";
import { logoutAction } from "./actions/Logout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true, //if u want to show first like ->  path: "/", but it already exists
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
