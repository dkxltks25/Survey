

function Survey (container){
    this.Survey = container
    this.SurveyName = "Survey";
    this.SurveyTitle ="SurveyTitle";
    this.SurveyItemName = "SurveyItem";
    this.SurveyItemTopName = "SurveyItemTop";
    this.SurveyItemTitleName = "SurveyItemTitle";
    this.SurveyItemSelectName = "SurveyItemSelect";

    this.SurveyItemBottomName = "SurveyItemBottom";
    this.SurveyItemsTools = "SurveyItemTools";
    this.SurveyItemSubjectName = "";
    this.SurveyItemContentName = "";
    
    this.SurveyTitleInput = "SurveyTitleInput";
    this.SurveyDescripInput = "SurveyDescripInput";

    //아이콘 이름
    //추가 버튼
    this.IconAddName = "add";
    this.ButtonIconAddName = "IconAdddButton";
    this.IconCopyName = "content_copy";
    this.ButtonIconCopyName = "IconCopyButton";
    this.IconDeleteName = "delete";
    this.ButtonIconDeleteName = "IconDeleteButton";
    
    //아이콘 상태
    this.IconButtonState = "btn-floating"; 
    
    //material 태그 적용
    this.MaterialPanel = "mui-panel";
    this.MaterialInput = "input-field";
    this.MaterialTextArea = "materialize-textarea";

    //SelectTag 제목 텍스트
    
    this.SelectOptionText =["단답형","장문형","객관식","체크박스"];
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

//항목 관리 도구
Survey.prototype.createSurveyTools = function(){
    const SurveyTools = createDivTag([this.SurveyItemsTools,this.MaterialPanel]);
    //항목 관리 도구 Item 추가
    const IconAddButton = createIconButton(this.ButtonIconAddName,this.IconAddName,this.IconButtonState);
    IconAddButton.addEventListener('click',()=>{
        const SurveyItem = createDivTag([this.SurveyItemName,this.MaterialPanel,"SurveyItem-unfocus"]);

        
        const SurveyItemTopDiv = createDivTag([this.SurveyItemTopName]);
        const SurveyItemTitleDiv = createDivTag([this.MaterialInput]);
        const SurveyItemTitle = createInput([this.SurveyItemTitleName,this.MaterialInput]);
        const SurveySelectDiv = createDivTag([this.MaterialInput]);
        const SurveySelectOption = createSelectTag([this.SurveyItemSelectName],this.SelectOptionText);
        SurveyItemTitleDiv.appendChild(SurveyItemTitle);
        SurveySelectDiv.appendChild(SurveySelectOption);
        SurveyItemTopDiv.appendChild(SurveyItemTitleDiv);
        SurveyItemTopDiv.appendChild(SurveySelectDiv);
        SurveyItem.appendChild(SurveyItemTopDiv);

        
        
        console.dir(SurveySelectOption);
        //아이템 하단 기능
        const SurveyItemBottomDiv =createDivTag([this.SurveyItemBottomName]);
        //복사
        const SurveyItemCopy = createIconButton(this.ButtonIconCopyName,this.IconCopyName,this.IconButtonState);
        SurveyItemCopy.addEventListener('click',()=>{
            this.Survey.appendChild(SurveyItem);
            console.log(this.Survey);

        })
        //삭제
        const SurveyItemDelete = createIconButton(this.ButtonIconDeleteName,this.IconDeleteName,this.IconButtonState);      
        SurveyItemDelete.addEventListener('click',(evnet)=>{
            SurveyItem.remove();
        }) 
        //필수
        //const SurveyItemNeed = createIconButton("","",null);
        //.3개
        //const SurveyItemOption = createIconButton("","",null);
        //Select init 
        
        SurveyItem.appendChild(SurveyItemBottomDiv);
        this.Survey.appendChild(SurveyItem);
        
        SurveyItemBottomDiv.appendChild(SurveyItemCopy);
        SurveyItemBottomDiv.appendChild(SurveyItemDelete);
        
        const elems = document.querySelectorAll('select');
        const instances = M.FormSelect.init(elems);
        //SurveyItem click
        
        SurveyItem.addEventListener('click',()=>{
            const SurveyItemFocus = document.querySelector(".SurveyItem-focus");
            if(SurveyItemFocus !== null){
                SurveyItemFocus.classList.remove("SurveyItem-focus");
                SurveyItemFocus.classList.add("SurveyItem-unfocus");
            }
            SurveyItem.classList.remove("SurveyItem-unfocus");
            SurveyItem.classList.add("SurveyItem-focus");
            const Tool = document.querySelector(`.${this.SurveyItemsTools}`);
            const clientRect = SurveyItem.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
            const relativeTop = clientRect.top;
            const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
            const absoluteTop = scrolledTopLength + relativeTop; // 절대좌표
            const calculate = (absoluteTop - 291) <= 0 ? 0 : absoluteTop-291;
        
            Tool.setAttribute("style",`top:${calculate}px`);
        }); 
        if(instances !== null){
            instance.getSelectedValues();
        }
        console.log(instances);
        SurveyItem.addEventListener('move',()=>alert(1));
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
const createIconButton = (IconButtonName,IconText,IconState=null)=>{
    //IconState가 floating 버튼을 원하는 경우
    const IconName = "material-icons";
    const IconButton = document.createElement("button");
    IconButton.classList.add("Button-border-outline");    
    IconButton.classList.add(IconButtonName);
    IconState === null ? "" : IconButton.classList.add(IconState);
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

const createSelectTag = (SelectName,ListName) =>{
    const SelectTag = document.createElement("select");
    SelectTag.classList.add("Select-hidden");
    ListName.map((index,number)=>{
        const OptionTag = document.createElement("Option");
        OptionTag.setAttribute("value",number);
        OptionTag.appendChild(document.createTextNode(index));
        SelectTag.appendChild(OptionTag);
    })
    SelectName.map((index)=>{
        SelectTag.classList.add(index);
    })
    return SelectTag;
}

const calculatePoistion = ()=>{

}
// 제일 처음 실행어야 하는 함수
Survey.prototype.createSurvey = function(){
    this.createSurveyTitle();
    this.createSurveyTools();
}