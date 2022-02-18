$(document).ready( function() {
})

function addValue(digit) {
    var value = $('#box').val();
    var output=  value + digit;
    $('#box').val(output);
}
function Value() {
     var value = $('#box').val();
     console.log(value);
     var answer = eval(value);
     $('#box').val(answer);
}
function clearvalue(){
    $('#box').val('');
}
function toggle() {
    var value = $('#box').val();
    if(value == ''){
        $('#box').val('-');
    }
    if(value == '-'){
        $('#box').val('+');
    }
    if(value == '+'){
        $('#box').val('-');
    }
}