import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})

const obterRespostaReceita = async (pergunta) => {

    try {

        const completation = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                        `
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

Evite explicações complicadas e termos culinários difíceis sem explicar o significado.`
                },
                {
                    role: 'user',
                    content: pergunta
                }

            ],

        })

        return completation.choices[0].message.content


    } catch (err) {
        console.error('Erro ao chamar API OpenAI', err)
        throw new Error('Erro ao chamar API da OpenAI')

    }

}

export default obterRespostaReceita
