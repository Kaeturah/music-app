const apiUrl = "https://amazon-music-mp3.p.rapidapi.com/";
const apiKey = "eefc5f19b2msh2859c5d2ece8f9bp1936c3jsnb173377693ce";

export const getMusicData = async (query) => {
  try {
    const res = await fetch("${apiUrl}?q=${query}", {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    if (!res.ok) {
      throw new Error("res is not okay");
    }
    const data = await res.json();
    // return data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching music data:", error);
    throw error;
  }
};
