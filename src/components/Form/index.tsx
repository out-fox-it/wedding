import React from 'react'
import './index.scss'

export const Form: React.FC = () => (
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
)

export default Form
