import image from "../assets/pic.png";
export const Hero = () => {
	return (
		<section>
			<div className="hero bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img src={image} className="max-w-sm rounded-lg" />
					<div>
						<h1 className="text-5xl font-bold">Hi I'm Santhosh!</h1>
						<p className="py-6">
							Highly skilled Full-Stack Developer with expertise
							in Frontend and Backend technologies, combining
							innovative problem-solving with a passion for
							building cutting-edge web applications. Experienced
							in data processing and cloud-based solutions, with a
							track record of delivering robust and user-friendly
							software.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</section>
	);
};
