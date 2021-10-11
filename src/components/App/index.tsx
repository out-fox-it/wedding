import React from 'react'

import './index.scss'

export const App: React.FC = () => {
	const pageTitle = 'WeddinG'
	const date = 'XX. XX. 2022'
	const address = ['Šárovcova 1206', 'Třebechovice pod Orebem', '503 46']

	return (
		<>
			<header>
				<h1 className="wedding">{pageTitle}</h1>
				<section className="header__containers">
					<article className="container__content">
						<h3>WHERE?</h3>
						<span className="address italic-text">{address[0]}</span>
						<span className="address italic-text">{address[1]}</span>
						<span className="address italic-text">{address[2]}</span>

						{/* TODO: Add links content! */}
						{/* TODO: Switch | to borders */}
						<div className="container__links">
							| <a href="#">MAP</a> | <a href="#">PARKING</a> |{' '}
							<a href="#">HOTELS</a> |
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
						<a href="#">PASSWORD ACCESS</a>
					</li>
					<li>
						<a href="#">BUDGET FEATURE</a>
					</li>
					<li>
						<a href="#">FIREBASE</a>
					</li>
					<li>
						<a href="#">CZ / ENG TEXTS</a>
					</li>
					<li>
						<a href="#">PLANNING PAGE</a>
					</li>
					<li>
						<a href="#">MAP, PARKING, HOTELS</a>
					</li>
					<li>
						<a href="#">MORE PHOTOS</a>
					</li>
				</ul>
				{/* DONE */}
				<ul>
					<li>BASIC SET-UP AND DESIGN LOL</li>
				</ul>
			</nav>

			<section className="content">
				<h2>PAGE CONTENT</h2>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus, nam
					dolor doloremque quos, possimus eaque odio non saepe impedit vero esse
					beatae nisi vitae veritatis eum dolores quaerat eos. Illo molestiae ut
					ipsa, sit accusamus numquam. Libero repellat architecto praesentium
					quisquam delectus pariatur vitae sequi minima mollitia? Optio, omnis?
					Autem molestias maxime corrupti eius illum labore tempora consectetur
					quisquam. Aliquid totam quidem a, iure in nihil pariatur voluptatem
					aspernatur atque tempore nostrum vitae sapiente unde dolores
					voluptatibus autem ea suscipit porro fuga architecto voluptate esse!
					Minima, quasi ipsum. Culpa.
				</p>

				<h2>SOME HEADLINE</h2>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus, nam
					dolor doloremque quos, possimus eaque odio non saepe impedit vero esse
					beatae nisi vitae veritatis eum dolores quaerat eos. Illo molestiae ut
					ipsa, sit accusamus numquam. Libero repellat architecto praesentium
					quisquam delectus pariatur vitae sequi minima mollitia? Optio, omnis?
					Autem molestias maxime corrupti eius illum labore tempora consectetur
					quisquam. Aliquid totam quidem a, iure in nihil pariatur voluptatem
					aspernatur atque tempore nostrum vitae sapiente unde dolores
					voluptatibus autem ea suscipit porro fuga architecto voluptate esse!
					Minima, quasi ipsum. Culpa.
				</p>

				{/* INPUT DESIGN TEMPLATE */}
				<form>
					<label>
						<input type="text" placeholder="NAME:" />
					</label>
					<label>
						<input type="text" placeholder="PASSWORD:" />
					</label>
					<label>
						<input type="text" placeholder="SOMETHING:" />
					</label>
					<label>
						<textarea placeholder="LONG ANSWER:" />
					</label>
					<label>
						<input type="text" placeholder="SHORT ANSWER:" />
					</label>
					<label>
						<input className="button" type="button" value="SUBMIT" />
					</label>
				</form>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus, nam
					dolor doloremque quos, possimus eaque odio non saepe impedit vero esse
					beatae nisi vitae veritatis eum dolores quaerat eos. Illo molestiae ut
					ipsa, sit accusamus numquam. Libero repellat architecto praesentium
					quisquam delectus pariatur vitae sequi minima mollitia? Optio, omnis?
					Autem molestias maxime corrupti eius illum labore tempora consectetur
					quisquam. Aliquid totam quidem a, iure in nihil pariatur voluptatem
					aspernatur atque tempore nostrum vitae sapiente unde dolores
					voluptatibus autem ea suscipit porro fuga architecto voluptate esse!
					Minima, quasi ipsum. Culpa.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus, nam
					dolor doloremque quos, possimus eaque odio non saepe impedit vero esse
					beatae nisi vitae veritatis eum dolores quaerat eos. Illo molestiae ut
					ipsa, sit accusamus numquam. Libero repellat architecto praesentium
					quisquam delectus pariatur vitae sequi minima mollitia? Optio, omnis?
					Autem molestias maxime corrupti eius illum labore tempora consectetur
					quisquam. Aliquid totam quidem a, iure in nihil pariatur voluptatem
					aspernatur atque tempore nostrum vitae sapiente unde dolores
					voluptatibus autem ea suscipit porro fuga architecto voluptate esse!
					Minima, quasi ipsum. Culpa.
				</p>
			</section>

			<footer>
				<div className="wedding">{pageTitle}</div>
			</footer>
		</>
	)
}
