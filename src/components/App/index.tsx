import React from 'react'

import logo from './logo.svg'
import './index.scss'

export const App: React.FC = () => {
	const pageTitle = 'WeddinG'

	return (
		<>
			<header>
				<h1 className="wedding">{pageTitle}</h1>
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
