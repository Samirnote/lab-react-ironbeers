import React from "react";
import { Link} from "react-router-dom";
import Navbar from "../compenents/Navbar";

const Listbeers = ({beers}) => {

    return(
        <>
        <Navbar/>
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            
            <div className="list-group"> 
            
                {beers.map((beer) => {
                   
                    return (
        
                    <Link className="list-group-item list-group-item-action" to={ beer._id}>
                    <img src= {beer.image_url} style = {{maxHeight: "120px"}}/> 
                    <p>{beer.name}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>

                    </Link>
              
                    )
                })}
               
            </div>
        </div>
        </>
    )
}

export default Listbeers;