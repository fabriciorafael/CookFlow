const ChatReceitas = () => {
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            text: "Olá! Eu sou o CooKflow, seu assistente de receitas. Como posso ajudá-lo hoje?",
            remetente: 'bot'
        },
        {

            id: 2,
            text: "frango assado",
            remetente: 'usuario'
        },

        {

            id: 3,
            text: `### Frango Assado 
              
          Essa receita de frango assado é simples e deliciosa! Aqui está como você pode prepará-la:
         
          ### Ingredientes:
          
          - 1 frango inteiro (aproximadamente 1,5 kg)
          - 4 dentes de alho picados
          - 2 colheres de sopa de azeite de oliva
          - 1 colher de chá de páprica
          - 1 colher de chá de ervas finas (como tomilho, alecrim ou orégano)
          - 1 colher de chá de sal
          - 1/2 colher de chá de pimenta-do-reino                  
         `,
            remetente: 'bot'
        },
    ])

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-500 via-gray-50 to-emerald-50 p-4">
            <div className="container mx-auto max-w-4xl">

                <header className="text-center mb-8">

                    <h1 className="text-5xl font-bold bg-linear-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">🥘CooKflow</h1>
                    <p className="text-gray-600 text-lg">Seu assistente de receitas favorito!</p>
                </header>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl">

                     <ListaMessagens mensagens={mensagens} />

                </div>

            </div>
        </div>
    )

}

export default ChatReceitas