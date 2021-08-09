const UserService = require("../services/user-service")

class UserController {
  async login(req, res, next) {
    try {
      const {username, password} = req.body
      const data = await UserService.login(username, password)
      return res.json(data)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController()
