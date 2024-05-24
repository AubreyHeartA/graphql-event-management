export const typeDefs = `#graphql
  type Venue {
    id: ID!
    name: String!
    location: String!
  }

  type Event {
    id: ID!
    name: String!
    date: String!
    venues: [Venue!]!
  }

  type Ticket {
    id: ID!
    events: [Event!]!
    seatNo: String!
  }

  type Attendee {
    id: ID!
    name: String!
    email: String!
    tickets: [Ticket!]!
  }

  type Query {
    venues: [Venue!]!
    venue(id: ID!): Venue
    events: [Event!]!
    event(id: ID!): Event
    tickets: [Ticket!]!
    ticket(id: ID!): Ticket
    attendees: [Attendee!]!
    attendee(id: ID!): Attendee
  }

  type Mutation {
    addVenue(venue: AddVenueInput!): Venue
    deleteVenue(id: ID!): [Venue]
    updateVenue(id:ID! edits:EditVenueInput!): Venue
    
    addEvent(event: AddEventInput!): Event
    deleteEvent(id: ID!): [Event]
    updateEvent(id: ID!, edits: EditEventInput!): Event
    
    addTicket(ticket: AddTicketInput!): Ticket
    deleteTicket(id: ID!): [Ticket]
    updateTicket(id: ID!, edits: EditTicketInput!): Ticket
    
    addAttendee(attendee: AddAttendeeInput!): Attendee
    deleteAttendee(id: ID!): [Attendee]
    updateAttendee(id: ID!, edits: EditAttendeeInput!): Attendee

  }
  input AddVenueInput {
    name: String!,
    location: String!
  }
  input EditVenueInput {
    name: String,
    location: String
  }

  input AddEventInput {
    name: String!
    date: String!
    venues: [ID!]!
  }
  input EditEventInput {
    name: String
    date: String
    venues: [ID!]
  }


  input AddTicketInput {
    events: [ID!]!
    seatNo: String!
  }
  input EditTicketInput {
    events: [ID!]
    seatNo: String
  }


  input AddAttendeeInput {
    name: String!
    email: String!
    tickets: [ID!]!
  }
  input EditAttendeeInput {
    name: String
    email: String
    tickets: [ID!]
  }

`;
