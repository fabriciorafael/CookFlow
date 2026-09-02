import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()

const openai = new OpenAI ({
    apiKey: process.env.OPENAI_KEY
})

const obterRespostaReceita = async (pergunta) => {

    try {

        const completation = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
        })

    } catch(err){

    }  



}
