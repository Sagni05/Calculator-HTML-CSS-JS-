function clickme(){
    var amount = document.getElementById('show').value;
    var service = document.getElementById('service').value;
    var peoples = document.getElementById('persons').value;
    var total = Math.round((amount * service) / peoples);
   document.getElementById('change').innerHTML = total;
}