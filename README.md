# Dashtrack
An open-source using localStorage, HTML, CSS, and JavaScript to create a simple running tracker app for mobile and desktop users.

## How to use
1. Go to https://kyaaron.github.io/dashtrack-running-app/ on the mobile/desktop device of your choice
2. Enter your running data for the day and submit
3. The application will keep track of all your running exercises using your device's browser localStorage
4. If you want to clear data, such as keeping track of weekly running, you can do that with the 'clear data' button

## A note on localStorage
If you have not used or are not familiar with localStorage, it is a built-in mini-database of sorts that all browsers come with. It will save data in key: value pairs across multiple browser sessions, so when you enter data in this app, close the browser, then reopen, the data is still there! A popular app that uses this type of technology is Wordle.

HOWEVER, data is not saved across multiple browsers at the same time. There is no syncing. If you enter in running data on your mobile phone, then access this app later on your laptop, the data will not be there. So it is recommended to pick one device (probably your mobile phone) and use it exclusively.

This also means I do not have your data. It ONLY resides on your device, not in some secret server I have in my underground layer.

## Future plans
- I would like to improve the stats, such as automatically calculating weekly runs and average pace
- I would like to add a table to show all running records for all time (until cleared by the user)
- I would like to improve the desktop UI to separate it from mobile and take advantage of extra screenspace
