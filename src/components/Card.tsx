import { Todo } from "../assets/images";

export const Card = () => {
	return (
		<div className="card  text-neutral-content">
			<div className="flex flex-col md:flex-row justify-between gap-4">
				<div className="mockup-browser w-full md:w-1/2 border bg-base-300">
					<div className="mockup-browser-toolbar">
						<div className="input">https://daisyui.com</div>
					</div>
					<div className="flex justify-center px-4 py-16 bg-base-200">
						<img src={Todo} alt="img" className="rounded-lg" />
						{/* <iframe src="https://todo-jade-psi.vercel.app/"></iframe> */}
					</div>
				</div>

				<div className="w-full md:w-1/2 px-8">
					<h2 className="text-4xl font-bold">Project 1</h2>
					<p className="my-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis a ipsam laboriosam harum perferendis repellat
						eius quasi error sunt esse autem officia explicabo
						obcaecati, vel dolore? Facere odit illum consectetur.
					</p>
				</div>
			</div>
		</div>
	);
};
