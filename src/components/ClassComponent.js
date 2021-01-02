import React, { Component } from "react";

class Class extends Component{
    constructor(props){
        super(props);
        this.state= {
            indexNum : -1,
        }
    }
    selectName = (index) => {
        this.setState({
            indexNum: index
        });
    }
    
    render(){
        const names = ["Adeel", "Naveed", "Tayyab", "Abid", "Gull", "Hamza"];
        const indexNum = this.state.indexNum;
        return(
            <div>
                <p>Selection: {indexNum == - 1? null: names[indexNum]}</p>
                {names.map((obj, index) => (<p onClick={() => this.selectName(index)}>{obj}</p>)
                )}
            </div>
        );
    }
}
export default Class;