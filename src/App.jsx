import './App.scss';
import { useQuery } from 'react-query';
import axios from 'axios';

const techBooksUrl = 'http://localhost:4222/techBooks';

function App() {
	const { data, error, isLoading } = useQuery(
		'techBooks',
		async () => await axios.get(techBooksUrl)
	);

	return (
		<div className="App">
			<h1>Info Site</h1>

			{error && (
				<div className="error">Error: {error.message}</div>
			)}
			{isLoading && (
				<div className="isLoading">Loading...</div>
			)}

			{!error && !isLoading && data.data.length > 0 && (
				<div className="content">
					<pre>
						{JSON.stringify(data, null, 2)}
					</pre>
				</div>
			)}
		</div>
	);
}

export default App;
