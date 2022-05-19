import ChoiceImage from "./ChoiceImage.js";

export default function App({ $app }) {
    this.state = 100;

    this.setState = (nextState) => {
        this.state = nextState;
        this.choiceImage.setState(this.state);
    };

    this.choiceImage = new ChoiceImage({
        $app,
        initialState: this.state,
    });

    $app.querySelector("input").addEventListener("input", (e) => {
        e.target.value = e.target.value;
        this.setState(e.target.value);
    });

    document.querySelector(".buttonContainer").addEventListener("click", () => {
        const $imageContainer = document.querySelector(".image-show");
        $imageContainer.innerHTML = "";
        const $image = document.createElement("img");
        $image.src = `../main/cc/images/result/result${this.state}.png`;
        $image.className = "resultImage";
        $imageContainer.append($image);

        window.scroll({
            top: 1150,
            behavior: "smooth",
        });
    });
}
