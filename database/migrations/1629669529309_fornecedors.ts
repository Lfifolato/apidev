import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fornecedors extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome')
      table.string('cnpj')
      table.string('telefone')
      table.string('email')
      table.string('uf', 2)
      table.boolean('ativo').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
