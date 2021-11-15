# Project Overview
# [The-Beauty-Bar](https://kiayaand20.github.io/The-Beauty-Bar/)

## Project Name
The Beauty Bar

## Project Description
Basic application that will provide users with the ability to search for a variety of beauty products.

## API and Data Sample
Makeup API: http://makeup-api.herokuapp.com/api/v1/products.json 
```
[
{
"id": 1048,
"brand": "colourpop",
"name": "Lippie Pencil",
"price": "5.0",
"price_sign": "$",
"currency": "CAD",
```

## Wireframes
![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1636729911/beauty_bar_wireframe_rncvtp.png)
https://res.cloudinary.com/kacloud20/image/upload/v1636729911/beauty_bar_wireframe_rncvtp.png

## MVP & Post-MVP
### MVP 
- Utilize external API that returns makeup/beauty data using an Axios GET request.
- Create option lists for users to search for products by category and receive results.
- Add page refresh properties to the title of the application.
- Apply Flexbox for styling and formatting of application.

### PostMVP  
- Create a "Back to Top" button for page scrolling.
- Utilize another API to add more features to the application.

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Nov 5| API Selection/Wireframes/Timeframes/Priority Matrix| Complete
|Nov 8| Core Application Structure - Javascript, HTML, CSS | Complete
|Nov 9| Coding| Complete
|Nov 10| Coding/MVP work | Complete
|Nov 11| MVP|Complete
|Nov 12| Styling/CSS/PostMVP | Complete
|Nov 13| Final Application Review| Complete
|Nov 15| Presentation | Incomplete

## Priority Matrix
![priority_matrix](https://res.cloudinary.com/kacloud20/image/upload/v1636730560/priority_matrix_blw9nz.png)
https://res.cloudinary.com/kacloud20/image/upload/v1636730560/priority_matrix_blw9nz.png

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Working with APIs| H | 4hrs| 4.5hrs | 4.5hrs |
|Javascript Framework | H | 4hrs| 6hrs | 6hrs |
|Establishing HTML| H|4hrs| 4.5hrs|4.5hrs|
|Working with Images|M|2hrs|3hrs|3hrs|
|Flexbox| M|3hrs| 4hrs|4hrs
|Navbar Styling| M|1.5hrs| 2hrs|2hrs
|Media Queries| M|1hr|1hrs|1hrs|
|CSS Formatting| H|4hrs| 5hrs|5hrs
|Debugging| H|4hrs| 4hrs|4hrs
|Pseudocode| H|4hrs| 3hrs|3hrs
|Application Testing| H|4hrs| 3hrs|3hrs
| Total | H | 35hrs| 40hrs | 40hrs |

## Code Snippet
Description - This snippet of code allows users to scroll back to the top of the application after viewing product results.

See code snippet below:

```
let topbutton = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
```

## Change Log
 Styling of the application was changed to efficiently display functionality and increase usability. 