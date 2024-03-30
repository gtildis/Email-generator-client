// pages/AddCompany/AddCompany.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import service from "../../api/service";

function AddCompany() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	// ******** this method handles the file upload ********
	/*
	///////// Maybe in the future
	
	const handleFileUpload = (e) => {
		// console.log("The file to be uploaded is: ", e.target.files[0]);

		const uploadData = new FormData();

		// imageUrl => this name has to be the same as in the model since we pass
		// req.body to .create() method when creating a new movie in '/api/movies' POST route
		uploadData.append("imageUrl", e.target.files[0]);

		service
			.uploadImage(uploadData)
			.then((response) => {
				// console.log("response is: ", response);
				// response carries "fileUrl" which we can use to update the state
				setImageUrl(response.fileUrl);
			})
			.catch((err) => console.log("Error while uploading the file: ", err));
	};
*/
	// ********  this method submits the form ********
	const handleSubmit = (e) => {
		e.preventDefault();

		service
			.createCompany({ name, description, email })
			.then((res) => {
				// console.log("added new movie: ", res);

				// Reset the form
				setName("");
				setDescription("");
				setEmail("");

				// navigate to another page
				navigate("/");
			})
			.catch((err) => console.log("Error while adding the new Company: ", err));
	};

	return (
		<div>
			<h2>New Company</h2>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label>Description</label>
				<textarea
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<label>Email</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				{/* <input type="file" onChange={(e) => handleFileUpload(e)} /> */}

				<button type="submit">Save</button>
			</form>
		</div>
	);
}

export default AddCompany;
