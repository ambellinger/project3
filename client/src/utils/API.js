import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  //Find GoogleMap

//   search: function(query) {
//     return axios.get("/api/google", { params: { q: "address:" + query} + Api_Key });
//   },
getGoogleMaps: function() {
  // return axios.get("/api/googleMaps", { params: { q: "address:" + query} +  API_KEY });
  return axios.get("/api/googleMaps");
},

// getAddress: function() {
//   return axios.get("api/buildings/address/");
// },

// getGoogleAddress: function(address) {
//   return axios.get("api/buildings/address/" + address)
// },
  // Gets all books
  getBuildings: function() {
    return axios.get("/api/buildings");
  },
 getList: function(){
  return axios.get("/api/buildings/list");
},
 
  // Gets the buildings with the given neighborhood
  getHood: function(neighborhood) {
    return axios.get("/api/buildings/neighborhood/" + neighborhood);
  },
  // Gets all books
  getHomepage: function() {
    return axios.get("/");
  },
  
    // Gets all books
    getLogin: function() {
      return axios.get("/login");
    },
    
  // validation
  getUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData);
  },

  // Gets the building with the given id
  getBook: function(id) {
    return axios.get("/api/buildings/" + id);
  },
  // Deletes the building with the given id
  deleteBuilding: function(id) {
    return axios.delete("/api/buildings/" + id);
  },

  update: function(id) {
    return axios.delete("/api/buildigns/" + id);
  },
  // Saves a building to the database
  saveBuilding: function(buildingData) {
    console.log(buildingData)
    return axios.post("/api/buildings", buildingData);
  },


  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users/signup", userData);
  },
  checkUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users/check/validate", userData);
  }



};
