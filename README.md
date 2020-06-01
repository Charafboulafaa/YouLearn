- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [MVP Features](#mvp-features)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning

### Overview

**YouLearn**

**YouLearn** is a web app that will make users able to learn from youtube without distraction, the idea comes from a small comparison between Udemy and Youtube environment, and the goal is trying to make a version of youtube which is more dedicated to learners and which contains most of the tools available is MOOCs (Massive open online course) platforms.

<br>

### Wireframes


<br>

### MVP

The Min Valuable Product for YouLearn is consisting of providing the basic features of a MOOC app.

<br>

#### MVP Features

- Add youtube playlists of courses
- Display each playlist as a course
- Display content page of a course (videos)
- Track completion of courses (..%)

<br>

#### Libraries

|   Library    | Description                                                                            |
| :----------: | :------------------------------------------------------------------------------------- |
|    Axios     | Promise based HTTP client for the browser and node.js                                  |
| React Router | Collection of navigational components that compose declaratively with your application |

<br>

#### Data

|   API   | Quality Docs? | Website                                  | Sample Query                                    |
| :-----: | :-----------: | :--------------------------------------- | :---------------------------------------------- |
| Youtube |      Yes      | https://developers.google.com/youtube/v3 | https://www.googleapis.com/youtube/v3/playlists |

<br>

```
{
  "kind": "youtube#playlistItemListResponse",
  "etag": "zSAWMhGD4AZaMrbdLswLmV1iDg4",
  "nextPageToken": "CAEQAA",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "h4ZokUZW9av9i6sg8_fzDqyi2nE",
      "id": "UExpbGxHRi1SZnFiWl9oVjNnUWF2ODFiVUNwQ0FOV1hPdS4yQjZFRkExQjFGODk3RUFD",
      "snippet": {
        "publishedAt": "2019-04-24T16:52:00Z",
        "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
        "title": "Front End, Back End & Full Stack Web Development",
        "description": "In this video we wil discuss the technologies and responsabilities needed to become a front end, back end and full stack web developer.\n\nSponsor: Freelancer Bundle (Use \"brad25\" for 25% off)\nhttps://studywebdevelopment.com/freelancing.html\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eRZHzi3l-4Q/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eRZHzi3l-4Q/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eRZHzi3l-4Q/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/eRZHzi3l-4Q/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/eRZHzi3l-4Q/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Traversy Media",
        "playlistId": "PLillGF-RfqbZ_hV3gQav81bUCpCANWXOu",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "eRZHzi3l-4Q"
        }
      }
    }
  ],
  "pageInfo": {
    "totalResults": 63,
    "resultsPerPage": 1
  }
}

```

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ data-tests
      |__ images
|__ components/
      |__ Header/
            |__ Header.js
            |__ Header.css
      |__ Footer/
            |__ Footer.js
            |__ Footer.css
      |__ Search/
            |__ Search.js
            |__ Search.css
      |__ SearchResult/
            |__ SearchResult.js
            |__ SearchResult.css
      |__ Player/
            |__ Player.js
            |__ Player.css
      |__ VideoList/
            |__ VideoList.js
            |__ VideoList.css
      |__ Courses/
            |__ Courses.js
            |__ Courses.css

|__ pages/
      |__ Main/
            |__ Main.js
            |__ Main.css
      |__ MyCourses/
            |__ MyCourses.js
            |__ MyCourses.css
      |__ SignleCourse/
            |__ SignleCourse.js
            |__ SignleCourse.css
      |__ Learn/
            |__ Learn.js
            |__ Learn.css
```

<br>

#### Component Breakdown

|   Component   |    Type    | Description                                                               |
| :-----------: | :--------: | :------------------------------------------------------------------------ |
|    Header     | Functional | Contains the logo                                                         |
|    Footer     | Functional | Show informations about the app                                           |
|    Search     | Functional | Search input to look for and add playlists as courses                     |
| SearchResults | Functional | Shows courses (playlists) found                                           |
|    Player     | Functional | Shows the Youtube player of a single video with the title and description |
|   VideoList   | Functional | Shows all videos of the playlist                                          |
|    Courses    | Functional | Shows courses saved to learn                                              |


<br>

#### Component Estimates

| Task                          | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Clean the default boilerplate |    H     |      <1h       |      TBD      |     TBD     |
| Header & Footer               |    L     |       1h       |      TBD      |     TBD     |
| Search                        |    H     |       3h       |      TBD      |     TBD     |
| SearchResults                 |    H     |       2h       |      TBD      |     TBD     |
| Player                        |    H     |       1h       |      TBD      |     TBD     |
| VideoList                     |    H     |       2h       |      TBD      |     TBD     |
| Courses                       |    H     |       3h       |      TBD      |     TBD     |

<br>

#### Helper Functions

| Function | Description |
| :------: | :---------- |
|          |             |

<br>

### Post-MVP


<br>

---

## Project Delivery

### Code Showcase

```
code snippet here

```

### Code Issues & Resolutions