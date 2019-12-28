function Survey(container) {
    this.Survey = container
    this.SurveyName = 'Survey'
    this.SurveyTitle = 'SurveyTitle'
    this.SurveyItemName = 'SurveyItem'
    this.SurveyItemTopName = 'SurveyItemTop'
    this.SurveyItemCenterName = 'SurveyItemCenter'
    this.SurveyItemTitleName = 'SurveyItemTitle'
    this.SurveyItemSelectName = 'SurveyItemSelect'

    this.SurveyItemBottomName = 'SurveyItemBottom'
    this.SurveyItemsTools = 'SurveyItemTools'
    this.SurveyItemSubjectName = ''
    this.SurveyItemContentName = ''
    this.SurveyFormWrapName = 'SurveyFormWrap'
    this.SurveyTitleInput = 'SurveyTitleInput'
    this.SurveyDescripInput = 'SurveyDescripInput'
    this.SurveyShortAnswer = 'SurveyShortAnswer'
    this.SurveyRowColumnName = 'SurveyRowColumn'
    this.SurveyItemRowName = 'SurveyItemRow'
    this.SurveyItemColumnName = 'SurveyItemColumn'

    // 길이가 작은 텍스트 박스
    this.smallInput = 'SmallInput'
    //아이콘 이름
    //추가 버튼
    this.IconAddName = 'add'
    this.ButtonIconAddName = 'IconAdddButton'
    this.IconCopyName = 'content_copy'
    this.ButtonIconCopyName = 'IconCopyButton'
    this.IconDeleteName = 'delete'
    this.ButtonIconDeleteName = 'IconDeleteButton'
    this.IconCloseName = 'close'
    this.ButtonIconClose = 'IconCloseButton'
    this.IconInfoName = 'Info'
    this.ButtonIconInfoName = 'IconInfoButton'

    //아이콘 상태
    this.IconButtonState = 'btn-floating'

    //material 태그 적용
    this.MaterialPanel = 'mui-panel'
    this.MaterialInput = 'input-field'
    this.MaterialTextArea = 'materialize-textarea'

    //SelectTag 제목 텍스트

    this.SelectOptionText = [
        '단답형',
        '장문형',
        '객관식',
        '체크박스',
        '직선단계',
        '그리드',
        '체크박스 그리드',
    ]

    //form 이름
    this.SurveyFormName = 'SurveyForm'
}

//설문지 제목 생성
Survey.prototype.createSurveyTitle = function() {
    const SurveyTitle = createDivTag([this.SurveyTitle, this.MaterialPanel])

    const InputTitle = createDivTag([this.SurveyTitleInput, this.MaterialInput])
    let placeholder = '제목'
    const InputTag = createInput(null, 'text', null, placeholder)
    InputTitle.appendChild(InputTag)

    placeholder = '설명'
    const TextAreaTitle = createDivTag([
        this.SurveyDescripInput,
        this.MaterialInput,
    ])
    const TextAreaTag = createTextArea([this.MaterialTextArea], placeholder)
    TextAreaTitle.appendChild(TextAreaTag)

    SurveyTitle.appendChild(InputTitle)
    SurveyTitle.appendChild(TextAreaTitle)
    this.Survey.appendChild(SurveyTitle)
}

//항목 관리 도구
Survey.prototype.createSurveyTools = function() {
    const SurveyTools = createDivTag([
        this.SurveyItemsTools,
        this.MaterialPanel,
    ])
    //항목 관리 도구 Item 추가
    const IconAddButton = createIconButton(
        this.ButtonIconAddName,
        this.IconAddName,
        this.IconButtonState
    )
    IconAddButton.addEventListener('click', () => {
        const SurveyItem = createDivTag([
            this.SurveyItemName,
            this.MaterialPanel,
            'SurveyItem-unfocus',
        ])

        const SurveyItemTopDiv = createDivTag([this.SurveyItemTopName])
        const SurveyItemTitleDiv = createDivTag([this.MaterialInput])
        const SurveyItemTitle = createInput([
            this.SurveyItemTitleName,
            this.MaterialInput,
        ])
        //SelectBox영역
        const SurveySelectDiv = createDivTag([this.MaterialInput])
        const SurveySelectOption = createSelectTag(
            [this.SurveyItemSelectName],
            this.SelectOptionText
        )
        //센터 입력 칸 영역
        const SurveyItemCenterDiv = createDivTag([this.SurveyItemCenterName])

        SurveyItemTitleDiv.appendChild(SurveyItemTitle)
        SurveySelectDiv.appendChild(SurveySelectOption)
        SurveyItemTopDiv.appendChild(SurveyItemTitleDiv)
        SurveyItemTopDiv.appendChild(SurveySelectDiv)
        SurveyItem.appendChild(SurveyItemTopDiv)
        SurveyItem.appendChild(SurveyItemCenterDiv)
        //아이템 내의 셀렉트박스 체인지 이벤트
        SurveySelectOption.addEventListener('change', event => {
            const {
                target: { value },
            } = event
            //태그 내 하위 태그 삭제
            const { childNodes } = SurveyItemCenterDiv
            const { length } = childNodes
            for (let i = 0; i < length; i++) {
                childNodes[0].remove()
            }

            const SurveyForm = createDivTag([this.MaterialInput])
            //단답형
            if (value == 0) {
                const SurveyFormInput = createInput([
                    this.MaterialInput,
                    this.SurveyShortAnswer,
                ])
                SurveyFormInput.style.width = '20%'
                SurveyForm.appendChild(SurveyFormInput)
                SurveyItemCenterDiv.appendChild(SurveyForm)
            }
            //장문형
            if (value == 1) {
                const SurveyFormInput = createInput([this.MaterialInput])
                SurveyForm.appendChild(SurveyFormInput)
                SurveyItemCenterDiv.appendChild(SurveyForm)
            }
            //객관식
            if (value == 2) {
                const WrapDiv = createDivTag([this.SurveyFormWrapName])
                const WrapDiv1 = createDivTag([this.SurveyFormWrapName])
                //전체 폼 div 생성
                //저체 폼 생성
                const SurveyRadioFormTag = createFormTag([], '')
                //하위 라디오 버튼 생성
                const SurveyFormRadioTag = createRadioTag([], 'Text')

                //기타 추가 및 라디오 버튼 추가
                const [
                    SurveyFormAddRadio,
                    AddOptionSpan,
                    EtcOptionSpan,
                ] = createRadioTag([], 'Add', SurveyForm)
                SurveyRadioFormTag.appendChild(SurveyFormRadioTag)
                const IconCloseButton = createIconButton(
                    this.ButtonIconCloseName,
                    this.IconCloseName,
                    this.IconButtonState
                )

                //삭제 기능
                IconCloseButton.addEventListener('click', () => {
                    WrapDiv.remove()
                })
                SurveyForm.appendChild(SurveyRadioFormTag)
                WrapDiv1.appendChild(SurveyFormAddRadio)
                WrapDiv.appendChild(SurveyForm)
                WrapDiv.appendChild(IconCloseButton)
                SurveyItemCenterDiv.appendChild(WrapDiv)
                SurveyItemCenterDiv.appendChild(WrapDiv1)

                AddOptionSpan.addEventListener('click', () => {
                    const WrapDiv3 = createDivTag([this.SurveyFormWrapName])
                    const SurveyRadioFormTag = createFormTag([], '')
                    const SurveyFormRadioTag = createRadioTag([], 'Text')
                    SurveyRadioFormTag.appendChild(SurveyFormRadioTag)
                    const { childNodes } = SurveyItemCenterDiv
                    const IconCloseButton = createIconButton(
                        this.ButtonIconCloseName,
                        this.IconCloseName,
                        this.IconButtonState
                    )
                    IconCloseButton.addEventListener('click', () => {
                        WrapDiv3.remove()
                    })
                    WrapDiv3.appendChild(SurveyRadioFormTag)
                    WrapDiv3.appendChild(IconCloseButton)
                    if (childNodes.length < 2) {
                        childNodes[childNodes.length - 1].before(WrapDiv3)
                    } else {
                        childNodes[childNodes.length - 2].after(WrapDiv3)
                    }
                })
                EtcOptionSpan.addEventListener('click', () => {
                    //기타 추가
                })
            }
            //체크박스
            if (value == 3) {
                const WrapDiv = createDivTag([this.SurveyFormWrapName])
                const WrapDiv1 = createDivTag([this.SurveyFormWrapName])
                //전체 폼 div 생성
                //저체 폼 생성
                const SurveyRadioFormTag = createFormTag([], '')
                //하위 라디오 버튼 생성
                const SurveyFormRadioTag = createCheckTag([], 'Text')

                //기타 추가 및 라디오 버튼 추가
                const [
                    SurveyFormAddRadio,
                    AddOptionSpan,
                    EtcOptionSpan,
                ] = createCheckTag([], 'Add', SurveyForm)
                SurveyRadioFormTag.appendChild(SurveyFormRadioTag)
                const IconCloseButton = createIconButton(
                    this.ButtonIconCloseName,
                    this.IconCloseName,
                    this.IconButtonState
                )

                //삭제 기능
                IconCloseButton.addEventListener('click', () => {
                    WrapDiv.remove()
                })
                SurveyForm.appendChild(SurveyRadioFormTag)
                WrapDiv1.appendChild(SurveyFormAddRadio)
                WrapDiv.appendChild(SurveyForm)
                WrapDiv.appendChild(IconCloseButton)
                SurveyItemCenterDiv.appendChild(WrapDiv)
                SurveyItemCenterDiv.appendChild(WrapDiv1)

                AddOptionSpan.addEventListener('click', () => {
                    const WrapDiv3 = createDivTag([this.SurveyFormWrapName])
                    const SurveyRadioFormTag = createFormTag([], '')
                    const SurveyFormRadioTag = createCheckTag([], 'Text')
                    SurveyRadioFormTag.appendChild(SurveyFormRadioTag)
                    const { childNodes } = SurveyItemCenterDiv
                    const IconCloseButton = createIconButton(
                        this.ButtonIconCloseName,
                        this.IconCloseName,
                        this.IconButtonState
                    )
                    IconCloseButton.addEventListener('click', () => {
                        WrapDiv3.remove()
                    })
                    WrapDiv3.appendChild(SurveyRadioFormTag)
                    WrapDiv3.appendChild(IconCloseButton)
                    if (childNodes.length < 2) {
                        childNodes[childNodes.length - 1].before(WrapDiv3)
                    } else {
                        childNodes[childNodes.length - 2].after(WrapDiv3)
                    }
                })
                EtcOptionSpan.addEventListener('click', () => {
                    //기타 추가
                })
            }
            //직선 단계 1~N 번까지의 값중 만족도 조사로 제작
            if (value == 4) {
                const WrapDiv = createDivTag([this.SurveyFormName])
                const RowColumnWrapDiv = createDivTag([
                    this.SurveyRowColumnName,
                ])
                const CreateRow = State => {
                    let Subject
                    if (State === 'Add') {
                        //등록
                        Subject = '등록'
                    } else {
                        Subject = '일반'
                    }
                    const createRowDiv = createDivTag([this.SurveyItemRowName])

                    //Row;
                    const span = document.createElement('span')
                    span.appendChild(document.createTextNode('1'))
                    const InputArea = createInput(
                        [this.smallInput],
                        'text',
                        'text',
                        Subject
                    )
                    if(State === 'Add'){
                        InputArea.addEventListener('click',()=>{
                            CreateRow('Plus');
                        })
                    }
                    const CloseIconButton = createIconButton(
                        this.IconCloseButton,
                        this.IconCloseName,
                        this.IconButtonState
                    )
                    createRowDiv.appendChild(span)
                    createRowDiv.appendChild(InputArea)
                    State === 'Add'
                        ? ''
                        : createRowDiv.appendChild(CloseIconButton)
                    RowColumnWrapDiv.appendChild(createRowDiv)
                    
                }
                const CreateColumn = State => {
                    let Subject
                    if (State === 'Add') {
                        Subject = '등록'
                    } else {
                        Subject = '항목'
                    }
                    const createColumnDiv = createDivTag([
                        this.SurveyItemColumnName,
                    ])
                    const Columnspan = document.createElement('span')
                    Columnspan.appendChild(document.createTextNode('1'))
                    const ColumnInputArea = createInput(
                        [this.smallInput],
                        'text',
                        'text',
                        Subject
                    )
                    const ColumnCloseIconButton = createIconButton(
                        this.IconCloseButton,
                        this.IconCloseName,
                        this.IconButtonState
                    )
                    createColumnDiv.appendChild(Columnspan)
                    createColumnDiv.appendChild(ColumnInputArea)
                    State === 'Add'
                        ? ''
                        : createColumnDiv.appendChild(ColumnCloseIconButton)
                    RowColumnWrapDiv.appendChild(createColumnDiv)
                }
                CreateRow()
                CreateColumn()
                CreateRow('Add')
                CreateColumn('Add')
                WrapDiv.appendChild(RowColumnWrapDiv)
                SurveyItemCenterDiv.appendChild(WrapDiv)
            }
        })

        //아이템 하단 기능
        const SurveyItemBottomDiv = createDivTag([this.SurveyItemBottomName])
        //복사
        const SurveyItemCopy = createIconButton(
            this.ButtonIconCopyName,
            this.IconCopyName,
            this.IconButtonState
        )
        SurveyItemCopy.addEventListener('click', () => {
            this.Survey.appendChild(SurveyItem)
            console.log(this.Survey)
        })
        //삭제
        const SurveyItemDelete = createIconButton(
            this.ButtonIconDeleteName,
            this.IconDeleteName,
            this.IconButtonState
        )
        SurveyItemDelete.addEventListener('click', evnet => {
            SurveyItem.remove()
        })
        //설명

        const SurveyItemInfo = createIconButton(
            this.ButtonIconInfoName,
            this.IconInfoName,
            this.IconButtonState
        )
        //SurveyItemInfo
        SurveyItemInfo.addEventListener('click', () => {
            const {
                dataset: { id },
            } = SurveyItemInfo
            if (id === undefined) {
                const SurveyItemInput = createInput()
                SurveyItemTopDiv.after(SurveyItemInput)
                SurveyItemInfo.setAttribute('data-id', 'Complete')
            } else {
                alert('이미 등록하셨습니다')
            }
        })
        //필수
        //const SurveyItemNeed = createIconButton("","",null);
        //.3개
        //const SurveyItemOption = createIconButton("","",null);
        //Select init

        SurveyItem.appendChild(SurveyItemBottomDiv)
        this.Survey.appendChild(SurveyItem)

        SurveyItemBottomDiv.appendChild(SurveyItemCopy)
        SurveyItemBottomDiv.appendChild(SurveyItemDelete)
        SurveyItemBottomDiv.appendChild(SurveyItemInfo)
        const elems = document.querySelectorAll('select')
        const instances = M.FormSelect.init(elems)
        //SurveyItem click

        SurveyItem.addEventListener('click', () => {
            const SurveyItemFocus = document.querySelector('.SurveyItem-focus')
            if (SurveyItemFocus !== null) {
                SurveyItemFocus.classList.remove('SurveyItem-focus')
                SurveyItemFocus.classList.add('SurveyItem-unfocus')
            }
            SurveyItem.classList.remove('SurveyItem-unfocus')
            SurveyItem.classList.add('SurveyItem-focus')
            const Tool = document.querySelector(`.${this.SurveyItemsTools}`)
            const clientRect = SurveyItem.getBoundingClientRect() // DomRect 구하기 (각종 좌표값이 들어있는 객체)
            const relativeTop = clientRect.top
            const scrolledTopLength = window.pageYOffset // 스크롤된 길이
            const absoluteTop = scrolledTopLength + relativeTop // 절대좌표
            const calculate = absoluteTop - 291 <= 0 ? 0 : absoluteTop - 291

            Tool.setAttribute('style', `top:${calculate}px`)
        })
        if (instances !== null) {
            instance.getSelectedValues()
        }
    })
    SurveyTools.appendChild(IconAddButton)
    this.Survey.appendChild(SurveyTools)
}

//form 태그 등록

// 공통 태그 생성 영역
const createDivTag = divName => {
    const DivTag = document.createElement('div')
    divName.map(index => DivTag.classList.add(index))
    return DivTag
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
    text = 'text',
    placeholder = '입력해주세요'
) => {
    //input TextName을 생성합시당
    const InputTag = document.createElement('input')
    InputTag.setAttribute('type', type)
    InputTag.setAttribute('placeholder', placeholder)
    console.dir(typeof InputName)

    if (typeof InputName === 'string') {
        InputTag.classList.add(InputName)
    } else if (InputName !== null && InputName !== undefined) {
        InputName.map(index => InputTag.classList.add(index))
    }
    return InputTag
}
const createTextArea = (TextAreaName, placeholder) => {
    const TextAreaTag = document.createElement('textarea')
    TextAreaTag.setAttribute('placeholder', placeholder)
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
    const RadioTag = document.createElement('input')
    const LabelTag = document.createElement('label')
    const SpanTag = document.createElement('span')
    const InputTag = createInput()
    RadioTag.setAttribute('type', 'radio')
    RadioName.map(index => RadioTag.classList.add(index))

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
//특정 중복 기능을 수행하는 함수
//위치 값 계산
const calculatePoistion = () => {}

//특정태그의 하위 자식들을 삭제하는 함수
const deleteTagChild = Tag => {
    console.dir(Tag)
    const { childNodes } = Tag
    console.dir(childNodes)
    for (let i = 0; i < childNodes.length; i++) {
        console.dir(childNodes[i])
        childNodes[i].remove()
    }
}
// 제일 처음 실행어야 하는 함수
Survey.prototype.createSurvey = function() {
    this.createSurveyTitle()
    this.createSurveyTools()
}
