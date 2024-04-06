import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Pricingplans from "./pages/Pricingplans";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<div>About</div>} />
        <Route path="pricing-plans" element={<Pricingplans />} />
      </Route>
    </Routes>
  );
}

export default App;
