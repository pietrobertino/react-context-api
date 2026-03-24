import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Products from "./pages/Products"
import Product from "./pages/Product"
import NotFoundPage from "./pages/NotFoundPage"
import BudgetContext from "./contexts/BudgetContext"
import { useState } from "react"

function App() {

  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/chi-siamo" element={<Info />} />
              <Route path="/prodotti" element={<Products />} />
              <Route path="/prodotti/:id" element={<Product />} />
              <Route path="/404-not-found" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
