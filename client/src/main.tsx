import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import themeOptions from './utils/helpers/theme'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './styles/index.scss'
import GlobalAlert from './components/utils/GlobalAlert'

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(
	<React.StrictMode>
		<ThemeProvider theme={themeOptions}>
			<Router>
				<App />
				<GlobalAlert />
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)
