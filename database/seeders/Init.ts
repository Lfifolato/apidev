import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'
import Produto from 'App/Models/Produto'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await Fornecedor.createMany([
      {
        nome: 'Luiz',
        cnpj: '15645787878',
        email: 'luiz@teste.com.br',
        telefone: '1698989898',
        uf: 'sp',
      },
      {
        nome: 'Henrique',
        cnpj: '4554545454',
        email: 'henrique@teste.com.br',
        telefone: '168989898',
        uf: 'rj',
      },
    ]),
      await Produto.createMany([
        {
          nome: 'sabonete',
          descricao: 'limpeza pessoal',
          estoque: 100,
          fornecedor_id: 1,
        },
        {
          nome: 'arroz',
          descricao: 'alimento',
          estoque: 50,
          fornecedor_id: 2,
        },
      ])
  }
}
