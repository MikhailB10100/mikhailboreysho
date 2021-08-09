const UserDto = require("../dtos/user-dto")
const UserModel = require("../models/user-model")

class UserService {
  async login(username, password) {
    const user = await UserModel.findOne({ username })
    if (!user) {
      return { err: 'The user was not found' }
    }

    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      return { err: 'Incorrect password' }
    }
     
    const userDto = new UserDto(user)

    return { ...userDto }
  }
}

module.exports = new UserService()
