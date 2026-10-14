import Mensagem from "./Mensagem"
const ListaMessagens = ({ mensagens }) => {



    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mensagens.map((mensagem) => (
                <Mensagem key={mensagem.id} mensagem={mensagem} />
            ))}

        </div>

    )





}

export default ListaMessagens