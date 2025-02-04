import { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'

import DashboardLayout from '../../components/Layout/catalog/CatalogLayout'
import LayoutHeader from '../../components/Layout/catalog/LayoutHeader'
import LayoutAside from '../../components/Layout/catalog/LayoutAside'
import CatalogItems from '../../components/Layout/catalog/CatalogItems'
import ItemCard from '../../components/Cards/ItemCard'
import DetailsPage from '../Details/DetailsPage'
import useFiltersStore from '../../store/filters'
import API from '../../utils/constants/api'

const CatalogPage = () => {
	const [items, setItems] = useState([])
	const [categories, setCategories] = useState([])
	const navCategory = useFiltersStore((state) => state.navCategory)
	const params = useParams()
	const type = Object.values(params)[0]?.split('/')[0]

	const setCategoriesForType = useFiltersStore(
		(state) => state[`set${type.charAt(0).toUpperCase() + type.slice(1)}Categories`]
	)

	useEffect(() => {
		const fetchItems = async () => {
			const apiUrl = API[type.toUpperCase()]
			const response = await axios.get(apiUrl)
			const items = response.data
			setItems(items)
			const categories = Array.from(new Set(items.map((item) => item.category)))
			setCategories(categories)
			setCategoriesForType && setCategoriesForType(categories)
		}

		fetchItems()
	}, [type, setCategoriesForType])

	const headerText = {
		books: 'книги',
		textbooks: 'учебници',
		stationery: 'канцелария',
	}[type]

	const Layout = (
		<DashboardLayout
			header={
				<LayoutHeader
					navCategory={navCategory}
					path={`книжарница / ${headerText} / ${navCategory}`}
					hasSorting={true}
					resultCount={items.length}
					title
				/>
			}
			aside={<LayoutAside categories={categories} />}
		>
			<CatalogItems
				items={items}
				CardComponent={ItemCard}
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
					gap: '0.5em',
				}}
			/>
			{/* TODO add children for maybe promotions discounts etc*/}
		</DashboardLayout>
	)

	return (
		<Routes>
			<Route path={`/${type}/${navCategory}`} element={Layout} />
			<Route
				path={`/${type}/${navCategory}/:id`}
				element={
					<DetailsPage path={`книжарница / ${headerText} / ${navCategory}`} type={type} />
				}
			/>
		</Routes>
	)
}

export default CatalogPage
