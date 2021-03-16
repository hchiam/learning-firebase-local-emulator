const firebase = require("@firebase/testing");

// Helper function to setup test db
function authedApp(auth) {
  return firebase
    .initializeTestApp({ projectId: FIRESTORE_PROJECT_ID, auth })
    .firestore();
}

// Setup methods
beforeEach(async () => {
  // Clear the database between tests
  await firebase.clearFirestoreData({ projectId: FIRESTORE_PROJECT_ID });
});

// Clean up apps between tests.
afterEach(async () => {
  await Promise.all(firebase.apps().map((app) => app.delete()));
});

it("should retrieve correct item", async () => {
  // Init test db
  const db = authedApp(null);

  // Manually add item to collection
  const ref = await db.collection(COLLECTION_NAME).add({ name: "test item" });

  // Fetch item by id
  const resp = await db.collection(COLLECTION_NAME).doc(ref.id).get();

  // test the output
  expect(resp).toBeDefined();
  expect(resp).toEqual(expect.objectContaining({ name: "test item" }));
});
