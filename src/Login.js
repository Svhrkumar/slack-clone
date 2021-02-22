import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
	const [state, dispatch] = useStateValue();
	const signIn = (e) => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className='login'>
			<div className='login_Container'>
				<img
					src='https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg'
					alt=''
				/>
				<h1>Sigin in to Rk pixels</h1>
				<p>rk pixels</p>
				<Button onClick={signIn}>Sign In with Google</Button>
			</div>
		</div>
	);
};

export default Login;
