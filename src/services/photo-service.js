import { v4 as uuidv4 } from 'uuid';
import { getRandomImageUrl } from './image-service';

export const getRandomPhotos = (photoCount = 10) => {
    const newPhotos = [];

    for (let i = 0; i < photoCount; i++) {
        newPhotos[i] = {
            photoUrl: getRandomImageUrl(),
            photoId: uuidv4(),
        };
    }

    return newPhotos;
}
