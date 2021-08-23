import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'
import { StoreValidator, UpdateValidator } from 'App/Validators/Fornecedor/Index'

export default class FornecedorsController {
  public async index({ response }: HttpContextContract) {
    const data = await Fornecedor.query().preload('produtos')

    return response.status(200).send(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const fornecedor = await Fornecedor.create(data)

    return response.status(201).send(fornecedor)
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Fornecedor.findOrFail(params.id)

    await data.load('produtos')

    return response.status(200).send(data)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    fornecedor.merge(data)
    fornecedor.save()

    return response.status(201).send(fornecedor)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const fornecedor = await Fornecedor.findOrFail(params.id)

    fornecedor.delete()

    return response.status(204)
  }
}
