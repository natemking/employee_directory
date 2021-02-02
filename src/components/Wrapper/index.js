import React from 'react';

const Wrapper = (props) => {
    console.log(props);
    return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;