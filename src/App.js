import HomeSection from "./components/HomeSection";
import "../src/index.css";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div
      className="App w-full p-[5%] xl:w-[1080px] xl:p-[0px] m-auto"
      style={{ fontFamily: "Satoshi Sans Serif" }}
    >
      <div className="sticky top-6 lg:top-16 z-50">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeSection />,
      },
      {
        path:"/project",
        element:<ProjectSection/>
      },
      {
        path:"/contact",
        element:<ContactSection/>
      }
    ],
  },
], {basename: "/Portfolio-2.0/"});

export default AppRouter;
