import { useState, useEffect } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";

function App() {
	const [articles, setArticles] = useState([]);
	const [editArticle, setEditArticle] = useState(null)

	useEffect(() => {
		fetch("http://127.0.0.1:8000/articles/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Token 5488b8907fe6f6fe6577870bda08be24e040415d",
			},
		})
			.then((resp) => resp.json())
			.then((resp) => setArticles(resp))
			.catch((error) => console.log(error));
	}, []);

	const editBtn = (article) => {
		setEditArticle(article)
	}

	const updatedInformation = (article) => {
		const new_article = articles.map(event => {
			if (event.id == article.id) {
				return article
			} else {
				return event
			}
		})
		setArticles(new_article)
	}

	const insertedInformation = (article) => {
		const new_article = [...articles, article]
		setArticles(new_article)
	}

	const deleteBtn = (article) => {
		const new_article = articles.filter(myarticle => {
			if (myarticle.id === article.id) {
				return false
			}
			return true;
		})
		setArticles(new_article)
	}

	const articleForms = () => {
		setEditArticle({ title: "", description: "" });
	}

	return (
		<div className="container mx-auto">
			<div className="row">
				<div className="col"></div>
				<div className="col">
					<button onClick={articleForms}>Add Article</button>
				</div>
			</div>
			<ArticleList articles={articles} editBtn={editBtn} />
			{editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} insertedInformation={insertedInformation} deleteBtn={deleteBtn} /> : null}

		</div>
	);
}

export default App;
