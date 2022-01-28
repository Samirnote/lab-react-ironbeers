import React from "react";
import { NavLink } from "react-router-dom";
import Beers from "../assets/beers.png"
import Randompic from "../assets/random-beer.png"
import Newbeerpic from "../assets/new-beer.png"
const Home = () => {
	return (
		<>
		
			<NavLink className="list-group-item list-group-item-action" to="/beers" >
                <h1>All Beers</h1>
                <img src={Beers} /> 
            </NavLink>
            <NavLink className="list-group-item list-group-item-action" to="/random-beer">
                <h1>Random Beers</h1>
                <img src={Randompic} />
            </NavLink>
            <NavLink className="list-group-item list-group-item-action" to="/new-beer">
                <h1>New Beer</h1>
                <img src={Newbeerpic} />
            </NavLink>
		
        </>
	);
};

export default Home;