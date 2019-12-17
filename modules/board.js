
const setBoard =()=>{
    //설문지 생성
    const Board = document.createElement("div");
    Board.classList.add("SurveyBoard");
    Board.style.width="400px";
    Board.style.height="600px";
    const Container = document.querySelectorAll(".index__Container")[0];
    Container.appendChild(Board);
}
const init = () =>{
    setBoard();
}
window.onload = init;