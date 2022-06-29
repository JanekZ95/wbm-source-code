import "./App.css";
import {
	BrowserRouter,
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Movies from "./Components/Pages/Movies";
import Search from "./Components/Pages/Search";

function App() {
	const update = ({
		basename: process.env.PUBLIC_URL,
	});

	const store = ({ update });

	return (
		<>
			<Router store={store}>
				<Navbar />
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition key={location.key} timeout={300} classNames="fade">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/Search" component={Search} />
									<Route path="/movies" component={Movies} />
									<Route path="/About" component={About} />
									<Route path="/Contact" component={Contact} />
									<Redirect to="/" />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			</Router>
		</>
	);
}

export default App;
