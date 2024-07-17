import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
} from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_API_KEY || "";

async function aiGeneration(
    promptInput: string,
    prompt_goal: string,
    original_code: string
) {
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
                },
            ],
        });

        const result = await model.generateContent(
            `Code: ${promptInput}\nGoal: ${prompt_goal}. Does the code meet the given goal? If not, give feedback and suggest changes to the given code without asking follow up questions, and without completing it for them. Small and relevant examples are acceptable. Do not change the goal, only the code. If the prompt meets the goal and there is real information present, write "Congrats! You were able to complete the goal.". If the code is completely off-topic, or not even code, write "No, please return to the page and try again." This is what the user was given to start with, it must be different than this: ${original_code}. DO NOT PRODUCE A SOLUTION TO THE PROBLEM. Only provide feedback and suggestions for the user to then make. Give the user an output from their code.`
        );
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const input_prompt = body.input_prompt;
        const prompt_goal = body.prompt_goal;
        const original_code = body.original_code;
        const result = input_prompt
            ? await aiGeneration(input_prompt, prompt_goal, original_code)
            : "Error with input prompt generation.";

        return new Response(JSON.stringify(result), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        console.error("Error in API:", e);
        return new Response("Error", { status: 500 });
    }
}
