import React from "react";
import { useState, useEffect } from "react";
import './sizes.css';



const SizesCategory = () => {
    return ( 
    
    <div>
          <h1>Size</h1>
        <div className="first--category">
        <button>5.5</button>
        <button>6</button>
        <button>6.5</button>
        <button>7</button>
        </div>


        <div  className="second--category">
        <button>7.5</button>
        <button>8</button>
        <button>8.5</button>
        <button>9</button>
        </div>

        <div className="third--category"> 
        <button>9.5</button>
        <button>10</button>
        <button>10.5</button>
        <button>11</button>
        </div>


    </div> );
}
 
export default SizesCategory;