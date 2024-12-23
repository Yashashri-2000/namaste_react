const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag!"),
    React.createElement("h2", {}, "Im a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag!"),
    React.createElement("h2", {}, "Im a h2 tag"),
  ]),
]);
console.log("parents",parent)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From App js"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
