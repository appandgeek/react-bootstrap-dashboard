import React from 'react';

const tags = (props) => {
    return (
        props.tags.map((tag, index) =>
            <a className={props.cls} href="#" key={index}>{tag}</a>
        )
    );
}
export default tags;
