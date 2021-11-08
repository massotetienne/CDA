const MeteoJour = (props) => {
    return (
        <div>
            <ul>
                <li>IMG : {props.item.weather[0].icon}</li>
                <li>Météo : {props.item.weather[0].main}</li>
                <li>Force du vent : {props.item.wind.speed}</li>
            </ul>

        </div>
    );
};
export default MeteoJour;