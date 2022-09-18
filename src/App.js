import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Book from "./Components/Book/Book";
import RoomDetails from "./Components/RoomDetails/RoomDetails";
import { UserProvider } from "./Context/UserProvider";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/UseRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header></Header>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact element={<PrivateRoute/>} >
            <Route exact path="/book" element={<Book />}></Route>
            <Route exact path="/book/:id" element={<RoomDetails />}></Route>
          </Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/*" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
