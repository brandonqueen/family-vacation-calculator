import React from "react";
import PatriarchImg from "../../../assets/images/20728384_111363032898387_3529026570812006970_n.jpg";

function Patriarchs() {
	return (
		<section>
			<h2>The Patriarchs</h2>
			<img src={PatriarchImg} className="avatar" />
			<text className="patCap">"Nay! The patriarchs shan't pay."</text>
		</section>
	);
}

export default Patriarchs;
