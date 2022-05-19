const IMAGE_END_POINT = "../main/cc/images";

export default function ChoiceImage({ $app, initialState }) {
    this.$target = document.createElement("div");
    this.$target.className = "ChoiceImage";
    $app.appendChild(this.$target);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = `
            <img src="${IMAGE_END_POINT}/origin/origin${this.state}.png" class="origin" />
            <img src="${IMAGE_END_POINT}/result/result${this.state}.png" class="result" />
        `;
    };

    this.render();
}
