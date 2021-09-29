<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://images.punkapi.com/v2/192.png" alt="Logo" width="60" height="240">
  </a>

  <h3 align="center">Punk Beer Web App</h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
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
        <li><a href="#installation-and-setup">Installation and Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#known-issues">Known Issues</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<b>Please use the With-Wallet(default) branch to view the latest changes!</b>

The [punk api](https://punkapi.com/) doesn’t require a key to use and provides a lot of information in its responses.

Create a web app listing of some/all beers. 

Possibly add search if the API allows it. 

You should then be able to show a separate list of the items you favorited. This will of course not be saved to any database.

Bonus 1: If you can add the sound of opening beer when you click on the image of beer (find random sound from the internet).
Bonus 2: Create a "Get Random Beer". When someone clicks it show them one random beer.

Bonus 3: If you think of you favourite list as a shopping cart, make sure you have a unique set of beers in it (no repetitions). Hint: bonus points for using hashed data to achieve this.

Bonus 3(alt): Imagine that Punk API could eventually change a beer. Make sure that upon viewing the Favourites list, you show which beers have not changed and which have been updated since your last viewing of the Favourites list (no need to show the changes, just whether there is something different or not). 

Bonus 4: Have a look at the [ethers.js library](https://docs.ethers.io/v5/). Try to make a wallet and connect it to [Metamask (Chrome Widget)](https://metamask.io).

Bonus 5: Unlock the FE functionality only if a wallet is connected.

Bonus 6: Implement "Disconnect Wallet" functionality.

### Built With

* [React]
* [React Router]
* [Redux-Saga]
* [Axios]
* [Redux-Persist]
* [Punk API]
* [ethers.js]
* [Material UI]



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Metamask Browser Extension

  ```sh
  https://metamask.io/

<!-- Installation -->
### Installation and Setup

1. Clone the repo

   ```sh
   git clone https://github.com/stefanpetkov90/beer-punk.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the project
   ```sh
   npm start
   ```
4. Run in Browser
   ```sh
   http://localhost:3000/
   ```



<!-- USAGE EXAMPLES -->
## Usage

<b>Please use the With-Wallet(default) branch to view the latest changes!</b>

Wallet Login Page
- Upon starting the application, the user is required to have the Metamask wallet browser extension in order to log in.
- If the Metamask extension is available, upon clicking on the Connect with Metamask button, the extension will pop up and ask to log in with an account.
- If the Metamask extension is not available, the application will return a warning message, prompting to install it in order to continue. 

Home Page
- The user has the ability to send API search requests to the Punk Beer API and display them in the Home Page.
- The user can add his favorite beverages using the star icon in the top right corner of each beer card, when a favorite beer is selected, it appears in the Favorite page, which is selectable from the Navigation bar.

Favorite Page
- The user can view and remove the selected beers clicking on the star icon. 
- The favorite beers are persisted on page refresh.

Random Beer Page
- The user can select a random beer provided by the Beer Punk API. The random button generates a random beer on every click.

Wallet Page
- The logged in user can view their account number and account balance.
- The user can disconnect from the application, using the Disconnect Wallet button. This action returns the user to the Metamask authentication page and prompts a message from Metamask to connect an account. 
- Upon reading the ethers.js documentation and other similar libraries, I could not find a working solution to fully disconnect from the Metamask wallet extension.


<!-- KNOWN -->
## Known Issues

- Upon reading the ethers.js documentation and other similar libraries, I could not find a working solution to fully disconnect from the Metamask wallet extension.
- To fully disconnect the user has to open the Metamask extension and disconnect from there.



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Stefan Petkov - stefan.petkov@genericsoft.eu




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
