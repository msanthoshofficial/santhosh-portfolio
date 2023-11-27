export const Contact = () => {
	return (
		<form>
			<header className="footer-title">Contact Form</header>
			<fieldset className="form-control w-80 grid gap-4">
				<input
					type="email"
					placeholder="user@email.com"
					className="input input-bordered input-accent w-full input-md"
				/>
				<textarea
					className="textarea textarea-accent"
					placeholder="message"
				></textarea>
				<button className="btn btn-active btn-accent btn-wide">
					Contact
				</button>
			</fieldset>
		</form>
	);
};
