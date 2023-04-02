import { createContext, useContext, useReducer } from 'react'

export const ACTIONS = {
	REMOVE: 'REMOVE',
	ADD: 'ADD',
	LOGIN: 'LOGIN',
}

const appState = {
	items: ['name', 'giorgi'],
	username: '',
}

const reducer = (state = appState, action) => {
	const type = action.type

	switch (type) {
		case ACTIONS.REMOVE: {
			const index = action.payload.index

			// clone array
			const itemsClone = [...state.items]

			// define index
			const valueIndex = index - 1

			// if element exists
			if (itemsClone[valueIndex]) {
				itemsClone.splice(valueIndex, 1)
			}

			return {
				...state,
				items: itemsClone,
			}
		}

		case ACTIONS.ADD:
			return {
				...state,
				items: [...state.items, action.payload],
			}

		case ACTIONS.LOGIN: {
			return {
				...state,
				username: action.payload,
			}
		}

		default:
			return state
	}
}

const context = createContext(appState)

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, appState)
	const Provider = context.Provider
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export const useAppContext = () => {
	return useContext(context)
}
