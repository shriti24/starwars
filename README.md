# starwars

    ## Features

    - View a list of all Star Wars characters.
        - Has pagination feature.
    - Search for specific characters by name.
        - renders search list in the list page. 
        - reset button to fetch all the list. 
    - Mark characters as favorites for quick access.
         - Clicking on Favaourite Icon in Header will render the Favourites stored.
            ( dispatching and storing the favourites using redux-toolkit. Ideally should be stored in the local storage for us to avoid loss of data on re-load. But for now Its stored in store maintained by redux. )
         - Clicking delete Icon will remove from Favourites.  
    - Click on the character name routes to description page. 
    - Logo click will take to the Home page. 
       

    ## api
    - https://www.swapi.tech/api/people/${characterId} - for description based on Id.
    - https://www.swapi.tech/api/people/?name=${name} - for searching 
    - https://swapi.tech/api/people?page=${page}&limit=10 - list all character names with pagination .

    ##test
    Unit test for Header component with RTL.

    ##Considerations in this project. 
        - For the Bonus ability I would push the height or gender .
            - Input box to input values 
            - save it in the store using redux as a map[] wich has uid: {gender , height} . If any value existing in this store take from here or from Api.
        - Write test cases for all the component. also install enzyme as there are many 3rd party libs. 
        - For real time I would avoid so many mui components and create own User-defined components.
        - keep different Types files for components. 

    ## Installation

    1. Clone the repository:
        git clone https://github.com/yourusername/starwars.git
        ```
    2. Navigate to the project directory:
        cd starwars
    3. Install dependencies:
        npm install
        ```

    ## Usage

    1. Start the development server:
        npm start
    2. Open your browser and navigate to `http://localhost:3000`.

    ## Contributing
    @shriti24

