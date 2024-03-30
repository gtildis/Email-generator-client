import CompaniesListing from "../../components/CompaniesListing/Companies";
import "./HomePage.css";

function HomePage() {
	return (
		<div className="home-page">
			<div className="home-page-container">
				<CompaniesListing />
			</div>
		</div>
	);
}

export default HomePage;
