import alerts from "../json/alerts.json";

export default class Alert {
  constructor(message, background, color) {
    this.message = message;
    this.background = background;
    this.color = color;
  }

  // still needs work!!!
  buildAlertList() {
    if (alerts !== null) {
      // Grab the main section from our document
      let main = document.querySelector("main.divider");

      // Create a section element with alert-list class
      let section = document.createElement("section");
      section.className = "alert-list";

      // Read contents of alert.json file and build a list of paragraphs
      alerts.map((alert) => {
        section.insertAdjacentHTML(
          "beforeend",
          `<p style="text-align: center; background-color: ${alert.backgroud}; color: ${alert.color}">${alert.message}</p>`
        );
      });

      main.prepend(section);

      // Loop through results and build paragraph section for each alert
    } else return "alerts.json file did not have any information inside";
  }
}

let testAlert = new Alert("test", "blue", "white");
testAlert.buildAlertList();
