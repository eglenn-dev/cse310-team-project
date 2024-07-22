// Import necessary modules from the Google Generative AI library.
import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
} from "@google/generative-ai";

// Get the Google API key from environment variables.
const API_KEY = process.env.GOOGLE_API_KEY || "";

// Asynchronous function to generate text using the Google Generative AI API.
async function aiGeneration(
    prompt_input: string,
    prompt_goal: string,
    original_code: string
) {
    // Use a try-catch block to handle any errors during the API call.
    try {
        // Create a new instance of the GoogleGenerativeAI class with the API key.
        const genAI = new GoogleGenerativeAI(API_KEY);

        // Get the specified generative model with safety settings.
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
                },
            ],
        });

        // Generate content based on the provided prompt.
        const result = await model.generateContent(
            // The prompt instructs the AI to act as a programming assistant, providing feedback and suggestions without directly completing the code.
            `You are a AI designed for helping a beginner level programmer in Python. You will get some sample code from the user, and you need to check if the code meets the given goal. If not, give feedback and suggest changes to the given code without asking follow up questions, and without completing it for them. Small and relevant code examples are acceptable. If the prompt meets the goal and there is real information present, write "Congrats! You were able to complete the goal.". If the code is completely off-topic, or not even code, write "No, please return to the page and try again." \nThis is the template the user started with: ${original_code}. \nThis is the goal: ${prompt_goal}. \nThis is the users code (also lint for syntax): ${prompt_input} \n\n Show the user an output from their code.`
        );
        // Return the generated result.
        return result;
    } catch (e) {
        // Log any errors to the console and re-throw the error.
        console.error(e);
        throw e;
    }
}

// Asynchronous function to handle POST requests.
export async function POST(request: Request) {
    try {
        // Parse the request body as JSON.
        const body = await request.json();

        // Extract data from the request body.
        const input_prompt = body.input_prompt;
        const prompt_goal = body.prompt_goal;
        const original_code = body.original_code;

        // Call the aiGeneration function if the input prompt exists, otherwise return an error message.
        const result = input_prompt
            ? await aiGeneration(input_prompt, prompt_goal, original_code)
            : "Error with input prompt generation.";

        // Return the result as a JSON response with appropriate headers.
        return new Response(JSON.stringify(result), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        // Log any errors to the console and return an error response.
        console.error("Error in API:", e);
        return new Response("Error", { status: 500 });
    }
}
