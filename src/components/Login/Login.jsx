import { useState } from "react"
import { ACTIONS, useAppContext } from "../../context/context"

const Login = () => {
  const [value, setValue] = useState('')

  const { dispatch } = useAppContext()

  const handleLogin = () => {
    dispatch({
      type: ACTIONS.LOGIN,
      payload: value
    })
  }

	return (
		<div className='input-wrap'>
			<input className='input' value={value} onChange={e => setValue(e.target.value)} />
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}

export default Login
