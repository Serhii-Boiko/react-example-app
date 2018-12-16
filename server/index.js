import { festivals, artists } from './data';
import uuid from '@utils/uuid';

export const getFestivals = async () => {
    await timeout();
    return jsonCopy(festivals);
};

export const createFestival = async (data) => {
    await timeout();
    const item = {
        uuid: uuid(),
        created: new Date().getTime(),
        artists: [],
        ...data
    };

    festivals.unshift(item);

    return jsonCopy(item);
};

export const getFestival = async (uuid) => {
    await timeout();
    const festival = festivals.find((item) => item.uuid === uuid);
    if (!festival) {
        throw new Error('Festival not found');
    }

    return jsonCopy(festival);

};

export const deleteFestival = async (uuid) => {
    await timeout();
    const index = festivals.findIndex((item) => item.uuid === uuid);
    if (index === -1) {
        throw new Error('Festival not found');
    }

    festivals.splice(index, 1);
    return { deleted: true };
};

export const getArtists = async () => {
    await timeout();
    return jsonCopy(artists);
};

export const createArtist = async (data) => {
    await timeout();
    const item = {
        uuid: uuid(),
        created: new Date().getTime(),
        ...data
    };

    artists.unshift(item);

    return jsonCopy(item);
};

export const deleteArtist = async (uuid) => {
    await timeout();
    const index = artists.findIndex((item) => item.uuid === uuid);
    if (index === -1) {
        throw new Error('Artist not found');
    }

    festivals.splice(index, 1);

    return { deleted: true };
};

export const addArtistToFestival = async (festivalUuid, artistUuid) => {
    await timeout();
    const festival = festivals.find((item) => item.uuid === festivalUuid);
    const artist = artists.find((item) => item.uuid === artistUuid);

    if (!festival || !artist) {
        throw new Error('Festival or artist not found');
    }

    festival.artists.push(artist.uuid);

    return jsonCopy(festival);
};

export const removeArtistFromFestival = async (festivalUuid, artistUuid) => {
    await timeout();
    const festival = festivals.find((item) => item.uuid === festivalUuid);
    const artist = artists.find((item) => item.uuid === artistUuid);

    if (!festival || !artist) {
        throw new Error('Festival or artist not found');
    }

    const festivalArtists = festival.artists;
    const festivalArtistsIndex = festivalArtists.findIndex((item) => item === artistUuid);

    if (festivalArtistsIndex === -1) {
        throw new Error('Artist not play on this festival');
    }

    festival.artists.slice(festivalArtistsIndex);

    return jsonCopy(festival);
};

function timeout() {
    const ms = 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}

function jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
}
