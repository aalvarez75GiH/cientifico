import header from '../templates/header'
import home from '../pages/home'
import character from '../pages/character'
import error404 from '../pages/error404'
import contact from '../pages/contact'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': home,
    '/:id': character,
    '/contact': contact,
}

const router = async () => {
    const header_view = null || document.getElementById('header')
    const content_view = null || document.getElementById('content')
    header_view.innerHTML = await header()
    
    let hash = getHash() // 1
    console.log(hash)
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : error404
    content_view.innerHTML = await render()
}

export default router 