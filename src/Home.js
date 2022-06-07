import React from "react";

class Home  extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            name:'akhi',
            age:20 
        }
    }

    render (){
        return (
            <div>
                <h1>i am {this.state.name}</h1>
                <h2>i am {this.state.age} years old</h2>
            </div>
        )
    }
}
    export default Home ;