import dommy from "../dommy";

const Content = (
  <div
    className="flex flex-col text-xl"
    id="wow"
    doClick={() => console.log("YES")}
  >
    <img
      style={{ width: "100px" }}
      src="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/1920px-Ajax_Amsterdam.svg.png"
    />
  </div>
);

export default Content;
