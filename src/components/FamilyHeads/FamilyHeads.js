import React from "react";
import { people } from "../../const/people";
import Card from "../Card/Card";
import "./FamilyHeads.css";

function FamilyHeads({ onModalClick }) {
	const familyList = people.map((person) => (
		<li key={person.id} onClick={() => onModalClick(person)}>
			<Card>
				<h2>{person.name}</h2>
				<img src={person.imgSrc} className="avatar" alt="koch family member" />
			</Card>
		</li>
	));

	return (
		<>
			<text
				style={{
					fontSize: 24,
					fontWeight: "800",
					margin: "24px",
					textAlign: "center",
				}}>
				* * Click On Your Family's Card Below to Input Expenses and Eaters * *
			</text>
			<ul>{familyList}</ul>
		</>
	);
}

export default FamilyHeads;
