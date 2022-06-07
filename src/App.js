import React from 'react';
import Home from './Home';
import Nav from './Components/common/Nav';
import Footer from './Components/common/Footer';



//create a component...
function App (){
console.log('hello');
return (
    <div>

       {/*nav component call*/}
        <Nav/>
        
        <Home/>

        <Footer/>

    
    </div>
)

}

export default App;

