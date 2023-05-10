import React from "react";
import ReactDOM from "react-dom/client";
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}
function App(){
  return (
    <div>
    <Welcome name = "webs" />
    <Welcome />
    <Welcome />
    </div>
  )
}
const element = <Hello name = "kimdohyun" />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);