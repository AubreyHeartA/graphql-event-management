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
        venue(_, args) {
          return db.venues.find((venue) => venue.id === args.id);
        },
        events() {
          return db.events;
        },
        event(_, args) {
          return db.events.find((event) => event.id === args.id);
        },
        tickets() {
          return db.tickets;
        },
        ticket(_, args) {
          return db.tickets.find((ticket) => ticket.id === args.id);
        },
        attendees() {
          return db.attendees;
        },
        attendee(_, args) {
          return db.attendees.find((attendee) => attendee.id === args.id);
        }
      },
    // nested queries
    Event: {
        venues: (parent) => parent.venues.map((id) => db.venues.find((v) => v.id === id)),
    },
    Ticket: {
        events: (parent) => parent.events.map((id) => db.events.find((e) => e.id === id)),
    },
    Attendee: {
        tickets: (parent) => parent.tickets.map((id) => db.tickets.find((t) => t.id === id)),
    },
    Mutation: {
        updateVenue(_, args) {
            db.venues = db.venues.map((v) => {
                if (v.id === args.id) {
                    return {...v, ...args.edits}
                }

                return v
            })

            return db.venues.find((v) => v.id === args.id);
        },
        updateEvent(_, args) {
            db.events = db.events.map((e) => {
                if (e.id === args.id) {
                    return {...e, ...args.edits}
                }
                return e
            })
            return db.events.find((e) => e.id === args.id);
        },
        updateTicket(_, args) {
            db.tickets = db.tickets.map((t) => {
                if (t.id === args.id) {
                    return {...t, ...args.edits}
                }
                return t
            })
            return db.tickets.find((t) => t.id === args.id);
        },
        updateAttendee(_, args) {
            db.attendees = db.attendees.map((a) => {
                if (a.id === args.id) {
                    return {...a, ...args.edits}
                }
                return a
            })
            return db.attendees.find((a) => a.id === args.id);
        }
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