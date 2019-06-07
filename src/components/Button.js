import React from 'react';

class Button extends React.Component{

    sendItem = () => {
        switch(this.props.item) {
            case 'C':
                this.props.clear();
                break;
            case '=':
                this.props.calculate();
                break;
            default:
                this.props.numberConcat(this.props.item);
        }
        
    }

    render(){
        return(
            <button onClick={this.sendItem} className='ui circular icon button button-width'>
                {this.props.item}
            </button>
        );
    }
}

export default Button;