export const typeDefs = `#graphql

    # Define the Venue type
    type Venue {
        id: ID!
        name: String!
        location: String!
    }

    # Define the Event type
    type Event {
        id: ID!
        name: String!
        date: String!
        venues: [Venue!]!
    }

    # Define the Ticket type
    type Ticket {
        id: ID!
        events: [Event!]!
        seatNo: String!
    }

    # Define the Attendee type
    type Attendee {
        id: ID!
        name: String!
        email: String!
        tickets: [Ticket!]!
    }

    # Define the Query type for fetching data
    type Query {
        venues: [Venue!]!               # Fetch all Venues
        venue(id: ID!): Venue           # Fetch a Venue by ID
        events: [Event!]!               # Fetch all Events
        event(id: ID!): Event           # Fetch an Event by ID
        tickets: [Ticket!]!             # Fetch all Tickets
        ticket(id: ID!): Ticket         # Fetch a Ticket by ID
        attendees: [Attendee!]!         # Fetch all Attendees
        attendee(id: ID!): Attendee     # Fetch an Attendee by ID
    }

    # Define the Mutation type for modifying data
    type Mutation {
        addVenue(venue: AddVenueInput!): Venue                  # Add a new venue
        deleteVenue(id: ID!): [Venue]                           # Delete an existing venue by ID
        updateVenue(id:ID! edits:EditVenueInput!): Venue        # Update an existing venue by ID
        
        addEvent(event: AddEventInput!): Event                      # Add a new event
        deleteEvent(id: ID!): [Event]                               # Delete an existing event by ID
        updateEvent(id: ID!, edits: EditEventInput!): Event         # Update an existing event by ID
        
        addTicket(ticket: AddTicketInput!): Ticket                      # Add a new ticket
        deleteTicket(id: ID!): [Ticket]                                 # Delete an existing ticket by ID
        updateTicket(id: ID!, edits: EditTicketInput!): Ticket          # Update an existing ticket by ID
        
        addAttendee(attendee: AddAttendeeInput!): Attendee                  # Add a new venue
        deleteAttendee(id: ID!): [Attendee]                                 # Delete an exisiting attendee by ID
        updateAttendee(id: ID!, edits: EditAttendeeInput!): Attendee        # Update an existing attendee by ID

    }
    
    # Input type for adding a new Venue
    input AddVenueInput {
        name: String!,
        location: String!
    }
    
    # Input type for edting an existing Venue
    input EditVenueInput {
        name: String,
        location: String
    }

    # Input type for adding a new Event
    input AddEventInput {
        name: String!
        date: String!
        venues: [ID!]!
    }
        
    # Input type for editing an existing Event
    input EditEventInput {
        name: String
        date: String
        venues: [ID!]
    }

    # Input type for adding a new Ticket
    input AddTicketInput {
        events: [ID!]!
        seatNo: String!
    }

    # Input type for editing an existing Ticket
    input EditTicketInput {
        events: [ID!]
        seatNo: String
    }

    # Input type for adding a new Attendee
    input AddAttendeeInput {
        name: String!
        email: String!
        tickets: [ID!]!
    }

    # Input type for editing an existing Attendee
    input EditAttendeeInput {
        name: String
        email: String
        tickets: [ID!]
    }

`;