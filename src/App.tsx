// import './App.css';
import { useState } from "react";
import ViewProducts from "./Components/ViewProduct"
import AddProduct from "./Components/AddProduct";


function App(){
  const [showProducts, setShowProducts] = useState(false);
  const [addProducts, setAddProducts] = useState(false);

  function viewProductHandler(){
    setShowProducts(!showProducts);
  }

  function addProductHandler(){
    setAddProducts(!addProducts);
  }
  
  return (
    <>
      <button onClick={viewProductHandler}>{showProducts ? 'Hide Products' : 'View Products'}</button>
      {showProducts && <ViewProducts/>}

      <button onClick={addProductHandler}> {addProducts ? 'Hide Add Products' : 'Add Products'} </button>
      {addProducts && <AddProduct/>}
    </>
  )
}

export default App
