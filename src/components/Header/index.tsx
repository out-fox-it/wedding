import React from 'react'

import './index.scss'

export const Header: React.FC = () => {
	const date = 'XX. XX. 2023'
	const address = {
		street: 'Šárovcova',
		building: [794, 1206],
		town: 'Třebechovice pod Orebem',
		postalCode: '503 46',
	}

	return (
		<header>
			<h1 className="wedding">WeddinG</h1>
			<section className="header__containers">
				<article className="container__content">
					<h3>WHERE?</h3>
					<span
						className="address italic-text address-animation"
						data-address-1={address.street + ' ' + address.building[0]}
						data-address-2={`${address.street} ${address.building[1]}`}
						title="Both addresses are valid and lead to the same house! :) No. 794 is a bit easier to spot."
					></span>
					<span className="address italic-text">{address.town}</span>
					<span className="address italic-text">{address.postalCode}</span>

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
