import axios from "axios";


export default {

  // Gets all buildings
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

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/buildings/" + id);
  },
  // Deletes the book with the given id
  deleteBuilding: function(id) {
    return axios.delete("/api/buildings/" + id);
  },

  update: function(buildingID,userid) {
       alert("building" + buildingID + " " + "user"+ userid);

    return axios.put("/api/saved/" + userid);
  },
  // Saves a book to the database
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
