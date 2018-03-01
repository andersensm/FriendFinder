# FriendFinder

A web application accessed through the heroku website which has the end-user fill out a list of questions in survey-format, and based on the user's responses will connect them to the closest friend's score within the API's database that I have built. Upon filling out the survey questions including their name and image URL, they will hence be included within the API database so any future users can potentially be linked as the 'closet friend' to anyone that has previously filled out the survey form and submitted it on the website.

Designed to use the node.js & express.js for server-side code, and heroku for front-end deployment:

## **Code Style**
 * Object-Oriented Programming (OOP).
## **Code Example**
  The application allows users to also input gender, and they can be compared to their closest friends of similar gender.

      module.exports = function(app) {

        app.get("/api/maleFriends", function(req, res) {
          res.json(maleFriends);
        });

        app.post("/api/maleFriends", function(req, res) {
            maleFriends.push(req.body);
            res.json(true);
        });

        app.get("/api/femaleFriends", function(req, res) {
          res.json(femaleFriends);
        });

        app.post("/api/femaleFriends", function(req, res) {
            femaleFriends.push(req.body);
            res.json(true);
        });

      }
## **Video Tutorials**
   * https://drive.google.com/file/d/17Wa7fLRgYfmhQ20XMIO_sRWSNj2zdgHV/view
   * Please note, the drop down options within the survery questions do not display in the google videos, they will display properly when accessing on Heroku.
## **Installation**
    * Nothing is required to use and access this application, enjoy!
    * https://tranquil-bayou-92776.herokuapp.com/
## **How to use**
  ### Customer: Point of View
    * Please take 5 mins to watch the video tutorial
    * Access the Heroku Link provided under Installation
    * Test out the database to your hearts content
## **Credits**
This application was built by Sean Andersen, Full Stack Web Development Student at George Washington University's Coding Boot Camp.
License
Attribution-NonCommercial 4.0
International (CC BY-NC 4.0)

Sean Andersen-2018 (CC)
