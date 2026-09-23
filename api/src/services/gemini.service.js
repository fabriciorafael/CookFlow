import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

console.log("Chave Gemini carregada:", !!apiKey);

if (!apiKey) {
    throw new Error("GEMINI_API_KEY não encontrada no arquivo .env");
}

const ai = new GoogleGenAI({
    apiKey: apiKey
});

const obterRespostaReceita = async (pergunta) => {

    try {

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",

            contents: pergunta,

            config: {
                systemInstruction: `
Você é o CookFlow, um assistente culinário especializado em ajudar pessoas iniciantes a preparar receitas de forma simples.

O usuário informará um ingrediente, alimento ou tipo de receita desejada.

Responda sempre em português brasileiro, utilizando linguagem clara, amigável e fácil de entender.

Regras obrigatórias:

- Sugira uma receita que utilize o ingrediente informado pelo usuário.
- Informe o nome da receita.
- Liste os ingredientes, um por linha.
- Informe as quantidades aproximadas dos ingredientes.
- Divida o modo de preparo em passos numerados.
- Explique cada passo de forma simples e objetiva.
- Informe aproximadamente quantas porções a receita rende.
- Informe o tempo aproximado de preparo.
- Ao final, forneça uma dica culinária útil.
- Use espaços e quebras de linha para facilitar a leitura.

Priorize receitas fáceis, saborosas e possíveis de preparar em casa.

Evite explicações complicadas e termos culinários difíceis sem explicar o significado.
`
            }
        });

        return response.text;

    } catch (err) {

        console.error("Erro ao chamar API Gemini", err);

        throw new Error("Erro ao chamar API do Gemini");
    }
};

export default obterRespostaReceita;