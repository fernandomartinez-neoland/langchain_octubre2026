import { ChatGroq } from "@langchain/groq"
import "dotenv/config";

const llm = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
    apiKey: process.env.GROQ_API_KEY
    // other params...
})

const aiMsg = await llm.invoke([
    {
      role: "system",
      content: "You are a helpful assistant that translates English to spanish. Translate the user sentence.",
    },
    { role: "user", content: "I love programming." },
])
console.log(aiMsg.content)