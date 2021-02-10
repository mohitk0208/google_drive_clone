import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>

					{/* Drive */}
					<PrivateRoute exact path="/" component={Dashboard} />

					{/* Profile */}
					<PrivateRoute  path="/user" component={Profile} />
					<PrivateRoute path="/update-profile" component={UpdateProfile} />

					{/* Auth */}
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/forgot-password" component={ForgotPassword} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
