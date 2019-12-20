

function Survey (container){
    this.Survey = container
    this.SurveyName = "Survey";
    this.SurveyTitle ="SurveyTitle";
    this.SurveyItemName = "SurveyItem";
    this.SurveyItemsTools = "SurveyItemTools";
    this.SurveyItemSubjectName = "";
    this.SurveyItemContentName = "";
    
    //아이콘 이름
    //추가 버튼
    this.IconAddName = "add";
    this.ButtonIconAddName = "IconAdddButton";

    //material 태그 적용
    this.MaterialPanel = "mui-panel";
}

//설문지 
Survey.prototype.createSurveyTitle = function(){
    const SurveyTitle = createDivTag([this.SurveyTitle,this.MaterialPanel]);
    this.Survey.appendChild(SurveyTitle);
}
//항목 생성
Survey.prototype.createSurveyItem = function(){
    const SurveyItem = createDivTag([this.SurveyItemName,this.MaterialPanel]);
    this.Survey.appendChild(SurveyItem);
}   
//항목 관리 도구
Survey.prototype.createSurveyTools = function(){
    const SurveyTools = createDivTag([this.SurveyItemsTools,this.MaterialPanel]);
    //항목 관리 도구 Item 추기
    const IconAddButton = createIconButton(this.ButtonIconAddName,this.IconAddName);
    SurveyTools.appendChild(IconAddButton); 
    this.Survey.appendChild(SurveyTools);


}


// 공통 태그 생성 영역
const createDivTag = (divName) =>{
    const DivTag = document.createElement("div");
    divName.map((index)=>DivTag.classList.add(index));
    console.log(DivTag);
    return DivTag
}
const createIconButton = (IconButtonName,IconText)=>{
    const IconName = "material-icons";
    const IconButton = document.createElement("button");
    IconButton.classList.add(IconButtonName);
    IconButton.classList.add("btn-floating");
    const Icon = document.createElement("i");
    Icon.classList.add(IconName);
    Icon.appendChild(document.createTextNode(IconText));
    IconButton.appendChild(Icon);
    return IconButton;
}

const createInput = (InputName,type="text",text) =>{
    //input TextName을 생성합시당

    const InputTag = document.createElement("input");
    InputTag.setAttribute("type",type);
    InputTag.classList.add(InputName);
    return InputTag;
}
// 제일 처음 실행어야 하는 함수
Survey.prototype.createSurvey = function(){
    this.createSurveyTitle();
    this.createSurveyTools();
}