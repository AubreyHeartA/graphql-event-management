const venues = [
    { id: '1', name: 'Convention Center', location: 'San Francisco' },
    { id: '2', name: 'Music Hall', location: 'New York' },
    { id: '3', name: 'Exhibition Hall', location: 'Los Angeles' },
    { id: '4', name: 'Conference Room', location: 'Chicago' },
    { id: '5', name: 'Stadium', location: 'London' },
];
  
const events = [
    { id: '1', name: 'GraphQL Conference', date: '2024-06-20', venues: ['1'] },
    { id: '2', name: 'JavaScript Meetup', date: '2024-07-15', venues: ['1'] },
    { id: '3', name: 'Tech Summit', date: '2024-08-10', venues: ['1'] },
    { id: '4', name: 'Startup Pitch Day', date: '2024-09-05', venues: ['1'] },
    { id: '5', name: 'Art Exhibition', date: '2024-10-20', venues: ['5'] },
];
  
const tickets = [
    { id: '1', events: ['1'], seatNo: '1' },
    { id: '2', events: ['2'], seatNo: '2' },
    { id: '3', events: ['3'], seatNo: '1' },
    { id: '4', events: ['4'], seatNo: '1' },
    { id: '5', events: ['5'], seatNo: '1' },
];
  
const attendees = [
    { id: '1', name: 'John Doe', email: 'john@example.com', tickets: ['1'] },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', tickets: ['1'] },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com', tickets: ['1'] },
    { id: '4', name: 'Bob Williams', email: 'bob@example.com', tickets: ['1'] },
    { id: '5', name: 'Ella Davis', email: 'ella@example.com', tickets: ['1'] },
];
  
export default { venues, events, tickets, attendees };
  