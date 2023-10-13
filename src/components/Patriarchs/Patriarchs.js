import React from "react";
import PatriarchImg from "../../assets/images/Patriarchs.png";
import Card from "../Card/Card";
import "./Patriarchs.css";

function Patriarchs() {
	const handleClick = () => {
		alert(
			"Ya big dum-dum... can't you read? The patriarchs are exempt. They've spent enough already! 😜"
		);
	};

	return (
		<Card onClick={handleClick}>
			<h2>The Patriarchs</h2>
			<img src={PatriarchImg} className="avatar" alt="patriarchs" />
			<text className="patCap">
				**Exempt from bill-split!** (image here for honorary purposes)
			</text>
		</Card>
	);
}

export default Patriarchs;
