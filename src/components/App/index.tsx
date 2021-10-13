import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from 'pages/Home'

// Global Styles
import './index.scss'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => <Routes />

export default App
