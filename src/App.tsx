import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Footer } from "./components/Footer";

function App() {
	return (
		<div className="bg-base-200">
			<Header />
			<Hero />
			<Showcase />
			<Footer />
		</div>
	);
}

export default App;
