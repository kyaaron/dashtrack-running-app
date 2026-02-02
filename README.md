# Dashtrack
This is an open-source application using localStorage to store running history for the user. The user can store their runs each day, and the application will remember the historical running workouts in future browser sessions! This application is available on both mobile and desktop viewports.

**Link to project:** https://kyaaron.github.io/dashtrack-running-app/

## How it's made
It's built using HTML, CSS, and JavaScript (mostly procedural but each run is an object that is created). Originally I was planning to use Tailwind CSS, but then I forgot and was mostly through the normal CSS, so I ended up finishing it in my own CSS styling. Each run is an object that is created, and there are several functions used to take the object data and apply them in several places. The object data is also stored in localStorage, and I use the localStorage API to set, get, and clear storage based on what the user inputs.

## How to use
1. Go to https://kyaaron.github.io/dashtrack-running-app/ on the mobile/desktop device of your choice
2. Enter your running data for the day and submit
3. The application will keep track of all your running exercises using your device's browser localStorage
4. If you want to clear data, such as keeping track of weekly running, you can do that with the 'clear data' button

## A note on localStorage
If you have not used or are not familiar with localStorage, it is a built-in mini-database of sorts that all browsers come with. It will save data in key: value pairs across multiple browser sessions, so when you enter data in this app, close the browser, then reopen, the data is still there! A popular app that uses this type of technology is Wordle.

HOWEVER, data is not saved across multiple browsers at the same time. There is no syncing. If you enter in running data on your mobile phone, then access this app later on your laptop, the data will not be there. So it is recommended to pick one device (probably your mobile phone) and use it exclusively.

This also means I do not have your data. It ONLY resides on your device, not in some secret server I have in my underground layer.

## Optimizations
- I would like to improve the stats, such as automatically calculating weekly runs and average pace
- I would like to add a table to show all running records for all time (until cleared by the user)
- I would like to improve the desktop UI to separate it from mobile and take advantage of extra screenspace

## Lessons learned
This was my first project using localStorage. It's really easy to work with, and big time apps like Wordle prove that localStorage is a great way to store data locally in the browser that is private for the user. The user is also in control of the data. I also used GenAI (I gave it the "role" of being a product owner) to create an image of what the app could look like, and I used that to help plan the design. This is something I plan to do more with my upcoming apps so I can mimic the real world of working with a product team.
