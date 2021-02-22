import React from 'react';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className='app'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className='app_body'>
							<SideBar />
							<Switch>
								<Route path='/room/:roomId'>
									<Chat />
								</Route>
								<Route path='/'></Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
