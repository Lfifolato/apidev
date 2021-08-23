import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    nome: schema.string({ trim: true }),
    cnpj: schema.string({ trim: true }, [rules.unique({ table: 'fornecedors', column: 'cnpj' })]),
    telefone: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email()]),
    uf: schema.string({ trim: true }),
  })

  public messages = {
    unique: ' O {{field}} Já Cadastrado',
    required: ' O {{field}} Campo Obrigatório',
    email: 'Email Invalido',
  }
}
