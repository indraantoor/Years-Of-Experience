# Years Of Experience

## How To Setup?

1. Clone the repo

```sh
    git clone https://github.com/indraantoor/Years-Of-Experience
```

2. Navigate To The Years Of Experience Directory And Run

```sh
  npm install
```

3. In Firebase create a project

4. In Firebase create a storage and set the rules to

```sh
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

You can setup your own rules and customize the application, but in order for it to work
currently it needs to enable reads and writes, like above.

5. Create a Firestore Database and set the rules to

```sh
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

You can setup your own rules and customize the application, but in order for it to work
currently it needs to enable reads and writes, like above.

6. In Firestore Database, start a collection with collection id

```sh
users
```

7. In Firestore Database, in users collection add a document with the following format

Click on "Auto-ID" in Document ID
Initialy you have to set your own profile pic url

```sh
    Field | Type | Value
    name | string | Enter Your Own Name As Value Here

    username | string | Enter any username you want as value here

    age | string | Enter the age you want to set as value

    profilePic | string | Enter your profile pic url as value
```

8. After Creating the document copy the "Document ID" of this newly created user document
   and paste it in the "app-config.js", "currentUserId" variable.

9. In Firestore Database, in users collection start a collection with collection ID

This is going to contain all of the work experiences associated to the user.

```sh
    workExperiences
```

10. In that as many documents as you want in the following format

Click on "Auto-ID" in Document ID
Initialy you have to set your own company logo url

```sh
    Field | Type | Value
    companyName | string | Enter The Company Name As Value Here

    companyLogo | string | Enter the company logo url as value

    startDate | string | Enter start date of the work experience duration as value

    endDate | string | Enter end date of the work experience duration as value

    isCurrentlyWorking | boolean | Set To True if you want to set is as your current role and vice versa

    jobDescription | string | Enter the job description value

    jobTitle | string | Enter the job title as value
```

11. Go To your project settings and go to "Your App Section" then in SDK setup and configuration select "npm" then copy the "firebaseConfig" Object which will be in the following format

```sh
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
```

paste it in the firebase-config.js file present in src.

If you want you can setup these values as environment variables in a ".env" file and configure the "firebaseConfig" object to use values from those environment variables.

## How To Start?

1. Navigate To The Years Of Experience Directory And Run

```sh
  npm start
```
