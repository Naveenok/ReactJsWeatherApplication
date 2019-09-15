import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>{this.props.city && <p> temperature : {this.props.city}</p>}
                {this.props.country && <p> country :  {this.props.country}</p>}
                {this.props.temperature && <p> Temp : {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
                {this.props.description && <p>description : {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}


            </div>
        );
    }

}
export default Weather;
