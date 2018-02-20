# React API Lab

Practice what we've learned in the past few days by making a small React app. This could be similar to the countries app we made that has a dropdown menu which when selected displays some information about that option. You could also select from a list of api's below or be creative and make something of your choice.

This will be a pairing exercise. Remember to take turns coding every so often.

Also remember to have a container and component folder. Containers will handle data requests, state changes and callbacks. Components will handle visualation logic (and only have access to props).

Sample APIs:

## Pokemon API

http://pokeapi.co/

E.g. make a dropdown of the original Pokemon which you can select to see their details. This API uses URLS to link to more information rather than having one huge JSON response, so you will need to do a second AJAX request when an option is selected.

To get more than 20 Pokemon returned at once you can add a limit, e.g. http://pokeapi.co/api/v2/pokemon/?limit=151
