import "./Companies.css";
import { useState, useEffect } from "react";
import service from "../../api/service";

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
			<h2>Companies</h2>
			<div>
				{companies &&
					companies.map((company) => (
						<div className="company-info" key={company._id}>
							<p>{company.name}</p>
							{/* <img src={movie.imageUrl} alt="movie" width="200" /> */}
							<p>{company.description}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default CompaniesListing;
