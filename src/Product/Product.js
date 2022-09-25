import React, {  useState } from 'react'
import Cards from '../card/Card';
 import "../Product/Product.css"
// import { Use_r_state } from '../Store/Store'
import data from "../data/Data"
const Product = ({ handleClick }) => {
    
    
    // const [ x,dis] = Use_r_state();
// 
    const [list , setdemo] = useState(data);

      
   
    // const allp = async () => {
    //     const res = await fetch('https://dummyjson.com/products');
    //     const data = await res.json();
    //     setdemo(data.products)
    // }
    
    //  useEffect( () => {
    //     allp();
        
    //  },[])

    const filterResult =  (cartitem) => {
       const result = data.filter((cur) => {
        return cur.size === cartitem
       });
       setdemo(result)
    }


   


    return (
    <>
     

     <div className="cointainer-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
          <button type="button" className="btn btn-secondary w-100 mb-4" onClick={() => setdemo(data)}>All</button>
          <button type="button" className="btn btn-secondary w-100 mb-4" onClick={() => filterResult("S")}>S</button>
          <button type="button" className="btn btn-secondary w-100 mb-4" onClick={() => filterResult("L")}>L</button>
          <button type="button" className="btn btn-secondary w-100 mb-4" onClick={() => filterResult("XL")}>XL</button>
          <button type="button" className="btn btn-secondary w-100 mb-4" onClick={() => filterResult("M")}>M</button>
          <button type="button" className="btn btn-secondary w-100 mb-4" onClick={() => filterResult("XXL")}>XXL</button>
          </div>
          <div className="col-md-9">
            <div className="row">
            {list.map((item) => (
            <Cards key={item.id}  item={item}  handleClick={handleClick}  />
        ))}
                
            </div>
          </div>
        </div>
     </div>
    
    {/* <div className='col-md-9'>
        {list.map((item) => (
            <Cards key={item.id}  item={item}  handleClick={handleClick}  />
        ))}
    </div> */}

    </>
  )
}

export default Product