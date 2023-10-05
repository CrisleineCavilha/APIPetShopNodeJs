const { describe, expect, it } = require('@jest/globals')
const ServicoCliente = require("../src/services/clientes")


describe('Testes do clientes', () => {
   
   const servico_Cliente = new ServicoCliente()
   
   it('Consultar um cliente', async () => {
      const result = await servico_Cliente.ConsultarUm(1)
      
      expect(result.idCliente).toBe(1);
      expect(result.nome).toBe('Isabela Rodrigues');
      expect(result.telefone).toBe('12346559822');
    })
})




