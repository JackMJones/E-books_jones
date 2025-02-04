import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import useSpinner from './store/spinner'
import Spinner from './components/utils/Spinner'
import HomePage from './pages/Home/HomePage'
import LoginModal from './pages/Login/LoginModal'
import Register from './pages/Register/RegisterPage'
import AdminPage from './pages/ReactAdmin/Admin'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFoundPage from './components/utils/404'
import CartPage from './pages/Cart/CartPage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import OrdersConfirmationPage from './pages/Orders/OrdersConfirmationPage'
import OrderDetailsPage from './pages/Orders/OrderDetailsPage'
import FaqPage from './pages/Faq/FaqPage'
import ContactsPage from './pages/Contacts/ContactsPage'
import AboutPage from './pages/About/AboutPage'
import PopularPage from './pages/Popular/PopularPage'
import CatalogPage from './pages/Catalog/CatalogPage'
import ScrollTop from './components/ScrollTop/BackToTop'
import Return from './pages/Checkout/Return'
import WishlistPage from './pages/Wishlist/WishlistPage'

const App = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const { isLoading } = useSpinner()
	let location = useLocation()

	useEffect(() => {
		let isAdminLocation = location.pathname?.toLowerCase().includes('admin')
		setIsAdmin(isAdminLocation)
	}, [location])

	return (
		<>
			{!isAdmin && <Header />}
			{!isAdmin && <ScrollTop />}
			{isLoading && <Spinner />}
			<LoginModal />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/catalog/*' element={<CatalogPage />} />
				<Route path='/admin/*' element={<AdminPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/checkout' element={<CheckoutPage />} />
				<Route path='/success' element={<Return />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/orders' element={<OrdersConfirmationPage />} />
				<Route path='/orders/:id' element={<OrderDetailsPage />} />
				<Route path='/popular' element={<PopularPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/faq' element={<FaqPage />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFoundPage />} />
				{/* <Route path="/profile" element={<ProfilePage />} /> */}
				<Route path='/wishlist' element={<WishlistPage />} />
			</Routes>

			{!isAdmin && <Footer />}
		</>
	)
}

export default App
