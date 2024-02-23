import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1 id='title'>
        <span>Olá mundo!</span>
    </h1>,
    document.getElementById('root'),
);

// container: onde vou querer renderizar o elemento
// sempre é necessário importar o React quando for usar o JSX, mesmo não usando diretamente