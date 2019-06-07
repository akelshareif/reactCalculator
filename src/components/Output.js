import React from 'react';

class Output extends React.Component{

    state = {
        output: 0
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.output === ''){
            this.setState({output: 0});
        } else{
            this.setState({output: nextProps.output});
        }   
    }

    render(){
        return(
            <div className='ui segment output-height'>
                <div className='right floated text-size'>
                    {this.state.output}
                </div>
            </div>
        );
    }
}

export default Output;