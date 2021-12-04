import type { Tracks } from "src/models/Tracks";

export async function getUserInfo(access_token: string) {
  if (typeof access_token == 'undefined') {
    return null;
  }
  return await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  }).then((response) => response.json())
}
export async function getTopTracks(access_token: string) {
  if (typeof access_token == 'undefined') {
    return [];
  }
  return await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json() as unknown as Tracks)
    .then((response) => response.items ? response.items : []);
}
