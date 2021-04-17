# Learning Firebase Local Emulator Suite

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://firebase.google.com/docs/emulator-suite/connect_and_prototype>

<https://firebase.google.com/docs/emulator-suite/connect_firestore>

## Very basic setup

```bash
curl -sL firebase.tools | bash
# firebase logout
# firebase login
firebase init # I personally chose the firestore and emulators option, and opted out of using a default project
```

and then:

```bash
firebase emulators:start
```

## Local Firebase Emulator UI

<https://www.youtube.com/watch?v=pkgvFNPdiEs>

```bash
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

```bash
firebase emulators:export seed
# (remember the export path)
# (and then upon restarting the emulator:)
firebase emulators:start --import seed
```

You might also find interesting:

```bash
firebase emulators:start --import seed --export-on-exit=seed
# see it repopulated at http://localhost:4000/firestore
```

## More examples

<https://github.com/firebase/snippets-web>

## More on Firestore in general

<https://github.com/hchiam/learning-firestore>
