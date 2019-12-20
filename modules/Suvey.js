

function Survey (container){
    this.Survey = container
    this.SurveyName = "Survey";
    this.SurveyItemName = "";
    this.SurveyItemsTools = "SurveyItemTools";
    this.SurveyItemSubjectName = "";
    this.SurveyItemContentName = "";
}
//항목 생성
Survey.prototype.createSurveyItem = function(){
    const SurveyItem = document.createElement("div");
    SurveyItem.classList.add(SurveyItemName);


}   
//항목 관리 도구
Survey.prototype.createSurveyTools = function(){
    const SurveyTools = document.createElement("div");
    SurveyItem.classList.add(SurveyItemsTools);
}

// 제일 처음 실행어야 하는 함수
Survey.prototype.createSurvey = function(){


}