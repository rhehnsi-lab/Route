import { useState } from 'react'
import './App.css'
import { Link } from "react-router";
import { Route } from 'react-router'
<Link to="/recipes">למתכונים</Link>

function App() {
< Routes >

  <Route path="/" element={<Home />} />
  <Route path='/recipes' element={<RecipesList />} />
  <Route path="/recipes/:id" element={<RecipeDetails />} />
  <Route path="*" element={<NotFound />} /> 
  
</Routes >

  return (
    <> 
    </>
  )
}

export default App
