import React from 'react';

class RemoveBuilding extends React.Component{

    removeBuilding(id){
        this.props.removeBuilding(id)
    }

    render(){
        const { data, removeBuilding, selectedBuilding} = this.props;

       const buildingList = data
        .filter(directory => {
            //remove building that doesnt match current search
            return directory.id == selectedBuilding })
        .map(directory => {
			return (
                <tr key={directory.id}
                >
					<td>{directory.code} </td>
					<td> {directory.name} </td>
                    <button onClick = {() => removeBuilding(directory)}>
                        Delete
                    </button>
				</tr>

			);
        })
        
        return <div>{buildingList}</div>;
    }
}

export default RemoveBuilding;