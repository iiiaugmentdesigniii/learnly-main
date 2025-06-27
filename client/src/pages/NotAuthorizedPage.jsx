// const NotAuthorizedPage = () => (
// 	<div style={{ textAlign: "center", padding: "2rem" }}>
// 		<h1>🚫 Not Authorized</h1>
// 		<p>You do not have permission to view this page.</p>
// 		<a href="/">Go back to Dashboard</a>
// 	</div>
// );

// export default NotAuthorizedPage;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorizedPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("/");
		}, 3000); // Redirect after 3 seconds

		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<div style={{ textAlign: "center", padding: "2rem" }}>
			<h1>🚫 Not Authorized2</h1>
			<p>You do not have permission to view this page.</p>
			<p>Redirecting to Dashboard...</p>
			<a href="/">Click here if not redirected</a>
		</div>
	);
};

export default NotAuthorizedPage;