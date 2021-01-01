import React, { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameSel: false
        }
    }
    changeText = () => {
        this.setState({
            nameSel: !this.state.nameSel
        });
    }
    render(){
        const {name1, name2, btn} = this.props;
        return(
            <div>
                {
                    this.state.nameSel?
                    <p>{name1}</p>:
                    <p>{name2}</p>
                }
                <button onClick={this.changeText}>{btn}</button>
            </div>
        );
    }
}
export default Header;