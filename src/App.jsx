import './App.scss';
import { useQuery } from 'react-query';
import axios from 'axios';

const techBooksUrl = 'http://localhost:4222/techBooks';

const getTechBooks = async () => (await axios.get(techBooksUrl)).data;

function App() {
	const __techBooks = useQuery('techBooks', getTechBooks);

	return (
		<div className="App">
			<h1>Info Site</h1>

			{__techBooks.error && (
				<div className="error">Error: {__techBooks.error.message}</div>
			)}
			{__techBooks.isLoading && (
				<div className="isLoading">Loading...</div>
			)}

			{__techBooks.status === 'success' && (
				<div className="content">
					{__techBooks.data.map((techBook, index) => {
						return (
							<div key={index} className="techBook">
								<div className="title">{techBook.title}</div>
							</div>
						);
					})}
				</div>
			)}
			<pre>{JSON.stringify(__techBooks, null, 2)}</pre>
		</div>
	);
}

export default App;
