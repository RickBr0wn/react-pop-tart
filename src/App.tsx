import { memo, useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import PopTart from './components/Button/PopTart/PopTart'

export type _PopTart = {
	id: number
	title: string
	description: string
	buttonText: string
	backgroundColor: string
}

function App() {
	return (
		<div>
			<Toast />
		</div>
	)
}

export default App

// Path: src/App.module.css
