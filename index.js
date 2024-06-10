// import dependencies
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// import database and types
import db from './_db.js';
import { typeDefs } from './schema.js';

// Define the resolvers
const resolvers = {

    // 
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
    Mutation:{
        //Venues
        deleteVenue(_, args) {
            db.venues = db.venues.filter((v) => v.id !== args.id)
            return db.venues;
        },
        addVenue(_, args) {
            let newVenue = {
                ...args.venue,
                id: Math.floor(Math.random() * 1000).toString()
            }
            db.venues.push(newVenue)
            return newVenue;
        },
        updateVenue(_, args) {
            db.venues = db.venues.map((v) => {
                if (v.id === args.id) {
                    return {...v, ...args.edits}
                }
                return v
            })
            return db.venues.find((v) => v.id === args.id)
        },

        // Events
        deleteEvent(_, args) {
            db.events = db.events.filter((e) => e.id !== args.id);
            return db.events;
        },
        addEvent(_, args) {
            let newEvent = {
                ...args.event,
                id: Math.floor(Math.random() * 1000).toString()
            };
            db.events.push(newEvent);
            return newEvent;
        },
        updateEvent(_, args) {
            db.events = db.events.map((e) => {
                if (e.id === args.id) {
                    return { ...e, ...args.edits };
                }
                return e;
            });
            return db.events.find((e) => e.id === args.id);
        },
        
        // Tickets
        deleteTicket(_, args) {
                db.tickets = db.tickets.filter((t) => t.id !== args.id);
                return db.tickets;
        },
        addTicket(_, args) {
            let newTicket = {
                ...args.ticket,
                id: Math.floor(Math.random() * 1000).toString()
            };
            db.tickets.push(newTicket);
            return newTicket;
        },
        updateTicket(_, args) {
            db.tickets = db.tickets.map((t) => {
                if (t.id === args.id) {
                    return { ...t, ...args.edits };
                }
                return t;
            });
            return db.tickets.find((t) => t.id === args.id);
        },
        
        // Attendees
        deleteAttendee(_, args) {
            db.attendees = db.attendees.filter((a) => a.id !== args.id);
            return db.attendees;
        },
        addAttendee(_, args) {
            let newAttendee = {
                ...args.attendee,
                id: Math.floor(Math.random() * 1000).toString()
            };
            db.attendees.push(newAttendee);
            return newAttendee;
        },
        updateAttendee(_, args) {
            db.attendees = db.attendees.map((a) => {
                if (a.id === args.id) {
                    return { ...a, ...args.edits };
                }
                return a;
            });
            return db.attendees.find((a) => a.id === args.id);
        }
    }
};


// server setup for GraphQL requests
const server = new ApolloServer({
  typeDefs, 
  resolvers,
});

// port
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000}
});

console.log('Server ready at port', 4000);