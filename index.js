import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// database and types
import db from './_db.js';
import { typeDefs } from './schema.js';

// Define the resolvers

const resolvers = {
    Query: {
        // venues: () => venues,
        // events: () => events,
        // tickets: () => tickets,
        // attendees: () => attendees,

        
    },
    Mutation: {
        createVenue: (_, { name, location }) => {
            const newVenue = { id: String(venues.length + 1), name, location };
            venues.push(newVenue);
            return newVenue;
        },
        createEvent: (_, { name, date, venue }) => {
            const newEvent = { id: String(events.length + 1), name, date, venue };
            events.push(newEvent);
            return newEvent;
        },
        createTicket: (_, { events, users, seatNo }) => {
            const newTicket = { id: String(tickets.length + 1), events, users, seatNo };
            tickets.push(newTicket);
            return newTicket;
        },
        createAttendee: (_, { name, email }) => {
            const newAttendee = { id: String(attendees.length + 1), name, email, tickets: [] };
            attendees.push(newAttendee);
            return newAttendee;
        },
    },
    Event: {
        venue: (parent) => parent.venue.map(id => venues.find(v => v.id === id)),
    },
    Ticket: {
        events: (parent) => parent.events.map(id => events.find(e => e.id === id)),
        users: (parent) => parent.users.map(id => attendees.find(a => a.id === id)),
    },
    Attendee: {
        tickets: (parent) => parent.tickets.map(id => tickets.find(t => t.id === id)),
    }
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