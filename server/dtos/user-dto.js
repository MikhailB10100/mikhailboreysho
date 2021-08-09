module.exports = class UserDto {
  username
  id
  roles

  constructor(model) {
    this.username = model.username
    this.id = model._id
    this.roles = model.roles
  }
}
