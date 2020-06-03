# Draxis Weather Forecasts

> 2nd Step Draxis Assignment Project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# OR with docker-compose
$ cd path_to_folder
$ docker-compose up --build -d

```

### Project Structure

| Folder | Description |
| ------ | ------ |
| components | Contains all the components of the application |
| layouts | Contains the application layout component and the error layout |
| pages | Contains the container components of the projext |
| static | Contains static files such as favicon etc. |
| store | Contains the vuex store files |

The two main components of application are the **Map** component and the **ForecastDetails** component.
The Map component use leaflet js to display the map that users interacts with. When users clicks the map the coordinations of marker change and the ForecastDetails component shows the weather forecast based on the data requested from draxis api.
The ForecastDetails component contains a date picker component with wich users can interact to change the requested weather forecast based on the selected date. Next to date picker component is a button group that can change the view of the ForecastDetails component. The firtst view contains two lists of data. The first list shows the temperature data and the second shows the humidity percentage of the seleced date. These lists can be sorted in ascending and descending order and are "paginated"
The second view contains two line charts that display the temperature and humidity data.
