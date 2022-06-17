# Learning Firebase Local Emulator Suite

Just one of the things I'm learning. https://github.com/hchiam/learning

https://firebase.google.com/docs/emulator-suite/connect_and_prototype

https://firebase.google.com/docs/emulator-suite/connect_firestore

## Testing out this repo

After you clone this repo to you local machine, run these CLI commands: (no need to `npm install` first)

```sh
cd learning-firebase-local-emulator
npm i -g firebase-tools
firebase init
```

## Very basic setup from scratch

```sh
curl -sL firebase.tools | bash
# firebase logout
# firebase login
firebase init # I personally chose the firestore and emulators option, and opted out of using a default project
```

and then:

```sh
firebase emulators:start
```

## Local Firebase Emulator UI

https://www.youtube.com/watch?v=pkgvFNPdiEs

```sh
npm i -g firebase-tools
firebase --version
# firebase logout
# firebase login
firebase init
firebase emulators:start # localhost:4000
```

```js
firestore.doc("hello/world").set({ hello: "world!" });

firestore
  .doc("hello/world")
  .get()
  .then((snap) => console.log(snap.data()));
```

```js
firebaseConfig = {
  projectId: ...your-project-id-here...,
};
firebase.initializeApp(firebaseConfig);
database = firebase.firestore();
if (location.hostname === "localhost") {
  // to use the emulator instead of the real DB:
  database.useEmulator("localhost", 8080);
}
```

To backup and reuse local data of the running emulator:

```sh
firebase emulators:export seed
# (remember the export path)
# (and then upon restarting the emulator:)
firebase emulators:start --import seed
```

You might also find interesting:

```sh
firebase emulators:start --import seed --export-on-exit=seed
# see it repopulated at http://localhost:4000/firestore
```

## More examples

https://github.com/firebase/snippets-web

## More on Firestore in general

https://github.com/hchiam/learning-firestore
