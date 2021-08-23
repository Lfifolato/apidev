import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cnpj: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public uf: string

  @column()
  public ativo: boolean

  @hasMany(() => Produto, {
    foreignKey: 'fornecedor_id',
  })
  public produtos: HasMany<typeof Produto>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
