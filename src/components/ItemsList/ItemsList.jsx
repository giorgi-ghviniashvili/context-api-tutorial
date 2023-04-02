import { useAppContext } from '../../context/context'

const ItemsList = () => {
	const {
		state: { items },
	} = useAppContext()

	return items.map((item, i) => (
		<div key={i} className='item'>
			{i + 1}. {item}
		</div>
	))
}

export default ItemsList
