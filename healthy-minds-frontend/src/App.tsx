import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import ProtectedRoute from "./routes/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import HomePage from "./pages/Homee.tsx/Home";
import Signup from "./pages/Signup";
import PHQ9Form from "./pages/PHQ9Form";
import GAD7Form from "./pages/GAD7Form";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/PHQ9Form" element={<PHQ9Form />} />
            <Route path="/GAD7Form" element={<GAD7Form />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
