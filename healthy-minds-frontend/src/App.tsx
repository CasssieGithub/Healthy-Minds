import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
