type Props = {
	Title: string;
	Interactive: boolean;
	Description: string;
	Image: string;
	Site_URL: URL;
	Github_URL: URL;
};

export const Card = ({
	Title,
	Interactive,
	Description,
	Image,
	Site_URL,
	Github_URL,
}: Props) => {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-8">
			<div className="mockup-browser w-full md:w-1/2 border bg-base-300">
				<div className="mockup-browser-toolbar">
					<div className="input hover:text-accent cursor-pointer">
						{Site_URL.href}
					</div>
				</div>
				<div className="flex justify-center  bg-base-200">
					{Interactive ? (
						<iframe
							src={Site_URL.href}
							className="border-0 block h-[40vh] w-full"
						></iframe>
					) : (
						<img src={Image} alt="img" className="rounded-lg" />
					)}
				</div>
			</div>

			<div className="w-full md:w-1/2 px-0 md:px-8 my-8 md:my-0">
				<div className="flex items-center gap-4">
					<h2 className="text-4xl font-bold">{Title}</h2>
					{Interactive ? (
						<div className="badge badge-accent badge-outline">
							interactive
						</div>
					) : (
						<></>
					)}
				</div>
				<p className="my-6 text-lg">{Description}</p>
				<div className="flex gap-2">
					<button
						className="btn btn-secondary btn-xs sm:btn-sm md:btn-md "
						onClick={() => {
							console.log(Site_URL);
						}}
					>
						live preview
					</button>
					<button
						className="btn btn-secondary btn-xs sm:btn-sm md:btn-md "
						onClick={() => {
							console.log(Github_URL);
						}}
					>
						code base
					</button>
				</div>
			</div>
		</div>
	);
};
