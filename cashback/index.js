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