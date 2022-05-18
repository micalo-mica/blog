import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";
import { useContext } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";





function App() {

  const {user} = useContext(Context);

  return (
<BrowserRouter>
<TopBar/> 
    <Routes>
      <Route path="/">
        <Route index element={user ? <Home /> : <Login/> } />
        <Route path="register" element={user ? <Home/> :<Register />} />
        <Route path="login" element={user ? <Home/> :<Login />} />
        <Route path="settings" element={user ?<Settings/> : <Login/>} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        {/* <Route path="settings" element={<Settings />} /> */}
        <Route path="post">
          <Route path=":postId" element={<Single />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
