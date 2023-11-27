import { Card } from "./Card";

export const Showcase = () => {
	return (
		<section>
			<div className="grid grid-cols-1 m-8 gap-8">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};
