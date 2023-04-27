export default class APIService{
    static UpdateArticle(article_id, body){
        return fetch(`http://127.0.0.1:8000/articles/${article_id}`,{
            method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Token 5488b8907fe6f6fe6577870bda08be24e040415d",
			},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static addArticle(body){
        return fetch(`http://127.0.0.1:8000/articles/`,{
            method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Token 5488b8907fe6f6fe6577870bda08be24e040415d",
			},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }


    static deleteArticle(article_id,body){
        return fetch(`http://127.0.0.1:8000/articles/${article_id}`,{
            method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Token 5488b8907fe6f6fe6577870bda08be24e040415d",
			},
            body: JSON.stringify(body)
        })
    }

    static LoginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}

