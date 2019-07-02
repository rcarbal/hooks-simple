import React, {  useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resource, setResource ] = useState('post');
        return (
            <div>
                <div>
                    <button onClick={()=> setResource('post')}>Post</button>
                    <button onClick={()=> setResource('todo')}>Todo</button>
                </div>
                <ResourceList resource={resource}/>
            </div>
        );
}
export default App;