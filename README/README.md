<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/igorslepenkov/bookstore">
    <img src="images/logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Bookstore</h3>

  <p align="center">The only IT bookstore that you need!</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

Hello, my name is Igor I am from Belarus and i am beginning full-stack developer. This project I made myself as graduation project while I was studing frontend development in TeachMeSkill IT school. I know that there are a lot of things to improve it, but i really think i made my best to finish it.

There are many different technologies I used to make this client-side application, there will be a short list further.

Here is the quick overview of my project's functionality:

<hr/>

### Great Adaptiveness

<br/>

![Product adaptiveness screenshot][screenshot-adaptivness]

You will never see something sticking out of page or horizontal scroll on pages of my app (Only in places where it meant to be :) ).

<hr/>

### Convenient search

<br/>

![Product search screenshot][screenshot-search]
It is really usefull and easy to use, also I used debounce to prevent multiple requests to API.

<hr/>

### Stylish bookpage

<br/>

![Product search screenshot][screenshot-bookpage]

Pretty and clear.

<hr/>

### REALLY Similar Books

![Product similar books screenshot][screenshot-similar]
I used my custom algorithm to provide similar books on client side (I know, I know, using it is slow and everything, but I wanted similar books to be as much similar as possible) + Good slider(it works well on all screen and slides ONLY one card further)

<hr/>

### Fully validated forms

![Product similar books screenshot][screenshot-form]
React Hook Forms library allowed me to create this fully validated forms, they are really everywhere (sign up, sing in, reset password, confirm password reset, update user)

<hr/>

### Production-ready firebase authentification

Authentification is based on firebase basic email and password authentification.
It is simple but works just fine for a small projects like mine.

<hr/>

### And so on ......on .......on .......on .......on

<hr/>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
- ![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
- [react-select](https://github.com/JedWatson/react-select)
- [react-hook-forms](https://react-hook-form.com/)
- [react-router-dom](https://github.com/remix-run/react-router)
- [framer-motion](https://github.com/framer/motion)
- [google-firebase](https://github.com/firebase/firebase-js-sdk)
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- [axios](https://github.com/axios/axios)
- [redux-persist](https://github.com/rt2zz/redux-persist)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

In order to use application locally you need Node and NPM installed on your machine. In all other cases just go to

```
https://igorslepenkov.github.io/bookstore/
```

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/igorslepenkov/bookstore/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/igorslepenkov/bookstore/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/igorslepenkov/bookstore/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/igorslepenkov/bookstore/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/igor-slepenkov-b17704198/
[product-screenshot]: images/screenshot.png
[screenshot-adaptivness]: images/adaptivness.png
[screenshot-search]: images/search.png
[screenshot-bookpage]: images/book-page.png
[screenshot-similar]: images/similar.png
[screenshot-form]: images/form.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
