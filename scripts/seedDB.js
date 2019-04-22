
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Buildings collection and inserts the buildings below

mongoose.connect(
  process.env.MONGODB_URI 
  || 
  "mongodb://localhost/archfinder"
);

const siteSeed = [
  {
    name: "Aqua Building",
    architect: "Jeanne Gang",
    neighborhood: "Near North Side (Cabrini-Green, Dearborn Parkway, The Gold Coast, Goose Island, Magnificent Mile, Near North Side, Old Town, River North, River West, State Parkway, Streeterville)",
    address: "225 N Columbus Dr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Aqua_Tower_Chicago.jpg/800px-Aqua_Tower_Chicago.jpg",
    description:
      "The Aqua Tower is located at 225 North Columbus Drive, and is surrounded by high-rises. To capture views of nearby landmarks for Aqua's residents, Gang stretched its balconies outward by as much as 12 ft (3.7 m).[14] The result is a building composed of irregularly shaped concrete floor slabs which lend the facade an undulating, sculptural quality.",
    year: "2007",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "S. R. Crown Hall",
    architect: "Ludwig Mies van der Rohe",
    neighborhood: "Bronzeville",
    address: "3360 S. State Street",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/S.R._Crown_Hall.jpg/1024px-S.R._Crown_Hall.jpg",
    description:
      "Widely regarded as one of Mies van der Rohe's masterpieces, Crown Hall, completed in 1956, is one of the most architecturally significant buildings of the 20th century Modernist movement. ",
    year: "1956",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Edgewater Beach Hotel",
    architect: "Marshall & Fox",
    neighborhood: "Edgewater (Andersonville, Edgewater, Edgewater Glen, Epic, Lakewood/Balmoral)",
    address: "5555 N. Sheridan Rd",
    image:
      "https://s3.amazonaws.com/architecture-org/files/modules/edgewater-beach-apts-eric-allix-rogers-01-2.jpg",
    description:
      "Edgewater Beach Apartments is the only remaining part of the Edgewater Beach Hotel complex, started by Marshall and Fox in 1918. This massive, Spanish-style “Pink Palace” was connected to the hotel by a three-block beach promenade for decades",
    year: "1930",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Morris B Sachs Building",
    architect: "Liechenko & Esser",
    neighborhood: "Logan Square (Logan Square, Bucktown, Palmer Square)",
    address: "2800-2808 N. Milwaukee Avenue ",
    image: "https://blaservations.files.wordpress.com/2011/03/img_6954.jpg",
    description:
      "At 2800-2808 N. Milwaukee Avenue, Leichenko & Esser created for building developer Sol H. Goldberg a six-story Art Deco style building encompassing a triangular lot.  Art Deco architecture is characterized by angular, linear composition, typically with a vertical emphasis, and often containing hard-edge, low relief ornamentation around door and window openings. The Morris B. Sachs flatiron building is a tremendous example of the Art Deco style",
    year: "1930",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Emil Bach House",
    architect: "Frank Lloyd Wright",
    neighborhood: "Rogers Park",
    address: "7415 N. Sheridan Road ",
    image:
      "https://flwright.org/sites/default/files/detail/bachhouse472x240_0.jpg",
    description:
      "The Emil Bach House is a Prairie style house in the Rogers Park neighborhood of Chicago, Illinois, United States that was designed by famous architect Frank Lloyd Wright. The house was built in 1915 for an admirer of Wright's work, Emil Bach. Bach was co-owner of the Bach Brick Company",
    year: "1915",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "The Monadnock Building",
    architect: "Burnham & Root",
    neighborhood: "Loop (The Loop, New Eastside, Printer’s Row, South Loop)",
    address: "53 West Jackson Boulevard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Monadnock.jpg/800px-Monadnock.jpg",
    description:
      "The tallest load-bearing brick building ever constructed, the Monadnock Building employed the first portal system of wind bracing in America. Its decorative staircases represent the first structural use of aluminum in building construction. ",
    year: "1915",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Frederick C. Robie House",
    architect: "Frank Lloyd Wright",
    neighborhood: "Hyde Park",
    address: "5757 South Woodlawn Avenue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Frederick_C._Robie_House.JPG/1024px-Frederick_C._Robie_House.JPG",
    description:
      "The Frederick C. Robie House is a U.S. National Historic Landmark on the campus of the University of Chicago in the South Side neighborhood of Hyde Park in Chicago, Illinois. Built between 1909 and 1910, the building was designed by architect Frank Lloyd Wright and is renowned as the greatest example of Prairie School, the first architectural style considered uniquely American",
    year: "1909",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Rookery Building",
    architect: "Burnham & Root",
    neighborhood: "Loop (The Loop, New Eastside, Printer’s Row, South Loop)",
    address: "209 South LaSalle Street",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0lKYPegEvdg9RnmxHc6NhdtMUKrXXt1p8FRedQdGiX0HE2R0",
    description:
      "The Rookery Building is a historic landmark, office building located at 209 South LaSalle Street in the Loop community area of Chicago in Cook County, Illinois, United States. Completed by John Wellborn Root and Daniel Burnham of Burnham and Root in 1888, it is considered one of their masterpiece buildings, and was once the location of their offices. The building is 181 feet (55 m) high, twelve stories tall, and is considered the oldest standing high-rise in Chicago.It has a unique style with exterior load-bearing walls and an interior steel frame, which provided a transition between accepted and new building techniques. The lobby was remodeled in 1905 by Frank Lloyd Wright. Beginning in 1989, the lobby was restored to the original Wright design.",

    year: "1886",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "South Side Community Art Center",
    architect: " L. Gustav Hallberg",
    neighborhood: "Bronzeville",
    address: "3831 South Michigan Avenue",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0lKYPegEvdg9RnmxHc6NhdtMUKrXXt1p8FRedQdGiX0HE2R0",
    description:
      "The South Side Community Art Center is a community art center in Chicago that opened in 1940 with support from the Works Progress Administration's Federal Art Project in Illinois.[1] Opened in Bronzeville, it became the first black art museum in the United States and has been an important center for the development Chicago's African American artists. Of more than 100 community art centers established by the WPA, this is the only one that remains open.",
    year: "1893",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "Jewelers' Building",
    architect: "Joachim G. Giaver and Frederick P. Dinkelberg",
    neighborhood: "Loop (The Loop, New Eastside, Printer’s Row, South Loop)",
    address: "35 East Wacker",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chicago_September_2016-41.jpg/225px-Chicago_September_2016-41.jpg",
    description:
      "35 East Wacker, also known as the Jewelers' Building, is a 40-story 159.4 m (523 ft) historic building in the Loop community area of Chicago, Illinois, United States, located at the intersections of Wabash Avenue, and facing the Chicago River. It was built from 1925 to 1927, and was co-designed by Joachim G. Giaver and Frederick P. Dinkelberg. It was once considered to be the tallest building in the world outside New York City.[7][8] Formerly the Pure Oil Building and North American Life Insurance Building, 35 East Wacker was listed in 1978 as a contributing property to the Michigan–Wacker Historic District on the National Register of Historic Places, and was designated a Chicago Landmark on February 9, 1994",
    year: "1927",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "River City",
    architect: "Bertrand Goldberg",
    neighborhood: "Loop (The Loop, New Eastside, Printer’s Row, South Loop)",
    address: "800 South Wells Street",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/River_City_01.jpg/1024px-River_City_01.jpg",
    description:
      "River City is a mixed-use building at 800 South Wells Street in Chicago, Illinois. It was designed by Bertrand Goldberg, to whose Marina City it bears clear affinities, and was completed in 1986 in the South Loop neighborhood of Chicago.It is situated alongside the Chicago River and consists of two 7- to 14-story, serpentine residential towers constructed of reinforced, poured-in-place concrete shells with 449 residential units, varying in size from studios to 4-bedroom penthouses.",
    year: "1986",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "Lake Point Tower",
    architect: "John Heinrich and George Schipporeit",
    neighborhood: "Near North Side (Cabrini-Green, Dearborn Parkway, The Gold Coast, Goose Island, Magnificent Mile, Near North Side, Old Town, River North, River West, State Parkway, Streeterville)",
    address: "505 North Lake Shore Drive",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lake_Point_Tower.jpg/1200px-Lake_Point_Tower.jpg",
    description:
      "Lake Point Tower is a high-rise residential building located on a promontory of the Lake Michigan lakefront in downtown Chicago, just north of the Chicago River at 505 North Lake Shore Drive. It is located in the Streeterville neighborhood of the Near North Side community area. It rises somewhat apart from the urban cluster of downtown Chicago. Located adjacent to Navy Pier, the building is the only skyscraper in downtown Chicago east of Lake Shore Drive.",
    year: "1968",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Ida B. Wells-Barnett House",
    architect: "Joseph Thain",
    neighborhood: "Bronzeville",
    address: "3624 S. Martin Luther King Jr. Blvd",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/20070601_Wells_House_%282%29.JPG/800px-20070601_Wells_House_%282%29.JPG",
    description:
      "The Ida B. Wells-Barnett House was the residence of civil rights advocate Ida B. Wells, (1862–1931) and her husband Ferdinand Lee Barnett from 1919 to 1930. It is located at 3624 S. Dr. Martin Luther King Jr. Drive in the Douglas community area of Chicago, Illinois. It was designated a Chicago Landmark on October 2, 1995.",
    year: "1890",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "Hull House",
    architect: "Pond and Pond",
    neighborhood: "Bronzeville",
    address: "800 S. Halsted Street",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/UIC_Hull_House.JPG/800px-UIC_Hull_House.JPG",
    description:
      "Most of the Hull House buildings were demolished for the construction of the University of Illinois- Chicago in the mid-1960s. The Hull mansion and several subsequent acquisitions were continuously renovated to accommodate the changing demands of the association. The original building and one additional building (which has been moved 200 yards (182.9 m))[7] survives today. On June 12, 1974, the Hull House building was designated a Chicago Landmark.",
    year: "1856",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "Marina City",
    architect: "Bertrand Goldberg",
    neighborhood: "Near North Side (Cabrini-Green, Dearborn Parkway, The Gold Coast, Goose Island, Magnificent Mile, Near North Side, Old Town, River North, River West, State Parkway, Streeterville)",
    address: "State St & Wacker Dr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Marina_City_Chicago_2012-0224.jpg/200px-Marina_City_Chicago_2012-0224.jpg",
    description:
      "Marina City is a mixed-use residential-commercial building complex in Chicago, Illinois, United States, North America, designed by architect Bertrand Goldberg. The multi-building complex opened between 1963 and 1967and occupies almost an entire city block on State Street on the north bank of the Chicago River on the Near North Side, directly across from the Loop. Portions of the complex were designated a Chicago Landmark in 2016.",
    year: "1968",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Ridge (Nortown, Peterson Park, Rosehill, West Ridge, West Rogers Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Uptown (Clarendon Park, Buena Park, New Chinatown, Sheridan Park, Uptown)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Lincoln Square (Bowmanville, Budlong Woods, Lincoln Square, Ravenswood, Ravenswood Gardens)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Edison Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Norwood Park (Big Oaks, Norwood Park, Old Norwood, Oriole Park, Union Ridge)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Jefferson Park (Gladstone Park, Jefferson Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Forest Glen (Edgebrook, Forest Glen, Middle Edgebrook, Sauganash, Wildwood)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "North Park (Hollywood Park, North Park, Pulaski Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Albany Park (Albany Park, Mayfair, North Mayfair, Ravenswood Manor)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Edgewater (Andersonville, Edgewater, Edgewater Glen, Epic, Lakewood/Balmoral)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "O’Hare (O’Hare, Schorsch Forest View)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "North Center (Northcenter, Roscoe Village, Saint Ben’s)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Lakeview (Lake View East, North Halsted, West Lakeview, Wrigleyville)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Lincoln Park (DePaul, Old Town Triangle, Park West, Lincoln Park, Ranch Triangle, Sheffield Neighbors, Wrightwood Neighbors)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Avondale",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Portage Park (Portage Park, Six Corners)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Irving Park (Irving Park, Kilbourn Park, Old Irving Park, The Villa)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Dunning (Belmont Heights, Belmont Terrace, Dunning, Irving Woods, Schorsch Village)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Montclare",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
 
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Belmont Cragin (Brickyard, Cragin, Hanson Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Hermosa (Belmont Gardens, Hermosa, Kelvyn Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Near North Side (Cabrini-Green, Dearborn Parkway, The Gold Coast, Goose Island, Magnificent Mile, Near North Side, Old Town, River North, River West, State Parkway, Streeterville)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Near South Side (Dearborn Park, Near South Side, Museum Park, Central Station, Prairie Avenue Historic District)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Humboldt Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Town (East Village, Noble Square, Ukrainian Village, Smith Park, West Town, Wicker Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Austin (Austin, Galewood, The Island)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Garfield Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "East Garfield Park (East Garfield Park, Fifth City)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Near West Side",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "North Lawndale",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "South Lawndale (Little Village, South Lawndale, Marshall Square)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Lower West Side (Heart of Chicago, Pilsen)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Armour Square (Armour Square, Chinatown, Wentworth Gardens)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Douglas (Bronzeville, Douglas, Groveland Park, Lake Meadows, Prairie Shores, South Commons)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Oakland",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Fuller Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Grand Boulevard ",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Kenwood",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Washington Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Hyde Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Woodlawn",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "South Shore (Jackson Park Highlands, South Shore)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Bridgeport",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Greater Grand Crossing (Grand Crossing, Greater Grand Crossing, Park Manor)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Garfield Ridge (Garfield Ridge, Le Claire Courts, Sleepy Hollow, Vittum Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Archer Heights",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Brighton Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "McKinley Park ",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "New City (Back of the Yards, Canaryville, New City)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Elsdon",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Gage Park",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Clearing (Chrysler Village, Clearing)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Lawn (Ford City, West Lawn)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Chicago Lawn (Chicago Lawn, Lithuanian Plaza, Marquette Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Englewood",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Englewood (Englewood, Hamilton Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Ashburn (Ashburn, Ashburn Estates, Beverly View, Crestline, Parkview, Scottsdale, Wrightwood)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Auburn Gresham (Auburn Gresham, Gresham)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Beverly (Beverly, West Beverly)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Washington Heights (Brainerd, Longwood Manor, Washington Heights)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Mount Greenwood (Mount Greenwood, Talley’s Corner)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Morgan Park (Beverly Woods, Kennedy Park, Morgan Park, West Morgan Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Chatham (Chatham, West Chesterfield)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Avalon Park (Avalon Park, Marynook, Stony Island Park)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "South Chicago",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Burnside",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Calumet Heights (Calumet Heights, Pill Hill)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Roseland (Fernwood, Princeton Park, Roseland)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Pullman (Cottage Grove Heights, Pullman)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "South Deering (Jeffrey Manor, South Deering)",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "East Side",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "West Pullman",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Riverdale",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },
  {
    name: "Placeholder Bldg",
    architect: "Placeholder Architect",
    neighborhood: "Hegewisch",
    address: "1234 Placeholder Street",
    image:
      "https://via.placeholder.com/300",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "0000",
    rating: null,
    date: new Date(Date.now()),
    created_by: "brad"
  },

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