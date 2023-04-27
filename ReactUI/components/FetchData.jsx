import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
	const [articles, setArticles] = useState([]);
	const [articless, setArticless] = useState([]);
	const [id, setId] = useState(1);
	useEffect(() => {
		// const getData = async () => {
		// 	const get = await fetch("https://jsonplaceholder.typicode.com/posts");
		// 	const res = await get.json();
		// 	setArticless(res);
		// };
		// getData();

		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((resp) => {
				setArticles(resp.data);
			})
			.catch((error) => console.log(error));
	}, [id]);
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			{id}
			{articles.title}
		</div>
	);
};

export default FetchData;
