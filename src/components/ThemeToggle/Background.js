import React from 'react';

const Background = ( { children } ) => {
    return (
       
        <body className="bg-very-light-grey dark:bg-very-dark-blue transition-all">
            {children}
        </body>
    )
}

export default Background;