import React from 'react';
import Output from './Output';
import Button from './Button';

class CalculatorCard extends React.Component{

    state = {
        number: ''
    }

    numberConcat = num => {
        this.setState({number: this.state.number+=num});
    }

    clear = () => {
        this.setState({number: ''});
        console.log('state cleared');
    }

    calculate = () => {
        try{
            this.setState({number: eval(this.state.number)});
        } 
        catch(error){
            this.setState({number: 'Error'});
        }
    }

    
    render(){
        return(
            <div className='ui centered card background'>
                <Output output={this.state.number} />
                <div className='ui four column grid'>
                    {/* Row 1 */}
                    <div className='centered row margin'>
                        <div className='column'>
                            <Button item='C' clear={this.clear} />
                        </div>
                        <div className='column'>
                            <Button item='(' numberConcat={this.numberConcat} />
                        </div>
                        <div className='column'>
                            <Button item=')' numberConcat={this.numberConcat} />
                        </div>
                        <div className='column'>
                            <Button item='/' numberConcat={this.numberConcat} />
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className='row margin'>
                        <div className='column'>
                            <Button item='7' numberConcat={this.numberConcat} />
                        </div>
                        <div className='column'>
                            <Button item='8' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='9' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='*' numberConcat={this.numberConcat} />
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className='row margin'>
                        <div className='column'>
                            <Button item='4' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='5' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='6' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='-' numberConcat={this.numberConcat} />
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className='row margin'>
                        <div className='column'>
                            <Button item='1' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='2' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='3' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='+' numberConcat={this.numberConcat} />
                        </div>
                    </div>
                    {/* Row 5 */}
                    <div className='row margin'>
                        <div className='column'>
                            <Button item='0' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='00' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='.' numberConcat={this.numberConcat}  />
                        </div>
                        <div className='column'>
                            <Button item='=' calculate={this.calculate} />
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default CalculatorCard;