// Sample data
  
let venues = [
    { id: '1', name: 'Convention Center', location: 'San Francisco'},
    { id: '2', name: 'Music Hall', location: 'New York'},
    { id: '3', name: 'Exhibition Hall', location: 'Los Angeles'},
    { id: '4', name: 'Conference Room', location: 'Chicago'},
    { id: '5', name: 'Stadium', location: 'London'},
];
  
let events = [
    { id: '1', name: 'GraphQL Conference', date: '2024-06-20', venue: ['1'] },
    { id: '2', name: 'JavaScript Meetup', date: '2024-07-15', venue: ['1'] },
    { id: '3', name: 'Tech Summit', date: '2024-08-10', venue: ['1'] },
    { id: '4', name: 'Startup Pitch Day', date: '2024-09-05', venue: ['1'] },
    { id: '5', name: 'Art Exhibition', date: '2024-10-20', venue: ['5'] },
];
  
let tickets = [
    { id: '1', events: ['1'], users: ['1'], seatNo: '1' },
    { id: '2', events: ['2'], users: ['2'], seatNo: '2'  },
    { id: '3', events: ['3'], users: ['3'], seatNo: '1' },
    { id: '4', events: ['4'], users: ['4'], seatNo: '1' },
    { id: '5', events: ['5'], users: ['5'], seatNo: '1' },
];

let attendees = [
    { id: '1', name: 'John Doe', email: 'john@example.com', tickets: ['1'] },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', tickets: ['1'] },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com', tickets: ['1'] },
    { id: '4', name: 'Bob Williams', email: 'bob@example.com', tickets: ['1'] },
    { id: '5', name: 'Ella Davis', email: 'ella@example.com', tickets: ['1'] },
];

export default { venues, events, tickets, attendees }
  