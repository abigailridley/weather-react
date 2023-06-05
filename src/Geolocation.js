import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

export default function Geolocation() {
    const locationIcon = <FontAwesomeIcon icon={faLocationCrosshairs} />
    return (
        <div > 
            <button className="search-button btn btn-primary" type="submit">{locationIcon}</button>
        </div>
    )
}