export interface SearchType {
  city: string;
  country: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
  }[];
}

/**
 * The [] in weather: { description: string; }[] indicates that the weather property is an array of objects, each containing a description string. 
   This matches the structure of the weather data returned by many APIs, where the weather property is an array of weather conditions.
 */
