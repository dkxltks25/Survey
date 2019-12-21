

function Survey (container){
    this.Survey = container
    this.SurveyName = "Survey";
    this.SurveyTitle ="SurveyTitle";
    this.SurveyItemName = "SurveyItem";
    this.SurveyItemsTools = "SurveyItemTools";
    this.SurveyItemSubjectName = "";
    this.SurveyItemContentName = "";
    
    this.SurveyTitleInput = "SurveyTitleInput";
    this.SurveyDescripInput = "SurveyDescripInput";

    //아이콘 이름
    //추가 버튼
    this.IconAddName = "add";
    this.ButtonIconAddName = "IconAdddButton";
    
    //material 태그 적용
    this.MaterialPanel = "mui-panel";
    this.MaterialInput = "input-field";
    this.MaterialTextArea = "materialize-textarea";
}

//설문지 제목 생성
Survey.prototype.createSurveyTitle = function(){
    const SurveyTitle = createDivTag([this.SurveyTitle,this.MaterialPanel]);
    
    const InputTitle = createDivTag([this.SurveyTitleInput,this.MaterialInput]);
    let placeholder = "제목";
    const InputTag = createInput(null,"text",null,placeholder);
    InputTitle.appendChild(InputTag);

    placeholder = "설명";
    const TextAreaTitle = createDivTag([this.SurveyDescripInput,this.MaterialInput]);
    const TextAreaTag= createTextArea([this.MaterialTextArea],placeholder);
    TextAreaTitle.appendChild(TextAreaTag);
    
    SurveyTitle.appendChild(InputTitle);        
    SurveyTitle.appendChild(TextAreaTitle);
    this.Survey.appendChild(SurveyTitle);
    
}
//항목 생성
Survey.prototype.createSurveyItem = function(event,ReduceSurvey){
  
}   
//항목 관리 도구
Survey.prototype.createSurveyTools = function(){
    const SurveyTools = createDivTag([this.SurveyItemsTools,this.MaterialPanel]);
    //항목 관리 도구 Item 추기
    const ReduceSurvey= this;
    const IconAddButton = createIconButton(this.ButtonIconAddName,this.IconAddName);
    IconAddButton.addEventListener('click',()=>{
        const SurveyItem = createDivTag([ReduceSurvey.SurveyItemName,ReduceSurvey.MaterialPanel]);
        this.Survey.appendChild(SurveyItem);
    });

    SurveyTools.appendChild(IconAddButton); 
    this.Survey.appendChild(SurveyTools);


}


// 공통 태그 생성 영역
const createDivTag = (divName) =>{
    const DivTag = document.createElement("div");
    divName.map((index)=>DivTag.classList.add(index));
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

const createInput = (InputName,type="text",text,placeholder="입력해주세요") =>{        
    //input TextName을 생성합시당
    console.log(placeholder);
    const InputTag = document.createElement("input");
    InputTag.setAttribute("type",type);
    InputTag.setAttribute("placeholder",placeholder);
    InputTag.classList.add(InputName);
    return InputTag;
}
const createTextArea = (TextAreaName,placeholder) =>{
    const TextAreaTag = document.createElement("textarea");
    TextAreaTag.setAttribute("placeholder",placeholder);
    TextAreaName.map((index=>TextAreaTag.classList.add(index)));
    return TextAreaTag;
}
// 제일 처음 실행어야 하는 함수
Survey.prototype.createSurvey = function(){
    this.createSurveyTitle();
    this.createSurveyTools();
}