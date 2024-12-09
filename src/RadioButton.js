import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { Component } from 'react';

 class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = { SelectAnswer: '' };
    }

    handleAnswerchange = (event) => {
        this.setState({
            SelectAnswer: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Select Your Answer: </FormLabel>
                    <RadioGroup
                        row
                        aria-label='answer'
                        name='answer'
                        value={this.state.SelectAnswer}
                        onChange={this.handleAnswerchange}
                    >
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                        <FormControlLabel value='No' control={<Radio />} label='No' />
                    </RadioGroup>
                </FormControl>
                <p>Your Answer: {this.state.SelectAnswer}</p>
            </div>
        );
    }
}
export default RadioButton;