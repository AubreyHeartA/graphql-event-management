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
  
  Mutation:{
    //Venues
    // Deletes a venue by ID, throws an error if the venue doesn't exist
    deleteVenue(_, { id }) {
      const venueExists = db.venues.some((v) => v.id === id);
      if (!venueExists) {
        throw new Error(`Venue with ID ${id} not found`);
      }
      db.venues = db.venues.filter((v) => v.id !== id);
      return db.venues; 
    },
    // Adds a new venue with random ID, requires name and location
    addVenue(_, { venue }) {
      if (!venue.name || !venue.location) {
        throw new Error("Both name and location are required to add a venue");
      }
      let newVenue = {
        ...venue,
        id: Math.floor(Math.random() * 1000).toString()
      };
      db.venues.push(newVenue);
      return newVenue;
    },
    // Updates a venue by ID, throws an error if the venue doesn't exist
    updateVenue(_, { id, edits }) {
      let found = false;
      const updatedVenues = db.venues.map((venue) => {
        if (venue.id === id) {
          found = true;
          return { ...venue, ...edits };
        }
        return venue;
      });
      if (!found) {
        throw new Error(`Venue with ID ${id} not found`);
      }
      db.venues = updatedVenues;
      return db.venues.find(v => v.id === id);
    },

    // Events
    // Deletes an event by ID, throws an error if the event doesn't exist
    deleteEvent(_, { id }) {
      const eventExists = db.events.some((e) => e.id === id);
      if (!eventExists) {
        throw new Error(`Event with ID ${id} not found`);
      }
      db.events = db.events.filter((e) => e.id !== id);
      return db.events;
    },
    // Adds a new event with random ID, requires name, date, and venue IDs
    addEvent(_, { event }) {
      if (!event.name || !event.date || !event.venues) {
        throw new Error("Name, date, and venues are required to add an event");
      }
      let newEvent = {
        ...event,
        id: Math.floor(Math.random() * 1000).toString()
      };
      db.events.push(newEvent);
      return newEvent;
    },
    // Updates an event by ID, throws an error if the event doesn't exist
    updateEvent(_, { id, edits }) {
      let found = false;
      const updatedEvents = db.events.map((event) => {
        if (event.id === id) {
          found = true;
          return { ...event, ...edits };
        }
        return event;
      });
      if (!found) {
        throw new Error(`Event with ID ${id} not found`);
      }
      db.events = updatedEvents;
      return db.events.find(e => e.id === id);
    },

    // Tickets
    // Deletes a ticket by ID, throws an error if the ticket doesn't exist
    deleteTicket(_, { id }) {
      const ticketExists = db.tickets.some((t) => t.id === id);
      if (!ticketExists) {
        throw new Error(`Ticket with ID ${id} not found`);
      }
      db.tickets = db.tickets.filter((t) => t.id !== id);
      return db.tickets;
    },
    // Adds a new ticket with random ID, requires event IDs and seat number
    addTicket(_, { ticket }) {
      if (!ticket.events || !ticket.seatNo) {
        throw new Error("Events and seatNo are required to add a ticket");
      }
      let newTicket = {
        ...ticket,
        id: Math.floor(Math.random() * 1000).toString()
      };
      db.tickets.push(newTicket);
      return newTicket;
    },
    // Updates a ticket by ID, throws an error if the ticket doesn't exist
    updateTicket(_, { id, edits }) {
      let found = false;
      const updatedTickets = db.tickets.map((ticket) => {
        if (ticket.id === id) {
          found = true;
          return { ...ticket, ...edits };
        }
        return ticket;
      });
      if (!found) {
        throw new Error(`Ticket with ID ${id} not found`);
      }
      db.tickets = updatedTickets;
      return db.tickets.find(t => t.id === id);
    },

    // Attendees
    // Deletes an attendee by ID, throws an error if the attendee doesn't exist
    deleteAttendee(_, { id }) {
      const attendeeExists = db.attendees.some((a) => a.id === id);
      if (!attendeeExists) {
        throw new Error(`Attendee with ID ${id} not found`);
      }
      db.attendees = db.attendees.filter((a) => a.id !== id);
      return db.attendees;
    },
    // Adds a new attendee with random ID, requires name, email, and ticket IDs
    addAttendee(_, { attendee }) {
      if (!attendee.name || !attendee.email || !attendee.tickets) {
        throw new Error("Name, email, and tickets are required to add an attendee");
      }
      let newAttendee = {
        ...attendee,
        id: Math.floor(Math.random() * 1000).toString()
      };
      db.attendees.push(newAttendee);
      return newAttendee;
    },
    // Updates an attendee by ID, throws an error if the attendee doesn't exist
    updateAttendee(_, { id, edits }) {
      let found = false;
      const updatedAttendees = db.attendees.map((attendee) => {
        if (attendee.id === id) {
          found = true;
          return { ...attendee, ...edits };
        }
        return attendee;
      });
      if (!found) {
        throw new Error(`Attendee with ID ${id} not found`);
      }
      db.attendees = updatedAttendees;
      return db.attendees.find(a => a.id === id);
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