const Redux = require('redux')
const { createStore, combineReducers } = Redux

const criarContrato = (nome, taxa) => {
   return {
      type: 'CRIAR_CONTRATO',
      payload: {
         nome: nome,
         taxa: taxa
      }
   }
}

const cancelarContrato = (nome) => {
   return {
      type: "CANCELAR_CONTRATO",
      payload: {
         nome: nome
      }
   }
}

const solicitarCashback = (nome, valor) => {
   return {
      type: "SOLICITAR_CASHBACK",
      payload: {
         nome: nome,
         valor: valor
      }
   }
}

const historicoDePedidosDeCashback = (historicoDePedidosDeCashbackAtual = [], acao) => {
   if (acao.type === "CASHBACK"){
      return [...historicoDePedidosDeCashbackAtual, acao.payload]
   }
   return historicoDePedidosDeCashbackAtual
}

const caixa =(dinheiroEmCaixa = 0, acao) => {
   if (acao.type === "CASHBACK") {
      dinheiroEmCaixa -= acao.payload.valor
   } else if (acao.type === "CRIAR_CONTRATO") {
      dinheiroEmCaixa += acao.payload.taxa
   }
   return dinheiroEmCaixa
}

const contratos = (listaDeContratoAtual = [], acao) => {
   if (acao.type === "CRIAR_CONTRATO") {
      return [...listaDeContratoAtual, acao.payload]
   } if (acao.type === "CANCELAR_CONTRATO") {
      return listaDeContratoAtual.filter((c) => c.nome !== acao.type)
   }
   return listaDeContratoAtual
}

const todosOsReducers = combineReducers({
   historicoDePedidosDeCashback,
   caixa,
   contratos
})

const store = createStore(todosOsReducers)

store.dispatch(criarContrato('José', 50))
store.dispatch(criarContrato ('Maria', 50))
store.dispatch(solicitarCashback('Maria', 10))
store.dispatch(solicitarCashback('José', 20))
store.dispatch(cancelarContrato ('Maria'))

console.log(store.getState())