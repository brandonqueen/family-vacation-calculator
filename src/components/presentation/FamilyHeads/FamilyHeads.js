import React from "react";
import Card from "../Card/Card";
import JoelImg from "../../../assets/images/Joel.jpg";
import JoshImg from "../../../assets/images/Josh.jpg";
import KatieImg from "../../../assets/images/Katie.jpg";
import MelodyImg from "../../../assets/images/Melody.jpg";
import EvanImg from "../../../assets/images/Evan.jpg";

function FamilyHeads() {
	const families = [
		{
			id: 0,
			name: "Joel",
			imgSrc: JoelImg,
		},
		{
			id: 1,
			name: "Josh",
			imgSrc: JoshImg,
		},
		{
			id: 2,
			name: "Katie",
			imgSrc: KatieImg,
		},
		{
			id: 3,
			name: "Melody",
			imgSrc: MelodyImg,
		},
		{
			id: 4,
			name: "Evan",
			imgSrc: EvanImg,
		},
	];

	const familyList = families.map((person) => (
		<li key={person.id}>
			<Card>
				<h2>{person.name}</h2>
				<img src={person.imgSrc} className="avatar" />
			</Card>
		</li>
	));

	return <ul>{familyList}</ul>;
}

export default FamilyHeads;
