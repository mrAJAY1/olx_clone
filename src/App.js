import "./App.css";
// component import
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Loader from "./Components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import PostContext from "./Contexts/postContexts";

import { Contexts, FirebaseContext } from "./Contexts/Contexts";
function App() {
  const { isLoading, setuser } = useContext(Contexts);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setuser(user);
    });
  });
  return (
    <div>
      <PostContext>
        {isLoading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />4
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
        </Routes>{" "}
      </PostContext>
    </div>
  );
}

export default App;
