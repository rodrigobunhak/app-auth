import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { UsersList } from "./pages/UserList";
import Login from "./pages/Login";
// import { SignIn } from "./components/SignIn";
// import { SignUp } from "./components/SignUp";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/users" element={<UsersList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
