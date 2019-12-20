

function Survey (container){
    this.Survey = container
    this.SurveyName = "Survey";
    this.SurveyTitle ="SurveyTitle";
    this.SurveyItemName = "SurveyItemName";
    this.SurveyItemsTools = "SurveyItemTools";
    this.SurveyItemSubjectName = "";
    this.SurveyItemContentName = "";
}

//설문지 
Survey.prototype.createSurveyTitle = function(){
    const SurveyTitle = CreateDivTag();
    console.dir(SurveyTitle);

    
}
//항목 생성
Survey.prototype.createSurveyItem = function(){
    const SurveyItem = document.createElement("div");
    SurveyItem.classList.add(this.SurveyItemName);
    this.Survey.appendChild(SurveyItem);
}   
//항목 관리 도구
Survey.prototype.createSurveyTools = function(){
    const SurveyTools = document.createElement("div");
    SurveyItem.classList.add(SurveyItemsTools);
}


// 공통 태그 생성 영역
const CreateDivTag = (divName,divTextNode) =>{
    const DivTag = document.createElement("div");
    DivTag.classList.add(divName);
    DivTag.classList.add("mui-panel");
    return DivTag
}
// 제일 처음 실행어야 하는 함수
Survey.prototype.createSurvey = function(){
    this.createSurveyItem();
    this.createSurveyTitle();
}