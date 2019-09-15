import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city && <p className="weather__key"> temperature : <span>{this.props.city}</span></p>
                }
                {
                    this.props.country && <p className="weather__key"> country : <span> {this.props.country}</span></p>
                }
                {
                    this.props.temperature && <p className="weather__key"> Temp : <span>{this.props.temperature}</span></p>
                }
                {
                    this.props.humidity && <p className="weather__key">Humidity : <span>{this.props.humidity}</span></p>
                }
                {
                    this.props.description && <p className="weather__key">description : <span>{this.props.description}</span></p>
                }
                {
                    this.props.error && <p className="weather__key"><span>{this.props.error}</span></p>
                }


            </div>
        );
    }

}
export default Weather;
