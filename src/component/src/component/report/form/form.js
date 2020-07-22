import React from 'react';
import './form.css';


const Form = () => {


    return(
        <div className = 'Form'>

            <form>
                <h2 className = 'form-header'>Report an event</h2>
                <div className = 'form-div'>
                    <label for = 'title'>Title</label>
                    <input name = 'title' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'subject'>Subject</label>
                    <input name = 'subject' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'Category'>Category</label>
                    <input name = 'Category' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'body'>Body</label>
                    <textarea name = 'body' type = 'text' id = 'area-body' cols = '70' rows = '10'/>
                </div>
                <div className = 'form-div'>
                    <label for = 'author'>Author</label>
                    <input name = 'author' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'url'>URL To Image</label>
                    <input name = 'url' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'date'>Date</label>
                    <input name = 'date' type = 'date' />
                </div>
                <div className = 'form-div'>
                    <button id = 'form-btn'>Post</button>
                </div>


            </form>
        </div>
    )
}

export default Form;