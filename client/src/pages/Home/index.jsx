import styles from "./styles.module.css";

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`http://localhost:8080/auth/logout`, "_self");
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Home</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/profile.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className={styles.profile_img}
					/>
					<input
						type="text"
						defaultValue={user.name}
						className={styles.input}
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className={styles.input}
						placeholder="Email"
					/>
					<button className={styles.btn} onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
			<h1>
				<a href="https://vipin-ecommerce-like.netlify.app/" target="_blank">Ecommerce</a>
			</h1>
			<h1>
				<a href="https://vipin-quotes.netlify.app/" target="_blank">Quote Reader</a>
			</h1>
		</div>
	);
}

export default Home;
