import React from 'react'

const Form = ({validateData, handleChange, title, description}) => {
    return (
        <div className="row">
            <form className="col s12" onSubmit={e => validateData(e)}>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea name="title" value={title} id="title" className="materialize-textarea" onChange={e => handleChange(e)}></textarea>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea name="description" value={description} id="description" className="materialize-textarea" onChange={e => handleChange(e)}></textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
                <button type="submit" className="btn teal small save-btn">Save</button>
            </form>
        </div>
    )
}

export default Form