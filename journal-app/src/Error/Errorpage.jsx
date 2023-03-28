import React from 'react'

export const Errorpage = () => {
    return (
        <div id='error-page'>
            <h1> Oops!</h1>
            <p>Sorrry, unexpected error has ocurred</p>
            <p>
                <i> {error.statusText || error.message} </i>
            </p>
        </div>
  );
}
