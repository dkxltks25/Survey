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
}

//설문지 아이템 영역 추가
const addSurveyBoardItem = () =>{
    const SurveyBoardItem = document.createElement("div");
    SurveyBoardItem.classList.add("SurveyBoardItem");
    SurveyBoardItem.setAttribute("data-state",false);

    //SurveyBoardItem 스타일 삭제
    SurveyBoardItem.style.width ="100px";
    SurveyBoardItem.style.height = "100px";

    SurveyBoardItem.addEventListener('click',clickToggleSurveyBoardItem);
    
    const SurveyBoard = selectBoard();
    SurveyBoard.appendChild(SurveyBoardItem);
    console.log("설문지 아이템이 생성되었습니다");
};
// 설문지 아이템 영역 삭제 
const deleteSurveyBoardItem = (event)=>{
    const SurveyBoardItem = document.querySelectorAll(".SurveyItem--toggle--Checked");
    console.log(SurveyBoardItem);
}   

//설문지 아이템 클릭 이벤트
const clickToggleSurveyBoardItem = (event)=>{
    //클릭시 선택
    const SurveyItems = document.querySelectorAll(".SurveyBoardItem");
    //모든 SurveyItems의 data-state의 값을 false로 바꾸어 줍니다.
    //SurveyItemsd의 class를 추가합니다. toggleChecked
    
    window.addEventListener('keydown',(event)=>{
        const {which} = event;
        if(which === 18){
            //복수 선택모드
        }
    })
    for(let i = 0; i<SurveyItems.length;i++){
        SurveyItems[i].classList.remove("SurveyItem--toggle--Checked");
    }
    const {target} = event;
    target.classList.add("SurveyItem--toggle--Checked");
}
/* </설문지 영역> */

/*테스트 버튼 영역 */
const setTest = () =>{
    const [addButton,deleteButton] = document.querySelectorAll(".Test");
    addButton.addEventListener('click',addSurveyBoardItem);
    deleteButton.addEventListener('click',deleteSurveyBoardItem);
}

//초기화

const init = () =>{
    setSurvey();
    setTest();


}
window.onload = init;