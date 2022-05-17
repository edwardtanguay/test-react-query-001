import './App.scss';
import { useQuery } from 'react-query';
import axios from 'axios';

const techBooksUrl = 'http://localhost:4222/techBooks';

function App() {
	const { data:techBooks, error, isLoading } = useQuery(
		'techBooks',
		async () => (await axios.get(techBooksUrl)).data
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

			{!error && !isLoading && techBooks.length > 0 && (
				<div className="content">
					{techBooks.map((techBook, index) => {
						return (
							<div key={index} className="techBook">
								<div className="title">{techBook.title}</div>
							</div>
						)
					})}

				</div>
			)}
			<pre>
						{JSON.stringify(techBooks, null, 2)}
					</pre>
		</div>
	);
}

export default App;
