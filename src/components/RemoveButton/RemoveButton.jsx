import { useState } from 'react'
import { ACTIONS, useAppContext } from '../../context/context'

const RemoveButton = () => {
	const { dispatch, state: { items } } = useAppContext()

	const [value, setValue] = useState('')

	const handleRemove = () => {
		const id = parseInt(value)

		// deletion logic
		if (!isNaN(id)) {
			dispatch({
				type: ACTIONS.REMOVE,
				payload: { index: id }
			})
		}
	}

	return (
		<div>
			<div className='input-wrap'>
				<input className='input' value={value} onChange={e => setValue(e.target.value)} />
				<button onClick={handleRemove}>Remove</button>
			</div>

			{
				JSON.stringify(items)
			}
		</div>
	)
}

export default RemoveButton
