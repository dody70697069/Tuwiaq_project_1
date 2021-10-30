function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
}
$('#sfa').click(function () {
    let name = 'safa';
    let qty = parseInt($('#safa-qt').text());; //$('#qty').val();
    let price = 50; //R.S('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})

function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
}
$('#SNOW WHITE').click(function () {
    let name = 'SNOW WHITE';
    let qty = parseInt($('#SNOW WHITE-qt').text());; //$('#qty').val();
    let price = 55; //R.S('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})
$('#alis').click(function () {
    let name = 'alis';
    let qty = parseInt($('#alis-qt').text());; //$('#qty').val();
    let price = 70; //R.S('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})
$('#sahr').click(function () {
    let name = 'sahr';
    let qty = parseInt($('#sahr-qt').text());; //$('#qty').val();
    let price = 50; //R.S('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})
$('#besan').click(function () {
    let name = 'besan';
    let qty = parseInt($('#besan-qt').text());; //$('#qty').val();
    let price = 150; //R.S('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})
$('#nagham').click(function () {
    let name = 'nagham';
    let qty = parseInt($('#nagham-qt').text());; //$('#qty').val();
    let price = 200; //R.S('#price').val();
    let newItem = new Item(name, qty, price);
    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
    }
})

$('#safa-decrease').click(() => {
    let quantity = parseInt($('#safa-qt').text());
    if (quantity > 1) {

        $('#safa-qt').text(--quantity)


    }
    console.log(quantity);
})
$('#safa-decrease').click(() => {
    let quantity = parseInt($('#safa-qt').text());
    if (quantity > 1) {

        $('#safa-qt').text(++quantity)


    }
    console.log(quantity);
})
$('#SNOW WHITE-decrease').click(() => {
    let quantity = parseInt($('#safa-qt').text());
    if (quantity > 1) {

        $('#SNOW WHITE-qt').text(--quantity)


    }
    console.log(quantity);
})
$('#SNOW WHITE-decrease').click(() => {
    let quantity = parseInt($('#safa-qt').text());
    if (quantity > 1) {

        $('#safa-qt').text(++quantity)


    }
    console.log(quantity);
})
$('#alis-decrease').click(() => {
    let quantity = parseInt($('#alis-qt').text());
    if (quantity > 1) {

        $('#alis-qt').text(--quantity)


    }
    console.log(quantity);
})
$('#alis-decrease').click(() => {
    let quantity = parseInt($('#alis-qt').text());
    if (quantity > 1) {

        $('#alis-qt').text(++quantity)


    }
    console.log(quantity);
})
$('#SAHR-decrease').click(() => {
    let quantity = parseInt($('#SAHR-qt').text());
    if (quantity > 1) {

        $('#SAHR-qt').text(--quantity)


    }
    console.log(quantity);
})
$('#SAHR-decrease').click(() => {
    let quantity = parseInt($('#SAHR-qt').text());
    if (quantity > 1) {

        $('#SAHR-qt').text(++quantity)


    }
    console.log(quantity);
})
$('#besan-decrease').click(() => {
    let quantity = parseInt($('#besan-qt').text());
    if (quantity > 1) {

        $('#besan-qt').text(--quantity)


    }
    console.log(quantity);
})
$('#besan-decrease').click(() => {
    let quantity = parseInt($('#besan-qt').text());
    if (quantity > 1) {

        $('#besan-qt').text(++quantity)


    }
    console.log(quantity);
})
$('#nagham-decrease').click(() => {
    let quantity = parseInt($('#nagham-qt').text());
    if (quantity > 1) {

        $('#nagham-qt').text(--quantity)


    }
    console.log(quantity);
})
$('#nagham-decrease').click(() => {
    let quantity = parseInt($('#nagham-qt').text());
    if (quantity > 1) {

        $('#nagham-qt').text(++quantity)


    }
    console.log(quantity);
})

