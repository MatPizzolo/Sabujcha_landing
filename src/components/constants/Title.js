import React from 'react';

const Title = ({title, line}) => {
    return (
        <>
        {
            line == true ?
                <h2 className="titleComp no-line">{title}</h2>
            :
                <h2 className="titleComp" >{title}</h2>
        }
            
        </>
    )
}

export default Title
