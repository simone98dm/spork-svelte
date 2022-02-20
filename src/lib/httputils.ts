import type { Tracks, SongInfo, ICreatePlaylistResponse, IUser } from "src/models/Tracks";
import { spotifyApi, stateKey } from "./costants";

export async function getUserInfo(access_token: string) {
  if (typeof access_token == "undefined") {
    return null;
  }

  return await fetch(`${spotifyApi}/me`, {
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    },
  }).then((response) => response.json() as unknown as IUser);
}

export async function getTopTracks(
  access_token: string,
  type: string,
  timeRange: string,
  offset: number,
  timeLimit: number
) {
  if (typeof access_token == "undefined") {
    return [];
  }

  let query = buildQueryParams({ "time_range": timeRange, "offset": offset, "limit": timeLimit });

  return await fetch(`${spotifyApi}/me/top/${type}${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    },
  })
    .then((response) => response.json() as unknown as Tracks)
    .then((response) => (response.items ? response.items : []))
    .catch((error) => {
      localStorage.removeItem(stateKey);
      console.log(error);
      return [];
    });
}

export async function createPlaylist(name: string, userId: string, tracks: SongInfo[], access_token: string) {
  const content = JSON.stringify({
    description: `Best song ${new Date().toDateString()}. Made by simone98dm`,
    public: false,
    title: name
  });
  await fetch(`${spotifyApi}/users/${userId}/playlists`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    },
    body: content,
    method: "POST",
  })
    .then(x => x.json() as unknown as ICreatePlaylistResponse)
    .then(x => addSongs(x, tracks, access_token))
    .catch(err => console.error(err));
}

async function addSongs(response: ICreatePlaylistResponse, tracks: SongInfo[], access_token: string) {
  if (!response) {
    return;
  }
  const values = JSON.stringify(tracks.map(x => x.uri));
  await fetch(`${spotifyApi}/playlists/${response.id}/tracks`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json"
    },
    body: values,
    method: "POST",
  })
    .then(x => x.json())
    .catch(err => console.error(err));
}

function buildQueryParams(params: any): string {
  let query = "?";
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      query += `&${key}=${element}`;
    }
  }
  return query;
}
