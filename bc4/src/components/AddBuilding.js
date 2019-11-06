import React from 'react';

class AddBuilding extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            code: '',
            name: '',
            address: '',
            coordinates: {
              latitude: 0,
              longitude: 0
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({id : this.props.data.length + 1});  
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event){
        this.props.handleSubmit(this.state);
        event.preventDefault();
        event.target.reset();
    }
    render(){
        
        return(
            <form onSubmit={this.handleSubmit}> 
                <h2>
                    Add a New Building
                </h2>
                
                <input type = "text"
                    name = "code"
                    placeholder="Input new building code"
                    onChange={this.handleChange}
                />

                <input type = "text"
                    name = "name"
                    placeholder="Input new building name"
                    onChange={this.handleChange}
                />

                <input type = "text"
                    name = "address"
                    placeholder="Input new building address"
                    onChange={this.handleChange}
                />  

                <input type = "text"
                    name = "latitude"
                    placeholder="Input new building latitude"
                    onChange={this.handleChange}
                />  

                <input type = "text"
                    name = "longitude"
                    placeholder="Input new building longitude"
                    onChange={this.handleChange}
                />  

                <button type = "submit" >
                    SUBMIT
                </button>
                
            </form>
        )
    }
}

export default AddBuilding;