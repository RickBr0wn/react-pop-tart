import { FC, useEffect, useState } from 'react'
import { _PopTart } from '../../../App'
import clg from '../../../clg'
import styles from './PopTart.module.css'

type Props = {
	position: string
	popTartType: 'success' | 'warning'
}

const providePopTartProperties = (popTartType: string): _PopTart => {
	switch (popTartType) {
		case 'success':
			return {
				id: 1,
				title: 'title',
				description: 'The requested action has completed successfully.',
				buttonText: 'OK',
				backgroundColor: 'green'
			}
		case 'warning':
			return {
				id: 2,
				title: 'title',
				description: 'description',
				buttonText: 'OK',
				backgroundColor: 'green'
			}
		default:
			throw new Error('Correct PopTartType must be used.')
	}
}

const PopTart: FC<Props> = ({ position, popTartType }) => {
	const popTart = providePopTartProperties(popTartType)
	const [postion, setPosition] = useState({ x: 20, y: -1000 })

	useEffect(() => {
		setPosition({ x: 20, y: 200 })
		const currentTimeout = setTimeout(
			() => setPosition({ x: 20, y: -1000 }),
			2000
		)
		return () => {
			if (currentTimeout) {
				clearTimeout(currentTimeout)
			}
		}
	}, [])

	return (
		<div
			className={styles['pop-tart-outer-container']}
			style={{
				backgroundColor: popTart.backgroundColor,
				top: postion.y,
				left: postion.x
			}}
		>
			<div className={styles['pop-tart-header']}>
				<div className={styles['pop-tart-title']}>Success!</div>
				<div className={styles['pop-tart-button']}>X</div>
			</div>
			<p className={styles['pop-tart-description']}>{popTart.description}</p>
		</div>
	)
}

export default PopTart

// Path: src/components/Button/PopTart/PopTart.module.css
