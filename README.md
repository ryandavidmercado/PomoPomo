# PomoPomo
<img src="https://github.com/ryandavidmercado/PomoPomo/blob/main/screenshots/preview.png?raw=true" width="50%" alt="Preview" />

A Pomodoro timer created in React. Alternates between study and break sessions with adjustable lengths, and keeps the user updated on session changes using time display in the tab title/page and an audio alert whenever the session changes.

[Live Demo](http://ryandavidmercado.github.io/PomoPomo/)

## Use
The app is intended to boost productivity by deliberately managing time spent on work and on break throughout the user's work day, implementing Francesco Cirillo's Pomodoro Technique. The user is tasked with dialing in their preferred work session and break session lengths, or leaving those lengths at their default settings of 25 and 5 minutes, respectively. The user then initiates their first work session, at which point the application automates timing this session and alternating between work and break sessions. The user is kept posted on the application page through the use of a time display, progress bar, and session indicator. When the app is not in focus, the user is kept aware of the current session and remaining time through a dynamic tab title, and alerted of session changes through an audio indicator.

## Purpose
The app was created to practice use of complex algorithmic logic and state management in React applications. The main state is comprehensive, covering current session, the adjustable session lengths, and the time elapsed since the beginning of a session. This central state is used to control a wide variety of components, from progress bars to time dials and text displays. Furthermore, this central state is updated throughout the application's runtime using complex algorithmic logic.

## Lessons Learned
* Keeping sub-components simple helps cultivate reusability and parsability of the codebase. This project was where I developed my "dummy component" technique for React application development, in which sub-components do not hold internal state and simply act as displays for parent state through props.
* Leveraging third-party hooks and components is a great way to simplify application code and keep codebases maintanable. The imperative third-party useInterval hook is deployed here to greatly simplify timer logic.

## Tech Stack
* React
* Bootstrap
* useInterval hook

## Future Goals
* Create a more attractive interface using CSS Modules and react-responsive, exemplified by another project of mine: FlashyCards.
* Build out more comprehensive task management:
  * To-Do List:
    * Allow users to input current tasks and to track the number of work sessions spent on them
    * Allow users to mark tasks as complete
  * Calendar:
    * Allow users to schedule tasks on a recurring or singular basis, and alert users of said tasks on application open
