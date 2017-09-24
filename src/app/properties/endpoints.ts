import {constants} from "./constants";

export let endpoints = {
  'getCitiesUrl': constants.host + '/cities',
  'getlocalitiesUrl': function (cityName: string) {
    return constants.host + `/cities/${cityName}/localities`
  },
  'getSchoolsUrl': function (cityName: string, locality: string) {
    return constants.host + `/cities/${cityName}/localities/${locality}/schools`
  }
}
