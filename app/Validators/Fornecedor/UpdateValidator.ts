import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    cnpj: schema.string.optional({ trim: true }),
    telefone: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
    uf: schema.string.optional({ trim: true }),
    ativo: schema.boolean.optional(),
  })

  public messages = {
    unique: ' O {{field}} Já Cadastrado',
    required: ' O {{field}} Campo Obrigatório',
    email: 'Email Invalido',
  }
}
