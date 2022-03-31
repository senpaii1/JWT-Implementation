import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
	const history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [password, setPassword] = useState('');

	async function registerUser(event) {
		event.preventDefault();

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				phone,
				address,
				password,
			}),
		});

		const data = await response.json();

		if (data.status === 'ok') {
			history.push('/login');
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
					type="text"
					placeholder="First Name"
				></input>

				<br />
				<input
					value={lastName}
					onChange={e => setLastName(e.target.value)}
					type="text"
					placeholder="Last Name"
				></input>
				<br />
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				></input>
				<br />
				<input
					value={phone}
					onChange={e => setPhone(e.target.value)}
					type="number"
					placeholder="Phone No"
				></input>
				<br />
				<input
					value={address}
					onChange={e => setAddress(e.target.value)}
					type="text"
					placeholder="Address"
				></input>
				<br />
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				></input>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

export default App;
