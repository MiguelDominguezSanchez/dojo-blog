import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'title one', body: 'body one...', author: 'mario', id: 1 },
		{ title: 'title two', body: 'body two...', author: 'yoshi', id: 2 },
		{ title: 'title three', body: 'body three...', author: 'mario', id: 3 },
	]);

	const handleDelete = id => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	};

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />
		</div>
	);
};

export default Home;
