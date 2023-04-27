import React, { useEffect } from 'react'
import APIService from '../APIService'

const ArticleList = (props) => {

    const editBtn = (article) => {
        props.editBtn(article)
    }

    const deleteBtn = (article) => {
        APIService.deleteArticle(article.id).then(resp => props.deleteBtn(article))
    }

    return (
        <div>
            <h1 className=" font-semibold text-2xl">Article Zone</h1>

            {props.articles && props.articles.map((article) => (
                <div key={article.id} className=" my-4 ">
                    <h1 className=' font-semibold'>{article.title}</h1>
                    <p>{article.description}</p>

                    <div className='row flex gap-3'>
                        <div className="col">

                            <button onClick={() => editBtn(article)} className='px-4 py-2 bg-green-400 rounded-md '>Update</button>
                        </div>
                        <div className="col">

                            <button onClick={() => deleteBtn(article)} className='px-4 py-2 bg-red rounded-md text-white '>Delete</button>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ArticleList