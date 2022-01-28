import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../compenents/Navbar";

const Singlebeer = (props) => {
    const params = useParams();
    const myBeer = props.beers.find((beer)=> beer._id === params._id);

    return(
        <>
        <Navbar/>
        <div className="col-7">
            <img src={myBeer.image_url} alt={myBeer.name} style={{width: "300px"}}/>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td><h1>{myBeer.name}</h1></td>
                        <td><h1>{myBeer.attenuation_level}</h1></td>
                    </tr>
                    <tr>
                        <td>{myBeer.tagline}</td>
                        <td>
                        {myBeer.first_brewed}
                        </td>
                    </tr>
                    <tr>
                        <td>{myBeer.description}</td>
                        
                    </tr>
                    <tr>
                        <td>{myBeer.contributed_by}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Singlebeer;