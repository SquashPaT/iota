/**
 * Created by Shan on 09.04.16.
 */



$(function(){
    $.ajax({
        url: '/data/', //the URL to your node.js server that has data
        dataType: 'json',
        cache: false
    }).done(function(data){
        //"data" will be JSON. Do what you want with it.
        alert(data);
    });
});