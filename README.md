# Giphy
    
 Search and Favorites

This is a Giphy API searching and favoriting application which allows the user to save images and sort them into categories.  The user can access two views in this application:

### Search View

- Allow a user to enter a search string and submit a search request.
- Query the `Giphy API Search Endpoint` with the given search string FROM THE SERVER.
- Display the results on the DOM.
- Allow a user to Favorite any of the result images. You'll need to think about what information to save to your own database. Generally you only store the minimum needed to show this image again on the Favorites view.

### Favorites View

- Allow a user to see all of the Giphy images they have Favorited. The actual images need to appear on the DOM.
- Allow a user to set a category for a favorite image.
    - Each favorite image can only have 1 category at a time.
    - The category needs to be one of the categories in the database.


## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:3000`
