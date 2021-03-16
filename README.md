# Learning Firebase Local Emulator Suite

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://firebase.google.com/docs/emulator-suite/connect_and_prototype>

<https://firebase.google.com/docs/emulator-suite/connect_firestore>

## Very basic setup

```bash
curl -sL firebase.tools | bash
firebase init
# I personally chose the firestore and emulators option, and opted out of using a default project
```

and then:

```bash
firebase emulators:start
```

## Maybe helpful info

<https://stackoverflow.com/questions/57537017/how-to-use-firestore-emulator-from-client>

```bash
npm init
npm i -D @firebase/testing
firebase setup:emulators:firestore
firebase emulators:start # instead of: firebase serve --only firestore
```

## More examples

<https://github.com/firebase/snippets-web>

## Local Firebase Emulator UI

<https://www.youtube.com/watch?v=pkgvFNPdiEs>
