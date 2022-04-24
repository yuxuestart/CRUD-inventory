document.getElementById("insert-item").addEventListener('click', function(e) {
    var row_val = document.getElementById("inventory-table").insertRow(-1);
    var btn = document.createElement("button");
    btn.innerHTML = "Edit";
    btn.setAttribute("class", 'btn btn-success');

    var btn1 = document.createElement("button");
    btn1.innerHTML = "Delete";
    btn1.setAttribute("class", 'btn btn-warning');

    row_val.insertCell(0).innerHTML = document.getElementById("item").value;
    row_val.insertCell(1).appendChild(btn);
    row_val.insertCell(2).appendChild(btn1);
    $("item").val("");

    $(btn1).on('click', function() {
        var parent = this.parentNode.parentNode;
        parent.parentNode.removeChild(parent);
    });

    // after click edit button, set the placeholder back to original
    $(btn).on('click', function() {
        var row = this.parentNode.parentNode;
        var cell = row.getElementsByTagName("td")[0];
        cell.innerText = $("#item").val();
    });
})

// make the delete button delete the row
$('.btn-warning').on('click', function() {
    var parent = this.parentNode.parentNode;
    parent.parentNode.removeChild(parent);
});

// make edit button edit the text in the input cell
$('.btn-success').on('click', function() {
    var row = this.parentNode.parentNode;
    var cell = row.getElementsByTagName("td")[0]
    cell.innerText = $("#item").val();
})