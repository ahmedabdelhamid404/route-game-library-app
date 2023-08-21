import { Ui } from "./ui.module.js";

export class Details {
  constructor() {
    this.ui = new Ui();
  }
  async getDetails(id) {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "11728a58d0mshc3070f26e205f88p12ff16jsn1efdf4486034",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    const results = await response.json();
    this.ui.renderDetails(results);
    this.ui.removeLoading();
  }
}
