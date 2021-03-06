import axios from 'axios';
//axios is a smaller, simpler way to get AJAX requests than JQuery

const API_KEY = "03523f555745feab8f58016bab98d180";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 


export const FETCH_WEATHER = 'FETCH_WEATHER';
//This helps keep our action types consistent between our action creators
//and action reducers. Just for consistency/bugproofing!

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //This request has a Promise included, because it requests AJAX data

    return {
        type: FETCH_WEATHER,
        payload: request //Add'l data that describes the action. 
        //If the payload is a promise, redux promise stops the action entirely and
        //once the request finishes, it dispatches a new action with the payload 
        //to the reducer
    };
}