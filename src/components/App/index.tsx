import React from 'react'

import logo from './logo.svg'
import './index.scss'

export const App: React.FC = () => {
	const pageTitle = 'WeddinG'

	return (
		<>
			<header>
				<h1>{pageTitle}</h1>
				<img src={logo} className="header__logo" alt="logo" />
			</header>
			<nav>
				{/* TODO */}
				<ul>
					<li>
						<a href="#">WEDDING DATE</a>
					</li>
					<li>
						<a href="#">GUEST FORM</a>
					</li>
					<li>
						<a href="#">GUEST LIST</a>
					</li>
					<li>
						<a href="#">SONG LIST</a>
					</li>
					<li>
						<a href="#">ADMIN PAGE</a>
					</li>
					<li>
						<a href="#">BUDGET FEATURE</a>
					</li>
					<li>
						<a href="#">FIREBASE</a>
					</li>
				</ul>
				{/* DONE */}
				<ul>
					<li>BASIC SET-UP AND DESIGN LOL</li>
				</ul>
			</nav>
			<section className="content">
				<p>~ PAGE CONTENT ~</p>
			</section>
			<footer>
				<h1>{pageTitle}</h1>
			</footer>
		</>
	)
}
