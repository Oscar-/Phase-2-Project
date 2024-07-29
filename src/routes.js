import Home from "./pages/Home";
import About from "./pages/About";
import AddPlace from "./pages/AddPlace";
import AllPlaces from "./pages/AllPlaces";
import Map from "./pages/Map";
import Place from "./pages/Place";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />
    },
    {
      path: "/addplace",
      element: <AddPlace />,
      errorElement: <ErrorPage />
    },
    {
      path: "/allplaces",
      element: <AllPlaces />,
      errorElement: <ErrorPage />
    },
    {
      path: "/map",
      element: <Map />,
      errorElement: <ErrorPage />
    },
    {
      path: "/place/:id",
      element: <Place />,
      errorElement: <ErrorPage />
    }
  ];

export default routes;