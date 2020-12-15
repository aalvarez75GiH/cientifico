// this is the character's full description 

import getHash from '../utils/getHash'
import getData from '../utils/getData'
const character = async() => {
    const id = getHash()
    //const characters = await getData()
    const desc = await getData(id)
    console.log(desc)
    const view = `
            <div class="characters-inner">
                <article class="characters-card">
                    <img src="${desc.image}" alt="${desc.name}">
                    <h2>${desc.name}</h2>
                </article>
                <article class="characters-card">
                    <h3>Episodes: <span>${desc.episode.length}</span></h3>
                    <h3>Status: <span>${desc.status}</span></h3>
                    <h3>Species: <span>${desc.species}</span></h3>
                    <h3>Gender: <span>${desc.gender}</span></h3>
                    <h3>Origin: <span>${desc.origin.name}</span></h3>
                    <h3>Last location: <span>${desc.location.name}</span> </h3>
                </article>        
            </div>
    `
    return view
}

export default character