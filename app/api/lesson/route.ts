import data from "../../data/data.json";

export function GET(request: Request) {
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const number = queryParams.get("number");
    if (number) {
        const numberValue = parseInt(number);
        const returnData = data.lessons[numberValue - 1];
        return new Response(JSON.stringify(returnData), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } else {
        return new Response("No lesson number provided", { status: 400 });
    }
}
