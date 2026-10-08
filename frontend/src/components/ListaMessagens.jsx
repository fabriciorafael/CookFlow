import Mensagem from "./Mensagem";
const ListaMessagens = ({ mensagens}) => {



    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mensagens.map((mensagem) => (
                <div key={mensagem.id}>{mensagem.texto}</div>
                    

            ))}    

        </div>


    )





}

export default ListaMessagens