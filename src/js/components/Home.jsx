import React from "react";
import Counter from "../Counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center d-flex justify-content-center">

			<Counter/>
            
			
		</div>
	);
};

export default Home;