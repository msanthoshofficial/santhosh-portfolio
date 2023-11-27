import { Card } from "./Card";
import { Todo } from "../assets/images";
export const Showcase = () => {
	const Description =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsa reiciendis voluptate reprehenderit. Sit voluptate quo quia saepe accusamus odio mollitia dicta fugit cum vero nemo, harum impedit, reprehenderit officiis.";
	return (
		<section>
			<div className="grid grid-cols-1 m-8 md:m-24 gap-10">
				<Card
					Image={Todo}
					Interactive={true}
					Title="Todo App"
					Description={Description}
					Site_URL={new URL("https://todo-jade-psi.vercel.app/")}
					Github_URL={
						new URL("https://github.com/msanthoshofficial/TODO")
					}
				></Card>
				<Card
					Image={Todo}
					Interactive={true}
					Title="Password Generator"
					Description={Description}
					Site_URL={
						new URL(
							"https://password-generator-one-sage.vercel.app/"
						)
					}
					Github_URL={
						new URL(
							"https://github.com/msanthoshofficial/password-generator"
						)
					}
				></Card>
				<Card
					Image={Todo}
					Interactive={true}
					Title="Hero Page"
					Description={Description}
					Site_URL={new URL("https://react-hero-zeta.vercel.app/")}
					Github_URL={
						new URL(
							"https://github.com/msanthoshofficial/ReactRouter"
						)
					}
				></Card>
				<Card
					Image={Todo}
					Interactive={true}
					Title="Currency Converter"
					Description={Description}
					Site_URL={
						new URL(
							"https://currency-converter-two-gamma.vercel.app/"
						)
					}
					Github_URL={
						new URL(
							"https://github.com/msanthoshofficial/currency-converter"
						)
					}
				></Card>
				<Card
					Image={Todo}
					Interactive={true}
					Title="E-Commerce App"
					Description={Description}
					Site_URL={
						new URL(
							"https://e-commerce-app-santhoshs-projects-0d2a08dd.vercel.app/"
						)
					}
					Github_URL={
						new URL(
							"https://github.com/msanthoshofficial/e-commerce"
						)
					}
				></Card>
			</div>
		</section>
	);
};
