import type { Tracks } from "src/models/Tracks";
import { stateKey } from "./costants";

export async function getUserInfo(access_token: string) {
  if (typeof access_token == "undefined") {
    return null;
  }
  return await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  }).then((response) => response.json());
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

  let query = "time_range=" + timeRange;
  query += "&offset=" + offset;
  query += "&limit=" + timeLimit;

  return await fetch(
    "https://api.spotify.com/v1/me/top/" + type + "?" + query,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json() as unknown as Tracks)
    .then((response) => (response.items ? response.items : []))
    .catch((error) => {
      localStorage.removeItem(stateKey);
      console.log(error);
      return [];
    });
}
