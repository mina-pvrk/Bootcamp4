import React from 'react';

class BuildingList extends React.Component {
    selectedUpdate(){
        const v = this.myVal.value
        this.props.selectedUpdate(v)
    }
    removeBuilding(x){
        this.props.removeBuilding(x)
    }

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText , selectedUpdate , removeBuilding} = this.props;

        const buildingList = data
        .filter(name => {
            //remove building that doesnt match current search
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            
        })
        .map(directory => {
			return (
                <tr key={directory.id} onClick={() => selectedUpdate(directory.id)}
                >
					<td>{directory.code} </td>
					<td> {directory.name} </td>
                    <button onClick = {() => removeBuilding(directory)}>
                        Delete
                    </button>
				</tr>

			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
