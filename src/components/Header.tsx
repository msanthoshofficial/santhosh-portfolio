import logo from "../assets/logo.png";

export const Header = () => {
	return (
		<div className="navbar  flex flex-row items-center justify-between px-8">
			<a className="btn btn-ghost text-3xl">
				<img src={logo} alt="portfolio" width={30} height={30} />
			</a>
			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="btn m-1">
					Theme
					<svg
						width="12px"
						height="12px"
						className="h-2 w-2 fill-current opacity-60 inline-block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 2048 2048"
					>
						<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
					</svg>
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
				>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
							aria-label="Default"
							value="default"
						/>
					</li>
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
							aria-label="Cmyk"
							value="cmyk"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
