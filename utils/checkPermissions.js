import { UnauthorizedError } from '../errors/customErrors.js'

export const checkPermissions = (requestUser, resourceUserId) => {
  console.log(requestUser)
  // console.log(resourceUserId);
  // console.log(typeof resourceUserId);
  if (requestUser.role === 'admin') return
  if (requestUser.userId === resourceUserId.toString()) return
  throw new UnauthorizedError('Not authorized to access this route')
}
