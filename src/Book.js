import React from 'react'

const Book = (props) => {
    const { img, title, author, number } = props.book
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world');
    }
    const complexExample = () => {
        console.log(author);
    }
    return (
        <article className='book' onMouseOver={() => {
            console.log(title);
        }}
        >
            <img src={img} alt='' />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <h6>{number}</h6>
            <button type='button' onClick={clickHandler}>
                reference example
            </button>
            <button type='button' onClick={() => complexExample(author)}>more complex example</button>
        </article>
    );
};

export default Book