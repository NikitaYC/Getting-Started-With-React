const rootElement = document.getElementById("container");

// let element = <div class="parent">
//     <div class ="red"></div>
//     <div class ="yellow"></div>
//     <div class ="green"></div>
//     <div class ="purple"></div>
// </div>

let element = React.createElement("div" , {
    className:"parent"},
    "Parent",
[
    React.createElement("div", { className: "red"} ,"1"),
    React.createElement("div" ,{ className: "yellow"}, "2"),
    React.createElement("div" , { className: "green"}, "3"),
    React.createElement("div" , { className: "purple"}, "4")
]);

const reactRoot = ReactDOM.createRoot(rootElement)

reactRoot.render(element);