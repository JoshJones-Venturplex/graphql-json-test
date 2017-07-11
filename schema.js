const {
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt} = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');

const people = [
    {id:0, name: "Lukas Ruebbelke",  club: "Phoenix" },
    {id:1, name: "John Hamilton",   club: "Phoenix" },
    {id:2,  name: "Lookis Rubixcube",    club: "Glendale" },
    {id:3,  name: "Bob Parley",   club: "Glendale" },
    {id:4,  name: "Lukês Rubarb Key",   club: "Mesa" },
    {id:5,  name: "Gordon Ramses III",    club: "Mesa" },
    {id:6,  name: "Lookees Ruebbenkees",    club: "Scottsdale" },
    {id:7, name: "Rustin Hieber",    club: "Scottsdale" },
    {id:9,  name: "Ronald Dump",   club: "Scottsdale" },
    {id:10,  name: "John D. Stonerfeller",  club: "Phoenix" },
    {id:12,  name: "Chris Darkbrown",   club: "Phoenix" },
    {id:13,  name: "Napoleon TNT",  club: "Scottsdale" },
    {id:15,  name: "Charles Xavier",   club: "Scottsdale" },
    {id:16,  name: "Phillip Phillips",   club: "Scottsdale" },
    {id:17,  name: "Joe Bitehim",   club: "Scottsdale" },
    {id:18,  name: "Roger That",  club: "Scottsdale" },
    {id:19,  name: "LeBum James",   club: "Scottsdale" },
    {id:20,  name: "Justin Lumberpond",   club: "Scottsdale" },
    {id:21,  name: "Charlie Webb",   club: "Phoenix" },
    {id:22,  name: "Micah Torrblke",  club: "Scottsdale" },
    {id:23,  name: "Robert DeFaro",  club: "Phoenix" },
    {id:24,  name: "Kanye East",   club: "Glendale" },
    {id:25,  name: "Stand Patrick Harris",  club: "Mesa" },
    {id:26,  name: "Han Quartet",  club: "Phoenix" },
    {id:27,  name: "Clint Westhood",   club: "Phoenix" },
    {id:28,  name: "Christopher Sitten",   club: "Phoenix" },
    {id:29, name: "Steve Hobs",   club: "Phoenix" },
    {id:30,  name: "Michael Gordan",   club: "Phoenix" },
    {id:31,  name: "Joel Bowlsteen",  club: "Glendale" },
    {id:32,  name: "Jonathan Gravy",   club: "Glendale" },
    {id:33,  name: "Denzel Smashington",   club: "Glendale" },
    {id:34,  name: "Darth Later",   club: "Glendale" },
    {id:35, name: "Nacho Libre",   club: "Glendale" },
    {id:36,  name: "Jailery Clinton",   club: "Glendale" },
    {id:37,  name: "Benedict Cucumberbatch",  club: "Glendale" },
    {id:38,  name: "Bruised Wayne",  club: "Mesa" },
    {id:39, name: "Kevin Kart",   club: "Mesa" },
    {id:40, name: "Jimmy Kibble",   club: "Mesa" },
    {id:41,  name: "Leonardo DeCapriSun",   club: "Mesa" },
    {id:42,  name: "Nice Cube",   club: "Mesa" },
    {id:43,  name: "Bulk Hogen",   club: "Mesa" },
    {id:44,  name: "James Cranko", club: "Mesa" },
    {id:45, name: "Teddie Smurphy",   club: "Mesa" }
];

const getPersonById = (id) => {
  return(people.find((val) => { return val.id === id; }));
}

const schemaString = ` 
  type Person {
    id: Int
    name: String
    club: String
  },
  type Query {
    person(id: Int): Person
  }
`;

const resolverMap = {
  Query: {
    person: (obj, args, context) => {
      return getPersonById(args.id);
    }
  },
}

const schema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolverMap });

exports.schema = schema