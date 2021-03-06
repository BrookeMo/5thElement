import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Attractions from "./pages/Attractions";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import MapView from "./pages/MapView";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


const App = () => (

	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Hotels" component={Hotels} />
				<Route exact path="/Activities" component={Attractions} />
				<Route exact path="/Reviews" component={Reviews} />
				<Route exact path="/Blog" component={Blog} />
				<Route exact path="/Map" component={MapView} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default App;
