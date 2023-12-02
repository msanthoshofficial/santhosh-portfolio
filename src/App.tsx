import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Analytics mode={"production"} />
			<div className="bg-base-200">
				<Header />
				<Hero />
				<Suspense>
					<Showcase />
				</Suspense>
				<Footer />
			</div>
		</>
	);
}

export default App;
