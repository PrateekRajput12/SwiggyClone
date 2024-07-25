import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.js';
import Body from './Body.js';



const App=()=>{
    return (
        <div className="wrapper w-[100vw] h-[100vh] overflow-hidden">  
<Header/>
<Body/>

        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)