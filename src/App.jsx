import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store/Store";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import MovieDetail from "./components/movieDetail/MovieDetail";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        {/* <Route path="/movie" element={<MovieDetail />} /> */}
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div>
      <Provider store={Store}>
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
