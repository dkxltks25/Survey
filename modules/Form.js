'use strict';

function UserForm(container, Collection) {
    this.Container = container;
    this.Collection = Collection;
    this.ItemDiv = 'FormItem';
    this.ItemTopDiv = 'FormItemTop';
    this.ItemCenterDiv = 'FormItemCenter';
    this.ItemTitle = 'FormtItemTitle';
    this.ItemDescript = 'FormItemDescrip';
    //material pannel
    this.MaterialPanel = 'mui-panel';
    this.MaterialInput = 'input-field';
    this.MaterialTextArea = 'materialize-textarea';
}

UserForm.prototype.createItem = function () {
    var _this = this;

    var item = this.Collection.item;

    console.log(item);

    item.map(function (index) {
        var Tag = createDivTag([_this.MaterialPanel]);
        console.log(index);
        var Top = createDivTag([_this.ItemTitle]);
        var Text = createSpanTag([_this.ItemTitle], index.Title);
        Text.appendChild(document.createElement('br'));
        Top.appendChild(Text);
        if (index.Descrip !== undefined) {
            var Descript = createSpanTag([_this.ItemDescript], index.Descrip);
            Descript.appendChild(document.createElement('br'));
            Top.appendChild(Descript);
        }
        var Center = createDivTag([_this.ItemCenterDiv]);
        if (index.Option == 0 || index.Option == 1) {
            var inputDiv = createDivTag([_this.MaterialInput]);
            var input = createInput();
            inputDiv.appendChild(input);
            Center.appendChild(inputDiv);
        }
        if (index.Option == 2) {
            var RadioDiv = createDivTag([_this.MaterialInput]);
            var RadioForm = document.createElement('form');

            createRadioTag([], index.item, RadioForm);
            RadioDiv.appendChild(RadioForm);
            Center.appendChild(RadioDiv);
        }
        if (index.Option == 4) {
            (function () {
                var TableForm = document.createElement('form');
                var TableDiv = createDivTag([_this.MaterialInput]);
                var TableTag = document.createElement('table');
                var Row = index.item.Row;
                var Column = index.item.Column;

                console.log(Row);
                console.log(Column);
                var TheadTag = document.createElement('thead');
                var TbodyTag = document.createElement('tbody');
                var TheadTrTag = document.createElement('tr');
                Row.map(function (index, position) {
                    if (position === 0) {
                        var _TdTag = document.createElement('td');
                        _TdTag.appendChild(document.createTextNode("#"));
                        TheadTrTag.appendChild(_TdTag);
                    }
                    var TdTag = document.createElement('td');
                    TdTag.appendChild(document.createTextNode(index));
                    TheadTrTag.appendChild(TdTag);
                });
                Column.map(function (index, position) {
                    var ColumnTrTag = document.createElement('tr');
                    var TdTag = document.createElement('td').appendChild(document.createTextNode(index));
                    ColumnTrTag.appendChild(TdTag);
                    for (var i = 0; i < Row.length; i++) {
                        var ColumnTdTag = document.createElement('td');
                        var label = document.createElement('label');
                        var RadioTag = document.createElement('input');
                        var SpanTag = document.createElement('span');
                        RadioTag.setAttribute('type', 'radio');
                        RadioTag.setAttribute('name', 'form');
                        label.appendChild(RadioTag);
                        label.appendChild(SpanTag);
                        ColumnTdTag.appendChild(label);
                        ColumnTrTag.appendChild(ColumnTdTag);
                    }
                    TbodyTag.appendChild(ColumnTrTag);
                });
                TheadTag.appendChild(TheadTrTag);
                TableTag.appendChild(TheadTrTag);
                TableTag.appendChild(TbodyTag);
                TableDiv.appendChild(TableTag);
                TableForm.appendChild(TableDiv);
                Center.appendChild(TableForm);
            })();
        }
        Tag.appendChild(Top);
        Tag.appendChild(Center);
        _this.Container.appendChild(Tag);
    });
};

UserForm.prototype.init = function () {
    this.createItem();
};

//공통태그영영
var createDivTag = function createDivTag(divName) {
    var DivTag = document.createElement('div');
    divName.map(function (index) {
        return DivTag.classList.add(index);
    });
    return DivTag;
};
//span생성
var createSpanTag = function createSpanTag(spanName, Text) {
    var SpanTag = document.createElement('span');
    spanName.map(function (index) {
        return SpanTag.classList.add(index);
    });
    SpanTag.appendChild(document.createTextNode(Text));
    return SpanTag;
};

var createIconButton = function createIconButton(IconButtonName, IconText) {
    var IconState = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    //IconState가 floating 버튼을 원하는 경우
    var IconName = 'material-icons';
    var IconButton = document.createElement('button');
    IconButton.classList.add('Button-border-outline');
    IconButton.classList.add(IconButtonName);
    IconState === null ? '' : IconButton.classList.add(IconState);
    var Icon = document.createElement('i');
    Icon.classList.add(IconName);
    Icon.appendChild(document.createTextNode(IconText));
    IconButton.appendChild(Icon);
    return IconButton;
};

var createInput = function createInput(InputName) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];
    var text = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    var placeholder = arguments.length <= 3 || arguments[3] === undefined ? '입력해주세요' : arguments[3];

    //input TextName을 생성합시당
    var InputTag = document.createElement('input');
    InputTag.setAttribute('type', type);
    InputTag.setAttribute('placeholder', placeholder);
    InputTag.setAttribute('value', text);
    if (typeof InputName === 'string') {
        InputTag.classList.add(InputName);
    } else if (InputName !== null && InputName !== undefined) {
        InputName.map(function (index) {
            return InputTag.classList.add(index);
        });
    }
    return InputTag;
};
var createTextArea = function createTextArea(TextAreaName, placeholder) {
    var text = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    var TextAreaTag = document.createElement('textarea');
    TextAreaTag.setAttribute('placeholder', placeholder);
    TextAreaTag.innerHTML = text;
    TextAreaName.map(function (index) {
        return TextAreaTag.classList.add(index);
    });
    return TextAreaTag;
};

var createSelectTag = function createSelectTag(SelectName, ListName) {
    var SelectTag = document.createElement('select');
    SelectTag.classList.add('Select-hidden');
    ListName.map(function (index, number) {
        var OptionTag = document.createElement('Option');
        OptionTag.setAttribute('value', number);
        OptionTag.appendChild(document.createTextNode(index));
        SelectTag.appendChild(OptionTag);
    });
    SelectName.map(function (index) {
        SelectTag.classList.add(index);
    });
    return SelectTag;
};

var createRadioTag = function createRadioTag(RadioName, Text, AllRadioForm) {
    Text.map(function (index) {
        var RadioTag = document.createElement('input');
        var LabelTag = document.createElement('label');
        var spanTag = document.createElement('span');
        spanTag.appendChild(document.createTextNode(index));
        RadioTag.setAttribute('type', 'radio');
        RadioName.map(function (index) {
            return RadioTag.classList.add(index);
        });
        RadioTag.setAttribute('name', 'form');
        LabelTag.appendChild(RadioTag);
        LabelTag.appendChild(spanTag);
        AllRadioForm.appendChild(LabelTag);
    });
};

var createCheckTag = function createCheckTag(CheckName, Text, AllRadioForm) {
    var RadioTag = document.createElement('input');
    var LabelTag = document.createElement('label');
    var SpanTag = document.createElement('span');
    var InputTag = createInput();
    RadioTag.setAttribute('type', 'checkbox');
    CheckName.map(function (index) {
        return RadioTag.classList.add(index);
    });

    if (Text === 'Add') {
        //추가 설정
        var AddOptionSpan = document.createElement('span');
        var EtcOptionSpan = document.createElement('span');
        AddOptionSpan.classList.add('ClickLabel');
        AddOptionSpan.appendChild(document.createTextNode('추가'));
        EtcOptionSpan.classList.add('ClickLabel');
        EtcOptionSpan.appendChild(document.createTextNode('기타'));
        SpanTag.appendChild(AddOptionSpan);
        SpanTag.appendChild(document.createTextNode('또는'));
        SpanTag.appendChild(EtcOptionSpan);
        LabelTag.appendChild(RadioTag);
        LabelTag.append(SpanTag);
        return [LabelTag, AddOptionSpan, EtcOptionSpan];
    } else {
        SpanTag.appendChild(InputTag);
        LabelTag.appendChild(RadioTag);
        LabelTag.appendChild(SpanTag);
    }
    return LabelTag;
};
var createFormTag = function createFormTag(FormName, FormId) {
    var FormTag = document.createElement('form');
    FormName.map(function (index) {
        return FormTag.appendChild(index);
    });
    FormTag.id = FormId;
    return FormTag;
};
var createTableTag = function createTableTag(TableName) {
    var TableTag = document.createElement('table');
    TableName.map(function (index) {
        return TableTag.appendChild(index);
    });
    return TableTag;
};