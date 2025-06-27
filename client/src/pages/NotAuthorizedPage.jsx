const NotAuthorizedPage = () => (
	<div style={{ textAlign: "center", padding: "2rem" }}>
		<h1>🚫 Not Authorized</h1>
		<p>You do not have permission to view this page.</p>
		<a href="/login.jsx">Go back to Dashboard</a>
	</div>
);

export default NotAuthorizedPage;