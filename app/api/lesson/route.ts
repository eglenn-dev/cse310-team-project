// Import the Firebase Admin SDK.
const admin = require("firebase-admin");
// Import the service account credentials for Firebase Admin.
const serviceAccount = require("../../../cse310-team-project-7173a-firebase-adminsdk-ahshb-3f98e5d681.json");

// Initialize Firebase Admin SDK if it hasn't been initialized already.
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL:
            "https://cse310-team-project-7173a-default-rtdb.firebaseio.com",
    });
}

// Get a reference to the Firebase Realtime Database.
const db = admin.database();

// Asynchronous function to fetch data from the "lessons" node in the database.
async function getData() {
    try {
        // Get a snapshot of the data at the specified database reference.
        const snapshot = await db.ref("lessons/").once("value");
        // Return the data from the snapshot.
        return snapshot.val();
    } catch (error) {
        // Log any errors encountered during data fetching and return null.
        console.error("Error fetching data:", error);
        return null;
    }
}

// Asynchronous function to handle GET requests.
export async function GET(request: Request) {
    // Fetch data using the getData function.
    const data = await getData();

    // Get the URL of the request.
    const url = new URL(request.url);
    // Get the query parameters from the URL.
    const queryParams = url.searchParams;
    // Get the value of the "number" query parameter.
    const number = queryParams.get("number");

    // If the "number" parameter is provided, return the corresponding lesson.
    if (number) {
        const numberValue = parseInt(number);
        const returnData = data[numberValue - 1];
        return new Response(JSON.stringify(returnData), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } else {
        // If the "number" parameter is not provided, return an error response.
        return new Response("No lesson number provided", { status: 400 });
    }
}
