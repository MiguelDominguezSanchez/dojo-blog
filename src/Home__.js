import { useState } from 'react';
import BlogList from './BlogList__';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new site', body: 'lorem ipsum', author: 'mario', id: 1 },
		{ title: 'dolor sit amet', body: 'lorem ipsum', author: 'yoshi', id: 12 },
		{ title: 'consectetur', body: 'lorem ipsum', author: 'mario', id: 3 },
	]);

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs !" />
		</div>
	);
};

export default Home;
