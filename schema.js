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
        updateVenue(id: ID!, edits: EditVenueInput!): Venue
        updateEvent(id: ID!, edits: EditEventInput!): Event
        updateTicket(id: ID!, edits: EditTicketInput!): Ticket
        updateAttendee(id: ID!, edits: EditAttendeeInput!): Attendee
    }

    input EditVenueInput{
        name: String
        location: String
    }

    input EditEventInput{
        name: String
        date: String
        venues: [ID!]
    }

    input EditTicketInput{
        events: [ID!]
        seatNo: String
    }

    input EditAttendeeInput{
        name: String
        date: String
        tickets: [ID!]
    }
`