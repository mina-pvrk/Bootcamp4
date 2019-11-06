import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: [],
      bNew: []
    };

    this.removeBuilding=this.removeBuilding.bind(this)
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  removeBuilding(i){
    var newData = this.props.data
    if (newData){
    var index = newData.indexOf(i)
      if (index !== -1){
      newData.splice(index,1)
      this.setState({data: newData})
      } 
    } 
  }

  handleSubmit(bNew){
    this.setState(() => {this.props.data.push(bNew)})
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterVal={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedBuilding = {this.state.selectedBuilding}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                  <RemoveBuilding 
                    data={this.props.data}
                    removeBuilding={this.removeBuilding.bind(this)}
                    selectedBuilding = {this.state.selectedBuilding}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <h2>
                 Building Details
              </h2>
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
                selectedUpdate = {this.selectedUpdate.bind(this)}
              />
            </div>

            <div className="column2">
              <AddBuilding 
              data={this.props.data}
              handleSubmit={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;