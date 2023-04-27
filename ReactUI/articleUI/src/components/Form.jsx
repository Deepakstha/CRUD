import React, { useState, useEffect } from 'react'
import APIService from '../APIService'

const Form = (props) => {
    const [title, setTitle] = useState(props.article.title)
    const [description, setDescription] = useState(props.article.description)

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, { title, description }).then(resp => props.updatedInformation(resp))


    }

    const addArticle = () => {
        APIService.addArticle({ title, description }).then(resp => props.insertedInformation(resp))
    }

    return (
        <div>
            {props.article ? (
                <div className=''>
                    <label htmlFor="title">Title</label> <br />
                    <input type="text" id="title" value={title} className="border" onChange={e => setTitle(e.target.value)} /> <br />
                    <label htmlFor="desc">Description</label> <br />
                    <textarea id="desc" value={description} rows='5' className="border" onChange={e => setDescription(e.target.value)} /> <br />

                    {
                        props.article.id ? <button onClick={updateArticle} className='px-4 py-2 rounded-md bg-green-500'> Update Article</button>
                            : <button onClick={addArticle} className='px-4 py-2 rounded-md bg-green-500'> Add Article</button>

                    }
                </div>

            ) : null}
        </div>
    )
}

export default Form