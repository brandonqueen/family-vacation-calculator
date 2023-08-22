import React from "react";
import PatriarchImg from "../../../assets/images/Patriarchs.jpg";
import Card from "../Card/Card";

function Patriarchs() {
	return (
		<Card>
			<section>
				<h2>The Patriarchs</h2>
				<img src={PatriarchImg} className="avatar" />
				<text className="patCap">❌ Exempt from bill-split! ❌</text>
			</section>
		</Card>
	);
}

export default Patriarchs;
