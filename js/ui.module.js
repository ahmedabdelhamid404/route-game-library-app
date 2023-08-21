import { Details } from "./details.module.js";

export class Ui {
  renderGames(renderData) {
    let cartoona = "";
    for (const {
      title,
      thumbnail,
      short_description,
      genre,
      platform,
      id,
    } of renderData) {
      cartoona += `<div data-bs-game-id="${id}" class="col-md-6 col-lg-4">
              <div class="card rounded border border-dark bg-transparent text-white text-center h-100">
                <div class="card-body">
                  <div class="mb-3">
                    <img
                      src="${thumbnail}"
                      alt="game-picture"
                    />
                  </div>
                  <div
                    class="game-name d-flex align-items-center justify-content-between mb-3"
                  >
                    <p class="mb-0 fs-6">${title}</p>
                    <button class="btn btn-primary btn-style">Free</button>
                  </div>
                  <div class="game-desc desc-text fs-6">
                    ${short_description}
                  </div>
                </div>
                <div
                  class="card-footer d-flex align-items-center justify-content-between"
                >
                  <p class="badge mb-0">${genre}</p>
                  <p class="badge mb-0">${platform}</p>
                </div>
              </div>
            </div>`;
    }
    document.getElementById("dataContainer").innerHTML = cartoona;
  }

  renderDetails(renderData) {
    const { title, thumbnail, description, status, platform, genre, game_url } =
      renderData;
    document.getElementById("imageThubnail").setAttribute("src", thumbnail);
    document.getElementById("gameName").innerHTML = `Title: ${title}`;
    document.getElementById(
      "categ"
    ).innerHTML = `Category: <span class="details-badge">${genre}</span>`;
    document.getElementById(
      "platform"
    ).innerHTML = `Platform: <span class="details-badge">${platform}</span>`;
    document.getElementById(
      "Status"
    ).innerHTML = `Status: <span class="details-badge">${status}</span>`;
    document.getElementById("gameDescription").innerHTML = description;
    document.getElementById("gameLink").setAttribute("href", game_url);
    this.showMain();
  }

  showMain() {
    document.getElementById("closeBtn").addEventListener("click", function () {
      document
        .getElementById("main-section")
        .classList.replace("d-none", "d-block");
      document
        .getElementById("detailas-section")
        .classList.replace("d-block", "d-none");
    });
  }

  showLoading() {
    const analog = document.getElementById("analog-spinner");
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("fadeOut");
    spinner.classList.replace("d-none", "d-flex");
    analog.classList.add("animate__hinge");
    analog.classList.replace("opacity-0", "opacity-100");
  }

  removeLoading() {
    const analog = document.getElementById("analog-spinner");
    const spinner = document.getElementById("spinner");
    spinner.classList.add("fadeOut");
    setTimeout(() => {
      spinner.classList.replace("d-flex", "d-none");
      if (document.body.classList.contains("overflow-hidden")) {
        document.body.classList.remove("overflow-hidden");
      }
      analog.classList.remove("animate__hinge");
    }, 300);
  }
}
