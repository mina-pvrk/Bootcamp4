import React from 'react';

class ViewBuilding extends React.Component {

	render() {
        const {data, selectedUpdate, selectedBuilding} = this.props
        
        //if no building (id is numbered 1 and up)
        if(this.props.selectedBuilding <= 0){
            return (
                <div>
                    <p>
                        {' '}
                        <i>Click on a name to view more information</i>
                    </p>
                </div>
            );
        }

            const buildingList = data
            .filter(directory => {
                return directory.id === selectedBuilding })

            .map(directory =>{
                if(!directory.coordinates){
                return(
                    <div>
                        <p>
                            Code : {directory.code}
                        </p>

                        <p>
                            Name: {directory.name}
                        </p>

                        <p>
                            Address: {directory.address}
                        </p>
                        
                        <p>
                            Coordinates:
                        </p>

                        <p>
                            No coordinates for this building exist!
                        </p>
    
                    </div>                    
            
                ); }

                else
                return(
                    <div>
                    <p>
                        Code : {directory.code}
                    </p>

                    <p>
                        Name: {directory.name}
                    </p>

                    <p>
                        Address: {directory.address}
                    </p>

                    <p>
                        Coordinates:
                    </p>

                        <p>
                            Latitude: {directory.coordinates.latitude}
                        </p>

                        <p>
                            Longitude: {directory.coordinates.longitude}
                        </p>

                </div>   
                )
            
            });

            return <div>{buildingList}</div>;
         
	}
}
export default ViewBuilding;
