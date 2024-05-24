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
    
  }
`