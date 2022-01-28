import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create ({request}: HttpContextContract) {
    // eslint-disable-next-line max-len
    const {username, typeUser, cpf, weight, height, uf, email, password} = request.only([ 'username', 'typeUser', 'cpf', 'weight', 'height', 'uf', 'email', 'password'])

    const user = await User.create({
      username,
      typeUser,
      cpf,
      weight,
      height,
      uf,
      email,
      password,

    })
    console.log(user)
  }

  public async get () {
    const all = await User.all()
    return all
  }
}
