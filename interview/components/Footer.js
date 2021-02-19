import FooterStyles from '../styles/footer.module.css';

export default function Footer() {
	return (
		<footer className={`${FooterStyles.footer} ${FooterStyles.py4}`}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 text-lg-left">
						Copyright © Your Website {new Date().getFullYear()}
					</div>
					<div className="col-lg-4 my-3 my-lg-0">
						<a className="btn btn-dark btn-social mx-2" href="#!">
							<i className="fab fa-twitter"></i>
						</a>
						<a className="btn btn-dark btn-social mx-2" href="#!">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a className="btn btn-dark btn-social mx-2" href="#!">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
					<div className="col-lg-4 text-lg-right">
						<a className="mr-3" href="#!">Privacy Policy</a>
						<a href="#!">Terms of Use</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
