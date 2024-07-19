const admin = require("firebase-admin");
const serviceAccount = require("../../../cse310-team-project-7173a-firebase-adminsdk-ahshb-3f98e5d681.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL:
            "https://cse310-team-project-7173a-default-rtdb.firebaseio.com",
    });
}

const db = admin.database();

async function getData() {
    try {
        const snapshot = await db.ref("lessons/").once("value");
        return snapshot.val();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function GET(request: Request) {
    const data = await getData();
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const number = queryParams.get("number");
    if (number) {
        const numberValue = parseInt(number);
        const returnData = data[numberValue - 1];
        return new Response(JSON.stringify(returnData), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } else {
        return new Response("No lesson number provided", { status: 400 });
    }
}
