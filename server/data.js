import uuid from '@utils/uuid';
import stringGenerator from '@utils/stringGenerator';

const FESTIVAL_COUNT = 100;
const ARTIST_COUNT = 100;

const generateRandomValues = (minValue, maxValue) => Math.floor(Math.random() * maxValue) + minValue;

const generateArrayOfRandomValues = (dataSetSize, minValue, maxValue) =>
    new Array(dataSetSize).fill(0).map(() => generateRandomValues(minValue, maxValue));

const generateFestivals = (count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push({
            uuid: uuid(),
            title: `${stringGenerator(8)} ${stringGenerator(6)} ${stringGenerator(8)}`,
            artists: [],
            created: new Date().getTime()
        });
    }

    return result;
};

const generateArtists = (count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push({
            uuid: uuid(),
            first_name: stringGenerator(8),
            last_name: stringGenerator(5),
            created: new Date().getTime()
        });
    }

    return result;
};

const generateLinkArtistsToFestival = (festivals, artists) => {
    for (let i = 0; i < festivals.length; i++) {
        const artistsLastIndex = artists.length - 1;
        const artistsOnFestival = generateRandomValues(0, Math.floor(artistsLastIndex / 5));
        const arrayOfRandomValues = generateArrayOfRandomValues(artistsOnFestival, 0, artistsLastIndex);
        for (let j = 0; j < arrayOfRandomValues.length; j++) {
            const artistUuid = artists[j].uuid;
            festivals[i].artists.push(artistUuid);
        }
    }
};

const festivals = generateFestivals(FESTIVAL_COUNT);
const artists = generateArtists(ARTIST_COUNT);

generateLinkArtistsToFestival(festivals, artists);

export {
    festivals,
    artists,
}
