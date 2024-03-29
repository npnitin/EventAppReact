import {CREATE_EVENT,UPDATE_EVENT, DELETE_EVENT } from './EventConstants';

const initialState = [
    {
      id: '1',
      title: 'Trip to Tower of London',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
        }
      ]
    },
    {
      id: '3',
      title: 'Trip to Pnchgani',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Sam',
      hostPhotoURL: 'https://randomuser.me/api/portraits/women/1.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/women/42.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/women/43.jpg'
        },
        {
          id: 'd',
          name: 'Carlet',
          photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
        },
        {
          id: 'c',
          name: 'Jenny',
          photoURL: 'https://randomuser.me/api/portraits/women/4.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/43.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/women/42.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/women/43.jpg'
        },
        {
          id: 'd',
          name: 'Carlet',
          photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
        },
        {
          id: 'c',
          name: 'Jenny',
          photoURL: 'https://randomuser.me/api/portraits/women/4.jpg'
        }
      ]
    }
  ]

  const EventReducer = (state=initialState,action) =>{
      switch(action.type){
          case CREATE_EVENT:
                return [...state,action.payload.event]
        case UPDATE_EVENT:
                return [
                    ...state.filter(event => event.id !== action.payload.event.id),action.payload.event
                ]
        case DELETE_EVENT:
                return [
                    ...state.filter(event=>event.id !== action.payload.eventId)
                ]
        default:
            return state;
      }
  }


  export default EventReducer;