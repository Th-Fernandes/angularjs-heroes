# [LEGACY] AngularJs Heroes - Find out the best oportunities
<p>
  this project was refactored to be used into laravel. The new version is available at
  <a href="https://github.com/Th-Fernandes/angularjs-heroes-laravel">this repo.</a>

</p>
<p>
  AngularJs Heroes is a platform to register and apply for heroes jobs opportunities. Heroes 
  publish their opportunities and the freelancer heroes applies on it. Easy to use, 100% free.
</p>

## Features

<ul>
  <li>sign-in and sign-up by e-mail</li>
  <li>list heroes</li>
  <li>show a detailed info page about any registered hero</li>
  <li>shows the last created hero real-time</li>
</ul>

## Usage

<p>
  the app relies on two commands: <code>npm run client</code> which bootstraps the front-end environment and
  <code>npm run server</code> which bootstraps its back-end. So here are two options:
</p>

### Using concurrently

<p>
  This project is using a library to run both front and back-end in a single execution. To do so. just run
  <code>npm run start</code> and let magic happens!
</p>


### Run each of them by splitted terminal
<p>
  It is ok to run client and server separately. All you have to do is run the commands bellow on different 
  command lines.
</p>

<ol>
  <li>
    <code>
      npm run client
    </code>
  
  </li>
  <li>
    <code>
        npm run server
    </code>
  </li>
</ol>

after following usage steps, just visit http://localhost:8000 to access client and Visit http://localhost:3000 to access API's endpoints

### Resources
Here are the endpoints of our API.

<ul>
  <li>/heroes -> GET, POST</li>
  <li>/heroes/id -> GET</li>
  <li>/opportunities -> GET, POST</li>
</ul>

## Demo
Take a look at the core of our app (for now)

<video width="50%" controls>
  <source src="./.github/demo.mp4" >
  Your browser does not support the video tag.
</video>