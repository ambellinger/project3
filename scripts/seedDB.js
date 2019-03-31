const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Buildings collection and inserts the buildings below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_1sltkj12:bquauefucuo84q80kbc3gmdvag@ds155634.mlab.com:55634/heroku_1sltkj12"
);

const siteSeed = [
  {
    name: "Aqua Building",
    architect: "Jeanne Gang",
    neighborhood: "Loop",
    address: "225 N Columbus Dr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Aqua_Tower_Chicago.jpg/800px-Aqua_Tower_Chicago.jpg",
    description:
      "The Aqua Tower is located at 225 North Columbus Drive, and is surrounded by high-rises. To capture views of nearby landmarks for Aqua's residents, Gang stretched its balconies outward by as much as 12 ft (3.7 m).[14] The result is a building composed of irregularly shaped concrete floor slabs which lend the facade an undulating, sculptural quality.",
    year: "2007",
    rating: null,
    date: new Date(Date.now())
  },
  {
  name: "S. R. Crown Hall",
  architect: "Ludwig Mies van der Rohe",
  neighborhood: "South Side",
  address: 	"3360 S. State Street",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/S.R._Crown_Hall.jpg/1024px-S.R._Crown_Hall.jpg",
  description:
    "Widely regarded as one of Mies van der Rohe's masterpieces, Crown Hall, completed in 1956, is one of the most architecturally significant buildings of the 20th century Modernist movement. ",
  year: "1956",
  rating: null,
  date: new Date(Date.now())
  },
  {
    name: "Edgewater Beach Hotel",
    architect: "Marshall & Fox",
    neighborhood: "North Side",
    address: "5555 N. Sheridan Rd",
    image:
      "https://s3.amazonaws.com/architecture-org/files/modules/edgewater-beach-apts-eric-allix-rogers-01-2.jpg",
    description:
      "Edgewater Beach Apartments is the only remaining part of the Edgewater Beach Hotel complex, started by Marshall and Fox in 1918. This massive, Spanish-style “Pink Palace” was connected to the hotel by a three-block beach promenade for decades",
    year: "1930",
    rating: null,
    date: new Date(Date.now())
  },
  {
    name: "Morris B Sachs Building",
    architect: "Liechenko & Esser",
    neighborhood: "Northwest Side",
    address: "2800-2808 N. Milwaukee Avenue ",
    image:
      "https://blaservations.files.wordpress.com/2011/03/img_6954.jpg",
    description:
      "At 2800-2808 N. Milwaukee Avenue, Leichenko & Esser created for building developer Sol H. Goldberg a six-story Art Deco style building encompassing a triangular lot.  Art Deco architecture is characterized by angular, linear composition, typically with a vertical emphasis, and often containing hard-edge, low relief ornamentation around door and window openings. The Morris B. Sachs flatiron building is a tremendous example of the Art Deco style",
    year: "1930",
    rating: null,
    date: new Date(Date.now())
  },
  {
    name: "Emil Bach House",
    architect: "Frank Lloyd Wright",
    neighborhood: "North Side",
    address: "7415 N. Sheridan Road ",
    image:
      "https://flwright.org/sites/default/files/detail/bachhouse472x240_0.jpg",
    description:
      "The Emil Bach House is a Prairie style house in the Rogers Park neighborhood of Chicago, Illinois, United States that was designed by famous architect Frank Lloyd Wright. The house was built in 1915 for an admirer of Wright's work, Emil Bach. Bach was co-owner of the Bach Brick Company",
    year: "1915",
    rating: null,
    date: new Date(Date.now())
  },
  {
    name: "The Monadnock Building",
    architect: "Burnham & Root",
    neighborhood: "Loop",
    address: "53 West Jackson Boulevard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Monadnock.jpg/800px-Monadnock.jpg",
    description:
      "The tallest load-bearing brick building ever constructed, the Monadnock Building employed the first portal system of wind bracing in America. Its decorative staircases represent the first structural use of aluminum in building construction. ",
    year: "1915",
    rating: null,
    date: new Date(Date.now())
  },
  {
  name: "Frederick C. Robie House",
  architect: "rank Lloyd Wright",
  neighborhood: "South Side",
  address: "5757 South Woodlawn Avenue",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Frederick_C._Robie_House.JPG/1024px-Frederick_C._Robie_House.JPG",
  description:
  "The Frederick C. Robie House is a U.S. National Historic Landmark on the campus of the University of Chicago in the South Side neighborhood of Hyde Park in Chicago, Illinois. Built between 1909 and 1910, the building was designed by architect Frank Lloyd Wright and is renowned as the greatest example of Prairie School, the first architectural style considered uniquely American",
  year: "1909",
  rating: null,
  date: new Date(Date.now())
},
  {
    name: "Rookery Building",
    architect: "Burnham & Root",
    neighborhood: "Loop",
    address: "209 South LaSalle Street",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0lKYPegEvdg9RnmxHc6NhdtMUKrXXt1p8FRedQdGiX0HE2R0",
    description:"The Rookery Building is a historic landmark, office building located at 209 South LaSalle Street in the Loop community area of Chicago in Cook County, Illinois, United States. Completed by John Wellborn Root and Daniel Burnham of Burnham and Root in 1888, it is considered one of their masterpiece buildings, and was once the location of their offices. The building is 181 feet (55 m) high, twelve stories tall, and is considered the oldest standing high-rise in Chicago.It has a unique style with exterior load-bearing walls and an interior steel frame, which provided a transition between accepted and new building techniques. The lobby was remodeled in 1905 by Frank Lloyd Wright. Beginning in 1989, the lobby was restored to the original Wright design.",
    
    year: "1886",
    rating: null,
    date: new Date(Date.now()),

    
  },

{
  name: "South Side Community Art Center",
  architect: " L. Gustav Hallberg",
  neighborhood: "South Side",
  address: "3831 South Michigan Avenue",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0lKYPegEvdg9RnmxHc6NhdtMUKrXXt1p8FRedQdGiX0HE2R0",
  description:"The South Side Community Art Center is a community art center in Chicago that opened in 1940 with support from the Works Progress Administration's Federal Art Project in Illinois.[1] Opened in Bronzeville, it became the first black art museum in the United States and has been an important center for the development Chicago's African American artists. Of more than 100 community art centers established by the WPA, this is the only one that remains open.",
  year: "1893",
  rating: null,
  date: new Date(Date.now()),


},

{
  name: "Jewelers' Building",
  architect: "Joachim G. Giaver and Frederick P. Dinkelberg",
  neighborhood: "Loop",
  address: "35 East Wacker",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chicago_September_2016-41.jpg/225px-Chicago_September_2016-41.jpg",
  description:"35 East Wacker, also known as the Jewelers' Building, is a 40-story 159.4 m (523 ft) historic building in the Loop community area of Chicago, Illinois, United States, located at the intersections of Wabash Avenue, and facing the Chicago River. It was built from 1925 to 1927, and was co-designed by Joachim G. Giaver and Frederick P. Dinkelberg. It was once considered to be the tallest building in the world outside New York City.[7][8] Formerly the Pure Oil Building and North American Life Insurance Building, 35 East Wacker was listed in 1978 as a contributing property to the Michigan–Wacker Historic District on the National Register of Historic Places, and was designated a Chicago Landmark on February 9, 1994",   
  year:"1927",
  rating: null,
  date: new Date(Date.now()),
  
},
{
  name: "River City",
  architect: "Bertrand Goldberg",
  neighborhood: "South Side",
  address: "800 South Wells Street",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/River_City_01.jpg/1024px-River_City_01.jpg",
  description:"River City is a mixed-use building at 800 South Wells Street in Chicago, Illinois. It was designed by Bertrand Goldberg, to whose Marina City it bears clear affinities, and was completed in 1986 in the South Loop neighborhood of Chicago.It is situated alongside the Chicago River and consists of two 7- to 14-story, serpentine residential towers constructed of reinforced, poured-in-place concrete shells with 449 residential units, varying in size from studios to 4-bedroom penthouses.",   
  year:"1986",
  rating: null,
  date: new Date(Date.now()),

},

{
  name: "Lake Point Tower",
  architect: "John Heinrich and George Schipporeit",
  neighborhood: "North Side",
  address: "505 North Lake Shore Drive",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lake_Point_Tower.jpg/1200px-Lake_Point_Tower.jpg",
  description: "Lake Point Tower is a high-rise residential building located on a promontory of the Lake Michigan lakefront in downtown Chicago, just north of the Chicago River at 505 North Lake Shore Drive. It is located in the Streeterville neighborhood of the Near North Side community area. It rises somewhat apart from the urban cluster of downtown Chicago. Located adjacent to Navy Pier, the building is the only skyscraper in downtown Chicago east of Lake Shore Drive.",
  year: "1968",
  rating: null,
  date: new Date(Date.now()),
  
},
{
  name: "Ida B. Wells-Barnett House",
  architect: "Joseph Thain",
  neighborhood: "South Side",
  address: "3624 S. Martin Luther King Jr. Blvd",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/20070601_Wells_House_%282%29.JPG/800px-20070601_Wells_House_%282%29.JPG",
  description: "The Ida B. Wells-Barnett House was the residence of civil rights advocate Ida B. Wells, (1862–1931) and her husband Ferdinand Lee Barnett from 1919 to 1930. It is located at 3624 S. Dr. Martin Luther King Jr. Drive in the Douglas community area of Chicago, Illinois. It was designated a Chicago Landmark on October 2, 1995.",
  year: "1890",
  rating: null,
  date: new Date(Date.now()),

},

{
  name: "Hull House",
  architect: "Pond and Pond",
  neighborhood: "West Side",
  address: "800 S. Halsted Street",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/UIC_Hull_House.JPG/800px-UIC_Hull_House.JPG",
  description: "Most of the Hull House buildings were demolished for the construction of the University of Illinois- Chicago in the mid-1960s. The Hull mansion and several subsequent acquisitions were continuously renovated to accommodate the changing demands of the association. The original building and one additional building (which has been moved 200 yards (182.9 m))[7] survives today. On June 12, 1974, the Hull House building was designated a Chicago Landmark.",
  year: "1856",
  rating: null,
  date: new Date(Date.now()),

},

{
name: "Marina City",
architect: "Bertrand Goldberg",
neighborhood: "North Side",
address: "State St & Wacker Dr",
image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Marina_City_Chicago_2012-0224.jpg/200px-Marina_City_Chicago_2012-0224.jpg",
description:"Marina City is a mixed-use residential-commercial building complex in Chicago, Illinois, United States, North America, designed by architect Bertrand Goldberg. The multi-building complex opened between 1963 and 1967and occupies almost an entire city block on State Street on the north bank of the Chicago River on the Near North Side, directly across from the Loop. Portions of the complex were designated a Chicago Landmark in 2016.",
year: "1968",
rating: null,
date: new Date(Date.now()),

}

];

db.Building.remove({})
  .then(() => db.Building.collection.insertMany(siteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
