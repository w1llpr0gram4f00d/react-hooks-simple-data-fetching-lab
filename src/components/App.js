// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [image, setImage] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setImage(data)
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) {
        return <h3>Loading...</h3>;
    }


  return (
    <div>
        <img src={image.message} alt='A Random Dog'/>
    </div>
    );
}

export default App;
