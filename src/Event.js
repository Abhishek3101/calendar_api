import React,{useState} from 'react'

export default function Event() {
    const [signin, setsignin] = useState(false)
    var gapi = window.gapi
    /* 
      Update with your own Client Id and Api key 
    */
    var CLIENT_ID = "201496038612-1kcc6523arqvbpltln2mad4g55mdfbj6.apps.googleusercontent.com"
    var API_KEY = "AIzaSyA5YUp_zslq2HEsP9Nuhxatv_6-UPkWUG0"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  
    
    function add(){
        gapi.load('client:auth2', initclient)
        function initclient(){
            console.log('loaded client')
            console.log(gapi.auth2.getAuthInstance().isSignedIn.get())
            gapi.client.init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => {
                console.log('loaded library');
                addEvent();
            })
           
            
        
          }

    }




    function addEvent(){
        var event = {
            'summary': 'Awesome Event!',
            'location': '800 Howard St., San Francisco, CA 94103',
            'description': 'Really great refreshments',
            'start': {
              'dateTime': '2021-12-16T16:35:00+05:30',
              'timeZone': 'Asia/Kolkata'
            },
            'end': {
              'dateTime': '2021-12-16T17:00:00+05:30',
              'timeZone': 'Asia/Kolkata'
            },
            'conferenceData': {
              'createRequest': {'requestId': "7qxalsvy0e"}
            },
            'attendees': [
              {'email': 'tmpatle99@gmail.com'},
              {'email': 'kkssonikumarkrishna506@gmail.com'}
            ],
            'reminders': {
              'useDefault': true,
            }
          }
  
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
            'sendNotifications': true,
            'conferenceDataVersion': 1
          })
  
          request.execute(event => {
            console.log(event.hangoutLink)
            window.open(event.htmlLink)
          })

    }
    return (
        <div>
            <button onClick={add}>Add Event</button>
            
        </div>
    )
}
