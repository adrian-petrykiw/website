import styles from '../styles/Layout.module.css'
import { Header, Footer } from '.'

const Layout = ({ children }) => {
	return (
		<div className={styles.layoutContainer}>
			<Header/>
			<div className={styles.contentContainer}>
				{children}
			</div>
			<Footer/>
		</div>
	)
}

export default Layout;