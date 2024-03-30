import "./Companies.css";
import { useState, useEffect } from "react";
import service from "../../api/service";
import { Link } from "react-router-dom";

function CompaniesListing() {
	const [companies, setCompanies] = useState([]);

	// Run the effect after the initial render to get a list of movies from the server
	useEffect(() => {
		service
			.getCompanies()
			.then((data) => {
				console.log("data", data);
				setCompanies(data);
				console.log(companies);
			})
			.catch((err) => console.log(err));
	}, []); //  <-- This effect will run only once, after the initial render

	return (
		<div className="companies-listing-container">
			<h2>Listed Companies</h2>
			<div>
				{companies &&
					companies.map((company) => (
						<div className="company-info" key={company._id}>
							<div className="title">
								<h3>{company.name}</h3>
							</div>
							{/* <img src={movie.imageUrl} alt="movie" width="200" /> */}
							<div className="description">
								<p>{company.description}</p>
							</div>
							<div className="email">
								<p>{company.email}</p>
							</div>
						</div>
					))}
			</div>
			<Link className="button button_add" to="/companies/add">
				<span>+</span>
			</Link>
		</div>
	);
}

export default CompaniesListing;
