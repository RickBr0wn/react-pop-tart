import { FC, ReactNode } from 'react'
import styles from './Button.module.css'

type Props = {
	children: ReactNode
	handleClick: () => void
}

const Button: FC<Props> = ({ children, handleClick }) => {
	return (
		<button onClick={handleClick} className={styles.button} type='button'>
			{children}
		</button>
	)
}

export default Button

// Path: src/components/Button/Button.module.css
