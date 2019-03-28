import axios from "axios";


export default {
  //perform search
//   search: function(query) {
//     return axios.get("/api/google", { params: { q: "title:" + query} });
//   },
  
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
