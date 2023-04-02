import { useState } from 'react'
import { ACTIONS, useAppContext } from '../../context/context'
import ItemsList from '../ItemsList/ItemsList'
import Login from '../Login/Login'
import RemoveButton from '../RemoveButton/RemoveButton'

const MainPage = () => {
	const {
		dispatch,
		state: { username },
	} = useAppContext()

	const [value, setValue] = useState('')

	const handleAdd = () => {
		dispatch({
			type: ACTIONS.ADD,
			payload: value,
		})
	}

	return (
		<div>
			<div>{username}</div>

			{!username && <Login />}

			{username && (
				<>
					<div className='center-align'>
						<div className='input-wrap'>
							<input className='input' value={value} onChange={e => setValue(e.target.value)} />
							<button onClick={handleAdd}>Add</button>
						</div>

						<div className='items-list-wrap'>
							<ItemsList />
						</div>
					</div>

					<div className='remove-form'>
						<RemoveButton />
					</div>
				</>
			)}
		</div>
	)
}

export default MainPage
