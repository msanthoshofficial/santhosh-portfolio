import "./App.css";
import { Suspense } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Footer } from "./components/Footer";

function App() {
	return (
		<div className="bg-base-200">
			<Header />
			<Hero />
			<Suspense>
				<Showcase />
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
