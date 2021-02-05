import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'title one', body: 'lorem ipsum...one', author: 'mario', id: 1 },
		{ title: 'title two', body: 'body two...', author: 'yoshi', id: 2 },
		{ title: 'title three', body: 'body three...', author: 'mario', id: 3 },
	]);

	const [name, setName] = useState('mario');

	const handleDelete = id => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log('use effect ran');
		console.log(name);
	});

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />
			<button onClick={() => setName('luigi')}>Change Name</button>
			<p>{name}</p>
		</div>
	);
};

export default Home;
