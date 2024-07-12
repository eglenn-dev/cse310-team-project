import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
    Part,
} from "@google/generative-ai";
import MarkdownIt from "markdown-it";

const API_KEY = process.env.GOOGLE_API_KEY || "";

async function aiGeneration(promptInput: string) {
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
            `Evaluate the following Python code for correctness:\n${promptInput}`
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

        console.log("Input Prompt:", input_prompt);

        const result = input_prompt
            ? await aiGeneration(input_prompt)
            : "Error with input prompt generation.";

        return new Response(JSON.stringify(result), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        console.error("Error in API:", e);
        return new Response("Error", { status: 500 });
    }
}
