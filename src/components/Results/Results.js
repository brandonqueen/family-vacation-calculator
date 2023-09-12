import React from "react";
import "./Results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquarePollVertical,
	faHippo,
	faCreditCard,
	faMoneyBillTransfer,
	faArrowRight,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import JoelImg from "../../assets/images/Joel.jpg";
import { useSelector } from "react-redux";
import { people } from "../../const/people";

function Results() {
	//Access state
	const personState = useSelector((state) => {
		return state.personInput;
	});

	//Icon styling
	const iconStyle = {
		fontSize: "35px",
		color: "rgb(246,196,74)",
		marginRight: "16px",
	};

	const iconStyle2 = {
		fontSize: "32px",
		color: "rgb(246,196,74)",
		marginRight: "16px",
	};

	const iconStyle3 = {
		fontSize: "18px",
		color: "rgb(246,196,74)",
		marginRight: "8px",
	};

	//Functions to render
	const totalNumOfEatersAll = () => {
		const eatersArray = personState.map((person) => person.eaters);
		const eatersSum = eatersArray.reduce(
			(acc, currentVal) => acc + currentVal,
			0
		);
		return eatersSum;
	};

	const totalAmountSpentAll = () => {
		const totalSpentArray = personState.map((person) => person.total);
		const totalSpentSum = totalSpentArray.reduce(
			(acc, currentVal) => acc + currentVal,
			0
		);
		return totalSpentSum;
	};

	const totalAmountPerEater = () => {
		return (
			Math.round((totalAmountSpentAll() / totalNumOfEatersAll()) * 100) / 100
		);
	};

	const PersonBreakdown = () => {
		return personState.map((person) => {
			const indName = person.name;
			const indEaters = person.eaters;
			const indSpent = person.total;

			const indImgSrc = () => {
				const personIndex = people.findIndex((obj) => obj.name === indName);
				return people[personIndex].imgSrc;
			};

			const indOwes = () => {
				return (
					Math.round((totalAmountPerEater() * indEaters - indSpent) * 100) / 100
				);
			};

			const RenderIndOwed = () => {
				if (indOwes() < 0) {
					return (
						<li className="breakdownPersonData">
							<FontAwesomeIcon style={iconStyle3} icon={faArrowRight} />
							<text>
								owed&nbsp;&nbsp;
								<span style={{ backgroundColor: "rgb(80,200,60)" }}>
									&nbsp;&nbsp;${-indOwes()}&nbsp;&nbsp;
								</span>
							</text>
						</li>
					);
				} else {
					return (
						<li className="breakdownPersonData">
							<FontAwesomeIcon style={iconStyle3} icon={faArrowLeft} />
							<text>
								owes&nbsp;&nbsp;
								<span style={{ backgroundColor: "rgb(190,38,38)" }}>
									&nbsp;&nbsp;${indOwes()}&nbsp;&nbsp;
								</span>
							</text>
						</li>
					);
				}
			};

			return (
				<li className="personBreakdownListItem">
					<img className="listAvatar" src={indImgSrc()} alt={indName}></img>
					<text className="personName">{indName}</text>
					<li className="breakdownPersonData">{indEaters} eaters</li>
					<li className="breakdownPersonData">spent ${indSpent}</li>
					<RenderIndOwed />
				</li>
			);
		});
	};

	return (
		<div className="resultsGlobal">
			<div className="resultsMainCard">
				<div className="TitleBar">
					<FontAwesomeIcon
						className="resultsIcon"
						icon={faSquarePollVertical}
						style={iconStyle}
					/>
					<text className="resultsTitle">Results</text>
				</div>
				<div className="resultsOutputArea">
					<div className="globalTotalsArea">
						<text className="outputAreaHeader">Totals</text>
						<ul className="globalTotalsList">
							<li className="globalTotalsRow">
								<FontAwesomeIcon style={iconStyle2} icon={faHippo} />
								<text className="globalTotalsText">
									{totalNumOfEatersAll()} Eaters
								</text>
							</li>
							<li className="globalTotalsRow">
								<FontAwesomeIcon style={iconStyle2} icon={faCreditCard} />
								<text className="globalTotalsText">
									${totalAmountSpentAll()} Spent
								</text>
							</li>
							<li className="globalTotalsRow">
								<FontAwesomeIcon
									style={iconStyle2}
									icon={faMoneyBillTransfer}
								/>
								<text className="globalTotalsText">
									${totalAmountPerEater()} Per Eater
								</text>
							</li>
						</ul>
					</div>
					<div className="breakdownByFamilyArea">
						<text className="outputAreaHeader">Breakdown By Person</text>
						<ul className="personBreakdownList">
							<PersonBreakdown />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Results;
