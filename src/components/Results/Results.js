import React from "react";
import "./Results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquarePollVertical,
	faHippo,
	faCreditCard,
	faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import JoelImg from "../../assets/images/Joel.jpg";

function Results() {
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
								<text className="globalTotalsText">25 Eaters</text>
							</li>
							<li className="globalTotalsRow">
								<FontAwesomeIcon style={iconStyle2} icon={faCreditCard} />
								<text className="globalTotalsText">$1,523.66 Spent</text>
							</li>
							<li className="globalTotalsRow">
								<FontAwesomeIcon
									style={iconStyle2}
									icon={faMoneyBillTransfer}
								/>
								<text className="globalTotalsText">$60.95 Per Eater</text>
							</li>
						</ul>
					</div>
					<div className="breakdownByFamilyArea">
						<text className="outputAreaHeader">Breakdown By Person</text>
						<ul className="personBreakdownList">
              <li className="personBreakdownListItem">
                    <img className="listAvatar" src={JoelImg}></img>
                    <text className="personName">Joel</text>
                    <li className="breakdownPersonData">6 eaters</li>
                    <li className="breakdownPersonData">spent $220.75</li>
                    <li className="breakdownPersonData">owes $30.72</li>
              </li>
              <li className="personBreakdownListItem">
                    <img className="listAvatar" src={JoelImg}></img>
                    <text className="personName">Joel</text>
                    <li className="breakdownPersonData">6 eaters</li>
                    <li className="breakdownPersonData">spent $220.75</li>
                    <li className="breakdownPersonData">owes $30.72</li>
              </li>
              <li className="personBreakdownListItem">
                    <img className="listAvatar" src={JoelImg}></img>
                    <text className="personName">Joel</text>
                    <li className="breakdownPersonData">6 eaters</li>
                    <li className="breakdownPersonData">spent $220.75</li>
                    <li className="breakdownPersonData">owes $30.72</li>
              </li>
              <li className="personBreakdownListItem">
                    <img className="listAvatar" src={JoelImg}></img>
                    <text className="personName">Joel</text>
                    <li className="breakdownPersonData">6 eaters</li>
                    <li className="breakdownPersonData">spent $220.75</li>
                    <li className="breakdownPersonData">owes $30.72</li>
              </li>
            </ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Results;
