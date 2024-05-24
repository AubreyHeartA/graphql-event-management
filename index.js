import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// database and types
import db from './_db.js';
import { typeDefs } from './schema.js';

// Define the resolvers

const resolvers = {
    Query: {
        venues() {
          return db.venues;
        },
        venue(_, { id }) {
          return db.venues.find((venue) => venue.id === id);
        },
        events() {
          return db.events;
        },
        event(_, { id }) {
          return db.events.find((event) => event.id === id);
        },
        tickets() {
          return db.tickets;
        },
        ticket(_, { id }) {
          return db.tickets.find((ticket) => ticket.id === id);
        },
        attendees() {
          return db.attendees;
        },
        attendee(_, { id }) {
          return db.attendees.find((attendee) => attendee.id === id);
        }
      },
    Event: {
        venues: (parent) => parent.venues.map((id) => db.venues.find((v) => v.id === id)),
        // venues(parent) {        
        //     return parent.venues.map(itemId => db.venues.find(item => item.id === itemId))
        // }
    },
    Ticket: {
        events: (parent) => parent.events.map((id) => db.events.find((e) => e.id === id)),
    },
    Attendee: {
        tickets: (parent) => parent.tickets.map((id) => db.tickets.find((t) => t.id === id)),
    },
    Mutation: {
        createVenue: (_, { name, location }) => {
          const newVenue = { id: String(db.venues.length + 1), name, location };
          db.venues.push(newVenue);
          return newVenue;
        },
        createEvent: (_, { name, date, venues }) => {
          const newEvent = { id: String(db.events.length + 1), name, date, venues };
          db.events.push(newEvent);
          return newEvent;
        },
        createTicket: (_, { events, seatNo }) => {
          const newTicket = { id: String(db.tickets.length + 1), events, seatNo };
          db.tickets.push(newTicket);
          return newTicket;
        },
        createAttendee: (_, { name, email }) => {
          const newAttendee = { id: String(db.attendees.length + 1), name, email, tickets: [] };
          db.attendees.push(newAttendee);
          return newAttendee;
        },
    },
};


//server setup
const server = new ApolloServer({
    typeDefs, 
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000}
});

console.log('Server ready at port', 4000);