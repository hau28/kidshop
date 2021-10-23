export const arrayGetItemByRoute = (arr, route, field) => {
  return arr.find((ele) => ele.route === route)
}

export const routeObject = (routeString) => {
  const routes = routeString.split('/')
  return {
    navRoute: routes[0],
    menuRoute: routes.slice(0, 2).join('/'),
    subMenuRoute: routes.slice(0, 3).join('/'),
  }
}
