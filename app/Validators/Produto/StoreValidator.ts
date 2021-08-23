import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    nome: schema.string({ trim: true }),
    descricao: schema.string({ trim: true }),
    estoque: schema.number(),
    fornecedor_id: schema.number(),
  })

  public messages = {
    required: '{{ field }} Campo Obrigatório',
  }
}
