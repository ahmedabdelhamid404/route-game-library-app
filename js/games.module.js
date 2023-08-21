import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    this.details = new Details();
    this.getGames();
    const navbarLinks = Array.from(document.querySelectorAll("nav ul a"));
    for (const el of navbarLinks) {
      el.addEventListener("click", (e) => {
        for (const el of navbarLinks) {
          el.classList.remove("active");
          e.target.classList.add("active");
        }
        this.ui.showLoading();
        this.getGames(e.target.getAttribute("data-bs-catg"));
      });
    }
  }

  async getGames(catg = "mmorpg") {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catg}`,
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
    this.ui.renderGames(results);
    this.ui.removeLoading();
    this.showDetails();
  }

  showDetails() {
    const items = document.querySelectorAll("div [data-bs-game-id]");
    for (const el of items) {
      el.addEventListener("click", () => {
        this.ui.showLoading();
        document
          .getElementById("main-section")
          .classList.replace("d-block", "d-none");
        document
          .getElementById("detailas-section")
          .classList.replace("d-none", "d-block");
        this.details.getDetails(el.getAttribute("data-bs-game-id"));
      });
    }
  }
}
