import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'
import { StoreValidator, UpdateValidator } from 'App/Validators/Produto/index'

export default class ProdutosController {
  public async index({ response }: HttpContextContract) {
    const data = await Produto.all()

    return response.status(200).send(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const produto = await Produto.create(data)

    return response.status(201).send(produto)
  }

  public async show({ params, response }: HttpContextContract) {
    const data = Produto.findOrFail(params.id)

    return response.status(200).send(data)
  }

  public async update({ params, response, request }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    produto.merge(data)
    produto.save()

    return response.status(201).send(produto)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id)

    produto.delete()

    return response.status(204).send('Produto Deletado com sucesso')
  }
}
