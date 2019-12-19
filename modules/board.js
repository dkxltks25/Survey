//명명 규칙 함수의 이름은 소문자로 시작하며 동상에서 명사로 끝나도록 설정한다.
//중복되는 함수의 이름은 피하도록 한다.
// style설정
// 각 Element의 style은 SurveyMoudle.css로 관리하도록 한다.
// 설문지의 이름은 SurveyBoard로 설정한다.
// SurveyBoard의 이름은 다른 방식으로에서도 존재해서는 안된다.
// 설문지의 아이템 영역의 각각의 이름은 SurveyBoardItem으로 설정한다,
/* <설문지 영역> */
//설문지 생성
const setSurvey =()=>{
    const Board = document.createElement("div");
    Board.classList.add("SurveyBoard");

    //스타일 영역 삭제* 
    Board.style.width="400px";
    Board.style.height="600px";

    Board.addEventListener('click',clickSurvey);
    const Container = document.querySelectorAll(".index__Container")[0];
    Container.appendChild(Board);
}

// 설문지 조회
const selectBoard = () =>{
    const [SurveyBoard] = document.querySelectorAll(".SurveyBoard");
    return SurveyBoard;
}

//설문지 클릭 이벤트
const clickSurvey = (event) =>{
    const {target} = event;
    addSurveyBoardItem();
}

//설문지 아이템 영역 추가
const addSurveyBoardItem = () =>{
    const SurveyBoardItem = document.createElement("div");
    SurveyBoardItem.classList.add("SurveyBoardItem");

    //SurveyBoardItem 스타일 삭제
    SurveyBoardItem.style.width ="100px";
    SurveyBoardItem.style.height = "100px";

    SurveyBoardItem.addEventListener('click',clickSurveyBoardItem);
    //보드 조회
    const SurveyBoard = selectBoard();
    SurveyBoard.appendChild(SurveyBoardItem);
};
// 설문지 아이템 영역 삭제 
const deleteSurveyBoardItem = ({})=>{
}

//설문지 아이템 클릭 이벤트

const clickSurveyBoardItem = (evnet)=>{
    const {target} = event;
    console.dir(target);
}

/* </설문지 영역> */


//초기화

const init = () =>{
    setSurvey();
    

}
window.onload = init;