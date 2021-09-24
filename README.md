# Sun Mobility Web App - React App

Indian Oil Corporation Limited (IOCL) and SUN Mobility announced the launch of a battery swapping facility for electric vehicles.

## Development Setup

- Clone Repository: `git clone HTTPS/SSH Url`
- Move to root directory: `cd sm-admin-app-ui`
- Install dependency: `npm install`
- Starting Proejct: `npm start`
- Open link in browser: [http://localhost:3000/](http://localhost:3000/)

## Folder Structure

    sm-admin-app-ui
    │
    └───src
    │   │
    │   └───api-integrations
    │       └───common (Director to store all image files)
    │           └───connect.js (Has helper methods for API Fetch call, File Upload & Firebase referral link)
    │           └───constants.js (Contains backend communication constants)
    │           └───local-storage.js (Haas helper methods to access local storage manipulations)
    │           └───urls.js (All backend api urls & other 3rd party urls are maintained as a constants)
    │       └───modules (All the backend api are created as a separate function & grouped based on their nature)
    │   |
    │   │
    │   └───assets
    │       └───images (Director to store all image files)
    │       └───styles (Director to wrap all style dependencies of the application)
    │           └───lib (Folder to all external library dependencies)
    │           └───styles.scss (Parent style sheet where application level common styles are mentioned)
    │   |
    |   └───common
    │       └───application-constants.js (Contains all application level constants)
    │       └───common.js (Has generic helper methods that are used across the application)
    │   |
    │   └───components (Parent directory for react components)
    │       └───common (Common helper components)
    │       └───layouts
    │           └───header (Application header layout)
    │       └───pages (Contains each folder for each page and its respective sub components)
    │   |
    │   └───routes (Parent directory for react router configuration)
    │       └───on-boarding-routes.js (Hybrid route configuration to control onboarding redirection)
    │       └───private-routes.js (Protected route configuration to control user session)
    │       └───routes.js (Default router configuration with component initialization & path settings)

## Package Dependencies

"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-redux": "^7.2.1",
"react-router-dom": "^5.2.0",
"react-scripts": "3.4.1",
"redux": "^4.0.5",
"redux-devtools-extension": "^2.13.8",
"redux-saga": "^1.1.3",
"toastr": "^2.1.4"

## Testing Server

[Start Testing]()

## Development Resources

- API communication docs provided by Sun Mobility.

## Developer Best Practice

- Maintain proper namespacing for folders, files, variable and function declarations.
- Format code using [Prettier](https://www.npmjs.com/package/prettier) package.
- Always create feature or bug branches and then merge with stable master branch.
- Provide proper commit messages & split commits meaningfully.
