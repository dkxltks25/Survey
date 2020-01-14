function UserForm(container, LoadedData) {
    this.Container = container;
    this.FormData = LoadedData;
    this.ShowCount = 0;

    //panel
    this.MaterialPanel = 'mui-panel'
    this.Input = 'input-field'
    //css use hide and show
    this.ShowDiv = "showItem";
    this.HideDiv = "hideDiv";
    this.groupId = "group";
    this.groupCount = 1;
};

UserForm.prototype.ReadData = function () {
    // const {Title} = this.FormData;
    const { item: items } = this.FormData;
    items.map((index, number) => {
        const { Option } = index;
        //단답형
        switch (parseInt(Option)) {
            case 0:
                this.createShortAnswer(index);
                break;
            case 1:
                this.createLongAnswer(index);
                break;
            case 2:
                this.createMultipleRadio(index);
                break;
            case 3:
                console.log("단답형");
                break;
            case 4:
                this.createTableAnswer(index);
                break;
            default:
                break;
        }
    })
}
//단답형
UserForm.prototype.createShortAnswer = function (index, value = null) {
    const item = document.createElement('div');
    item.classList.add('Item');
    const Title = CreateTitleAndDescrip(index.Title, index.Descrip === undefined ? undefined : index.Descrip);
    const ItemCenter = document.createElement('form');
    ItemCenter.classList.add('ItemCenter');

    const InputField = document.createElement('div');
    InputField.classList.add(this.Input);

    const Input = document.createElement('input');

    value === null ? "" : Input.setAttribute('value', value);
    Input.setAttribute('placeholder', index.Title);
    Input.setAttribute('name',this.groupId+this.groupCount);
   
    Input.setAttribute('type', 'text');
    Input.setAttribute('id', this.labelId + this.labelCount);
    Input.classList.add("validate");
    ItemCenter.appendChild(Input);

    item.appendChild(Title);
    item.appendChild(ItemCenter);

    container.children[container.children.length - 2].after(item);
    this.groupCount++;
}
//장문형 
UserForm.prototype.createLongAnswer = function (index, value = null) {
    const item = document.createElement('div');
    item.classList.add('Item');
    const Title = CreateTitleAndDescrip(index.Title, index.Descrip === undefined ? undefined : index.Descrip);
    const ItemCenter = document.createElement('form');
    ItemCenter.classList.add('ItemCenter');

    const InputField = document.createElement('div');
    InputField.classList.add(this.Input);

    const Input = document.createElement('textArea');
    Input.setAttribute('name',this.groupId+this.groupCount);

    value === null ? "" : Input.setAttribute('value', value);
    Input.setAttribute('placeholder', index.Title);
    Input.classList.add("materialize-textarea");
    ItemCenter.appendChild(Input);

    item.appendChild(Title);
    item.appendChild(ItemCenter);

    container.children[container.children.length - 2].after(item);
    this.groupCount++;

}
//객관식
UserForm.prototype.createMultipleRadio = function (index, value = null) {
    const item = document.createElement('div');
    item.classList.add('Item');
    const Title = CreateTitleAndDescrip(index.Title, index.Descrip === undefined ? undefined : index.Descrip);
    const ItemCenter = document.createElement('form');
    ItemCenter.classList.add('ItemCenter');
    const { item: Items } = index;

    Items.map((index) => {
        const p = document.createElement("p");
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'radio')
        input.setAttribute('class', 'with-gap');
        input.setAttribute('name', this.groupId + this.groupCount)
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(index));
        label.appendChild(input);
        label.appendChild(span);
        p.appendChild(label);
        ItemCenter.appendChild(p);

    })
    this.groupCount++;
    item.appendChild(Title);
    item.appendChild(ItemCenter);

    container.children[container.children.length - 2].after(item);
}
//객관식1
UserForm.prototype.createMultipleCheck = function () {

}
//그리드
UserForm.prototype.createTableAnswer = function (index, value = null) {
    const item = document.createElement('div');
    item.classList.add('Item');
    const Title = CreateTitleAndDescrip(index.Title, index.Descrip === undefined ? undefined : index.Descrip);
    const ItemCenter = document.createElement('form');
    ItemCenter.classList.add('ItemCenter');
    const { item: Items } = index;
    const { Row } = Items;
    const { Column } = Items;
    console.dir(Row);
    console.dir(Column);
    const Table = document.createElement('table');
    const TrTag = document.createElement('tr');
    Row.map((index, number) => {
        if (number === 0) {
            const Td = document.createElement('td');
            TrTag.appendChild(Td);
        } 
            const Td = document.createElement('td');
            Td.appendChild(document.createTextNode(index));
            TrTag.appendChild(Td);
        
    })
    Table.appendChild(TrTag);
    Column.map((index) => {
        const Tr = document.createElement('tr');
        Row.map((_, number) => {
            let Td = document.createElement('td');
            if (number === 0) {
                Td.appendChild(document.createTextNode(index));
                Tr.appendChild(Td);
                Td = document.createElement('td');
            }
                const p = document.createElement("p");
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.setAttribute('type', 'radio')
                input.setAttribute('class', 'with-gap');
                input.setAttribute('name', this.groupId + this.groupCount)
                const span = document.createElement('span');
                span.appendChild(document.createTextNode(index));
                label.appendChild(input);
                label.appendChild(span);
                p.appendChild(label);
                Td.appendChild(p);
                Tr.appendChild(Td);
        })
        Table.appendChild(Tr);
        this.groupCount++;
        
    })
    ItemCenter.appendChild(Table);
    item.appendChild(Title);
    item.appendChild(ItemCenter);

    container.children[container.children.length - 2].after(item);
}
UserForm.prototype.init = function () {
    this.ReadData();
    const saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener('click',()=>{
        for(let i = 1; i<this.groupCount;i++){
            const Names = document.getElementsByName(this.groupId+i);
            console.dir(Names);
        }
    })
}

const CreateTitleAndDescrip = (title, Descrip = null) => {
    console.log(title);
    const divTag = document.createElement('div');
    divTag.classList.add('ItemHeader');
    const h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode(title));
    const h4 = document.createElement('h6');
    if (Descrip === null) {
        Descrip = "설명이 없습니다.";
    }
    h4.appendChild(document.createTextNode(`(${Descrip})`));
    divTag.appendChild(h3);
    divTag.appendChild(h4);
    return divTag;

}