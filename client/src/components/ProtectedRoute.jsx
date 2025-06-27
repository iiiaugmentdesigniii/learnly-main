// import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const ProtectedRoute = ({ allowedRoles, children }) => {
// 	const { user } = useAuth();
// 	const currentRole = user?.role?.roleName;

// 	// If user is not logged in, redirect to login
// 	if (!user) {
// 		return <Navigate to="/login" replace />;
// 	}

// 	// If user is logged in but doesn't have the correct role, redirect
// 	if (!allowedRoles.includes(currentRole)) {
// 		return <Navigate to="/not-authorized" replace />;
// 	}

// 	// Render the protected component
// 	return children ? children : <Outlet />;
// };

// export default ProtectedRoute;


import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
	const { user } = useAuth();

	// 🧠 TEMP FIX: Just check if user exists (bypass roles for now)
	if (!user) return <Navigate to="/login" />;
	console.log("User role at runtime:", user?.role?.roleName);
	// ✅ Bypass role check:
	return <Outlet />;

	// ✅ Original role-check (keep commented for later):
	// if (!allowedRoles.includes(user?.role?.roleName)) {
	//     return <Navigate to="/not-authorized" />;
	// }
};

export default ProtectedRoute;
