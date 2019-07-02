import React, {  useState } from 'react';

const App = () => {
    const [resource, setResource ] = useState('post');
        return (
            <div>
                <div>
                    <button onClick={()=> setResource('post')}>Post</button>
                    <button onClick={()=> setResource('todo')}>Todo</button>
                </div>
                {resource}
            </div>
        );
}
export default App;