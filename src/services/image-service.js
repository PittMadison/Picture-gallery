const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const getRandomImageUrl = () => {
    const randomId = getRandomInt(30000)
   return `https://loremflickr.com/640/480?lock=${randomId}`
}

