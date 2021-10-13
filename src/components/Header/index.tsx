import React from 'react'

import './index.scss'

export const Header: React.FC = () => {
	const date = 'XX. XX. 2022'
	const address = ['Šárovcova 1206', 'Třebechovice pod Orebem', '503 46']

	return (
		<header>
			<h1 className="wedding">WeddinG</h1>
			<section className="header__containers">
				<article className="container__content">
					<h3>WHERE?</h3>
					<span className="address italic-text">{address[0]}</span>
					<span className="address italic-text">{address[1]}</span>
					<span className="address italic-text">{address[2]}</span>

					{/* TODO: Add links content! */}
					<div className="container__links">
						<a href="#">MAP</a>
						<a href="#">PARKING</a>
						<a href="#">HOTELS</a>
					</div>
				</article>

				<article className="container__content">
					<div className="container__icon"></div>
					<h3>WE&#39;RE GETTING MARRIED!</h3>
					<span className="date">{date}</span>
				</article>

				<article className="container__content">
					<span className="italic-text">
						TO CONFIRM YOU&#39;LL ATTEND, PLEASE FILL IN THE FORM
					</span>

					<div className="button">NEW GUEST</div>
					<div className="button button__login">
						<span className="button__text">LOG IN</span>
					</div>
				</article>
			</section>
			<section className="header__logo"></section>
		</header>
	)
}

export default Header
