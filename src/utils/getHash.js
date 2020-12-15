const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' || '/cientifico' 

export default getHash