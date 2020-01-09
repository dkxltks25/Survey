function UserForm(container,Collection){
    this.Container = container;
    this.Collection = Collection;
    this.ItemDiv = "FormItem";
    this.ItemTopDiv = "FormItemTop";
    this.ItemCenterDiv = "FormItemCenter";
    this.ItemTitle = "FormtItemTitle";
    this.ItemDescript = "FormItemDescrip";
    //material pannel 
    this.MaterialPanel = 'mui-panel'
    this.MaterialInput = 'input-field'   
    this.MaterialTextArea = 'materialize-textarea'
}


UserForm.prototype.createItem = function(){
    const {item} = this.Collection;
    console.log(item);

    item.map((index)=>{
        const Tag = createDivTag([this.MaterialPanel]);
        console.log(index);
        const Top = createDivTag([this.ItemTitle]);
        const Text = createSpanTag([this.ItemTitle],index.Title);
        Text.appendChild(document.createElement("br"));
        Top.appendChild(Text);
        if(index.Descrip !== undefined){
            const Descript = createSpanTag([this.ItemDescript],index.Descrip);
            Descript.appendChild(document.createElement("br"));
            Top.appendChild(Descript);
            
        }
        const Center = createDivTag([this.ItemCenterDiv]);
        if(index.Option == 0 || index.Option == 1){
            const inputDiv = createDivTag([this.MaterialInput]);
            const input = createInput();
            inputDiv.appendChild(input);
            Center.appendChild(inputDiv);
        }
        if(index.Option == 2){
            const RadioDiv =createDivTag([this.MaterialInput]);
            createRadioTag([],index.item,RadioDiv);
            Center.appendChild(RadioDiv);
        }
        Tag.appendChild(Top);
        Tag.appendChild(Center);
        this.Container.appendChild(Tag);
        

    })
};

UserForm.prototype.init = function(){
    this.createItem();
}




//공통태그영영
const createDivTag = divName => {
    const DivTag = document.createElement('div')
    divName.map(index => DivTag.classList.add(index))
    return DivTag
}
//span생성
const createSpanTag = (spanName,Text)=>{
    const SpanTag = document.createElement('span');
    spanName.map(index=>SpanTag.classList.add(index));
    SpanTag.appendChild(document.createTextNode(Text));
    return SpanTag;
}

const createIconButton = (IconButtonName, IconText, IconState = null) => {
    //IconState가 floating 버튼을 원하는 경우
    const IconName = 'material-icons'
    const IconButton = document.createElement('button')
    IconButton.classList.add('Button-border-outline')
    IconButton.classList.add(IconButtonName)
    IconState === null ? '' : IconButton.classList.add(IconState)
    const Icon = document.createElement('i')
    Icon.classList.add(IconName)
    Icon.appendChild(document.createTextNode(IconText))
    IconButton.appendChild(Icon)
    return IconButton
}

const createInput = (
    InputName,
    type = 'text',
    text = "",
    placeholder = '입력해주세요'
) => {
    //input TextName을 생성합시당
    const InputTag = document.createElement('input')
    InputTag.setAttribute('type', type)
    InputTag.setAttribute('placeholder', placeholder)
    InputTag.setAttribute('value',text);
    if (typeof InputName === 'string') {
        InputTag.classList.add(InputName)
    } else if (InputName !== null && InputName !== undefined) {
        InputName.map(index => InputTag.classList.add(index))
    }
    return InputTag
}
const createTextArea = (TextAreaName, placeholder,text="") => {
    const TextAreaTag = document.createElement('textarea')
    TextAreaTag.setAttribute('placeholder', placeholder)
    TextAreaTag.innerHTML=text;
    TextAreaName.map(index => TextAreaTag.classList.add(index))
    return TextAreaTag
}

const createSelectTag = (SelectName, ListName) => {
    const SelectTag = document.createElement('select')
    SelectTag.classList.add('Select-hidden')
    ListName.map((index, number) => {
        const OptionTag = document.createElement('Option')
        OptionTag.setAttribute('value', number)
        OptionTag.appendChild(document.createTextNode(index))
        SelectTag.appendChild(OptionTag)
    })
    SelectName.map(index => {
        SelectTag.classList.add(index)
    })
    return SelectTag
}

const createRadioTag = (RadioName, Text, AllRadioForm) => {
    
    Text.map((index)=>{
        const RadioTag = document.createElement('input')
        const LabelTag = document.createElement('label')
        const spanTag = document.createElement('span');
        spanTag.appendChild(document.createTextNode(index));
        RadioTag.setAttribute('type', 'radio')
        RadioName.map(index => RadioTag.classList.add(index))
        LabelTag.appendChild(RadioTag)
        LabelTag.appendChild(spanTag);
        AllRadioForm.appendChild(LabelTag);
    })
   
    
}

const createCheckTag = (CheckName, Text, AllRadioForm) => {
    const RadioTag = document.createElement('input')
    const LabelTag = document.createElement('label')
    const SpanTag = document.createElement('span')
    const InputTag = createInput()
    RadioTag.setAttribute('type', 'checkbox')
    CheckName.map(index => RadioTag.classList.add(index))

    if (Text === 'Add') {
        //추가 설정
        const AddOptionSpan = document.createElement('span')
        const EtcOptionSpan = document.createElement('span')
        AddOptionSpan.classList.add('ClickLabel')
        AddOptionSpan.appendChild(document.createTextNode('추가'))
        EtcOptionSpan.classList.add('ClickLabel')
        EtcOptionSpan.appendChild(document.createTextNode('기타'))
        SpanTag.appendChild(AddOptionSpan)
        SpanTag.appendChild(document.createTextNode('또는'))
        SpanTag.appendChild(EtcOptionSpan)
        LabelTag.appendChild(RadioTag)
        LabelTag.append(SpanTag)
        return [LabelTag, AddOptionSpan, EtcOptionSpan]
    } else {
        SpanTag.appendChild(InputTag)
        LabelTag.appendChild(RadioTag)
        LabelTag.appendChild(SpanTag)
    }
    return LabelTag
}
const createFormTag = (FormName, FormId) => {
    const FormTag = document.createElement('form')
    FormName.map(index => FormTag.appendChild(index))
    FormTag.id = FormId
    return FormTag
}
const createTableTag = TableName => {
    const TableTag = document.createElement('table')
    TableName.map(index => TableTag.appendChild(index))
    return TableTag
}