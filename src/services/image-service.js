const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const getRandomImageUrl = () => {
    const randomId = getRandomInt(30000)
   return `https://loremflickr.com/320/240?lock=${randomId}`
}

