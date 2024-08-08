## Features

- **Notification System**: can generate and view notifications. Notifications can be marked as read.
- **Firebase Integration**: Utilizes Firebase Firestore for data storage
- **Emulator Support**: Set up Firebase emulators for development without affecting live data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed.
- **Firebase CLI** installed.
- A **Firebase project** set up (you can use the Firebase CLI to create a new project).

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/firebase-react-spa.git
    cd firebase-react-spa
    ```

2. **Install dependencies**:

    ```bash
    yarn install
    ```

3. **Set up Firebase**:

    - Create a new Firebase project from the [Firebase Console](https://console.firebase.google.com/).
    - Add a new web app to your project and copy the Firebase config.
    - Replace the Firebase configuration in  with your `env.example`:


4. **Set up Firebase Emulators**:

    ```bash
    firebase init emulators
    ```

    - Choose emulators for Firestore.
    - Start the emulators:

    ```bash
    yarn firebase emulators:start
    ```

5. **Run the development server**:

    ```bash
    yarn run start
    ```

    - This will start the React development server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


6. **Linting, Testing, Prettier**:

    ```bash
    yarn run lint
    yarn run format
    yarn run test
    yarn run tsc
    ```



