import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


console.log(this.props.googleAddress);
export default {
  //Find GoogleMap

//

//   search: function(query) {
//     return axios.get("/api/google", { params: { q: "address:" + query} + Api_Key });
//   },
getGoogleMaps: function(query) {
  return axios.get("/api/googleMaps", { params: { q: "address:" + query} +  API_KEY });
},

  
  // Gets all books
  getBuildings: function() {
    return axios.get("/api/buildings");
  },

 
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/buildings/" + id);
  },
  // Deletes the book with the given id
  deleteBuilding: function(id) {
    return axios.delete("/api/buildings/" + id);
  },

  update: function(id) {
    return axios.delete("/api/buildigns/" + id);
  },
  // Saves a book to the database
  saveBuilding: function(buildingData) {
    console.log(buildingData)
    return axios.post("/api/buildings", buildingData);
  }



};
