function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }
  
  var logos=new Array()
  logos[0]='<a href="https://www.reaktor.com/" target="_blank"><img src="img/logos/reaktor.svg" alt="Reaktor" class="co-op__logo"></a>'
  logos[1]='<a href="https://www.sofokus.com/" target="_blank"><img src="img/logos/sofokus.svg" alt="Sofokus" class="co-op__logo"></a>'
  logos[2]='<a href="https://www.anders.fi/en/" target="_blank"><img src="img/logos/anders.svg" alt="Anders" class="co-op__logo"></a>'
  logos[3]='<a href="https://www.houston-inc.com/" target="_blank"><img src="img/logos/houston.svg" alt="Houston" class="co-op__logo"></a>'
  logos[4]='<a href="https://www2.deloitte.com/fi/fi.html" target="_blank"><img src="img/logos/deloitte.svg" alt="Deloitte" class="co-op__logo"></a>'
  logos[5]='<a href="https://www.vincit.fi/" target="_blank"><img src="img/logos/vincit.svg" alt="Vincit" class="co-op__logo"></a>'
  logos[6]='<a href="https://www.lvsbrokers.com/fi/" target="_blank"><img src="img/logos/lvs.svg" alt="LVS Brokers" class="co-op__logo"></a>'
  logos[7]='<a href="http://finitec.fi/" target="_blank"><img src="img/logos/finitec.svg" alt="Finitec" class="co-op__logo"></a>'
  
  var logosshuffled = shuffle(logos).join("");

  document.getElementById("co-op__logos").innerHTML = logosshuffled;
  