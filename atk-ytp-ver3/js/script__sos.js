function findAllLinks() {
  
        // From great Udemy course by Jonas Schmedtmann: http://codingheroes.io/
        
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]').click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              });
            }
          }
          $( "#navi-toggle" ).prop( "checked", false );
          
        });
        
        }



  $("#status-green").click(function(){;
    document.getElementById("sos__main").innerHTML= `
    <section class="sos__actions" id="sos__actions">
    <div class="landing-container">
            <div class="landing-container__nav">
                <a href="#sos__majoitus" class="button">Majoitus</a>
                <a href="#sos__ruokaa" class="button">Ruokapaikat</a>
                <a href="#sos__viinaa" class="button">Alkot, kaupat ja apteekit</a>
                <a href="#sos__hata" class="button">Hätänumerot</a>
            </div>

        </div>
</section>
<section class="section clippath__s" id="sos__majoitus">
<div class="page-container">
    <h2 class="heading heading__h2">Majoitus</h2>
    <p class="paragraph paragraph__light">
            Ulkopaikkakuntalaiset YTP-osallistujat majoittuvat osoitteessa <a target="_blank" href="https://goo.gl/maps/nxNS4JoAHH72" class="paragraph__link paragraph__link__light">Ruiskatu 8.</a> 
            Majoituksessa ollessasi muistathan kunnioittaa tiloja sekä tiloissa olevia majoitusvalvojia. Roskat roskiin, tarpeet vain saniteettitiloihin ja desibelilevelit kohtuullisissa rajoissa. T.äiti  
    </p>
    <p class="paragraph paragraph__light paragraph__strong" id="aukioloajat_heading">Aukioloajat:</p>
    <ul class="list list__light">
            <li>Keskiviikkona 17.10. majoitus aukeaa klo 10 ja sulkeutuu klo 12</li>
            <li>Torstaina 18.10. majoitus sulkeutuu klo 11</li>
            <li>Perjantaina 19.10 majoitus sulkeutuu klo 11</li>
    </ul>
    <p class="paragraph paragraph__light">
            <strong>HUOM!</strong> Majoituksen aukioloajat ovat edellämainitut eikä niistä poiketa, joten jos liityt tapahtumaan myöhemmin ja haluat majoitukseen tavaroitasi, kannattaa reput ja pussukat kuljetuttaa YTP-toverisi mukana Ruiskadulle. Ole myös tarkkana, että otat kaiken tarvitsemasi mukaan majoituksesta poistuessasi, ettei haalarin taskusta puuttuva kinnas tai pullonavaaja pääse lannistamaan YTP-tunnelmaa!
    </p>
    <p class="paragraph paragraph__light">
    Majoitukseen takaisin pääsee kätevimmin käyttämällä YTP-osallistujille järjestettyjä busseja, jotka kulkevat yöllä keskustasta majoitukseen. Bussin lähtöpaikka keskustassa on <strong>*insert bussin lähtöpaikka*</strong>
    </p>
    
    <p class="paragraph paragraph__light paragraph__medium">
            Bussi lähtee liikkeelle tasatunnein klo 02, 03, 04 ja 05 tai kun se on täynnä!
    </p>
    <a href="#" target="_blank" id="bussibutton" class="button button__single">Bussin lähtöpaikka Google Mapsissa</a>

    
    <p class="paragraph paragraph__light paragraph__centered paragraph__strong">
                    Taksitolpat
                    </p>
    <ul class="list list__light list__icons" id="taxi-list">
                    <li class="list__icons__item"><a href="https://goo.gl/maps/NZ56HRWdA9A2" target="_blank" class="button button__small">&rarr;</a>Yliopiston vierestä</li>
                    <li class="list__icons__item"><a href="https://goo.gl/maps/brdHzNZ5STL2" target="_blank" class="button button__small">&rarr;</a>Keskusta, keskiviikon jatkobileiden vierestä</li>
                    <li class="list__icons__item"><a href="https://goo.gl/maps/WBJGfxpazBB2" target="_blank" class="button button__small">&rarr;</a>Keskusta, torstain jatkobileiden vierestä</li>
                    <li class="list__icons__item"><a href="https://goo.gl/maps/9qyAA3s123v" target="_blank" class="button button__small">&rarr;</a>Keskusta, kauppatorin laidalla</li>
                    <li class="list__icons__item"><a href="https://goo.gl/maps/zXN3BmNN2sC2" target="_blank" class="button button__small">&rarr;</a>Kaikki edellämainitut taksitolpat</li>

                    
     </ul>
</div>
</section>
<section class="section" id="sos__ruokaa">
    <div class="page-container">
            <h2 class="heading heading__h2">Ruokapaikat</h2>
            <p class="paragraph paragraph__dark">
                    Kuten jokainen kunnollinen isäntä, olemme mekin ottaneet huomioon majoituksen lisäksi YTP-osallistujien ravitsemustarpeet ja sopineet muutamasta vatsalaukkuja varmasti miellyttävästä diilistä!
            </p>
            <p class="paragraph paragraph__dark">
                    Turkulainen opiskeljaravintolaketju Unica on luvannut tapahtuman kunniaksi tarjota turkulaisten all-time-favourite opiskelijaruokaa eli Kievin kanaa kahdessa ravintolassaan(?) keskiviikkona sekä torstaina, joten päiväsaikaan kannattaa suunnata tutustumaan tarkemmin tähän makuhermoja hivelevään ateriaan. 
            </p>
            <ul class="list list__dark list__icons">
                            <li class="list__icons__item"><a href="https://goo.gl/maps/s2efEKzKRB22" target="_blank" class="button button__small">&rarr;</a><p>Agoralla sijaitseva Galilei (lounas klo 14 saakka )</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/ZiVsYZfs4FH2" target="_blank" class="button button__small">&rarr;</a><p>Mäen juurella, Hämeenkadun vieressä sijaitseva Assarin ullakko (klo 20 saakka)
                                            Samoissa tiloissa myös kasvisruokaa tarjoava Brygge (klo 20 saakka)</p></li>
                            <li class="list__icons__item"><a href="https://www.lounaat.info/ty" target="_blank" class="button button__small">&rarr;</a><p>Lisäksi alle kilometrin päässä yliopistolta löytyy useita muitakin opiskelijaravintoloita, jotka löytyvät oheisesta linkistä päivän ruokalistoineen.</p></li>
                    </ul>
            <p class="paragraph paragraph__dark paragraph__centered paragraph__strong">
                            YTP-pitsukebutarjous!
                            </p>
            <p class="paragraph paragraph__dark">
                            Sanoiko joku pitsu? Kyllä! Sanoiko joku pitsua alennettuun hintaan? KYLLÄ!
                            Turun keskustassa ovensa klo 16 avaava ravintola <strong>Aurora</strong> tarjoaa kaikille YTP-osallistujille annoksiaan <strong>alennettuun hintaan</strong> aina aamuviiteen saakka. Ravintolasta löytyy annoksia niin pitsakebuista salaatteihin, joten tätä tarjousta ei todellakaan kannata missata.                    
            </p>
            <a href="https://goo.gl/maps/3qnN92dbYiD2" target="_blank" id="aurorabutton" class="button button__single">Aurora löytyy täältä!</a>

            <p class="paragraph paragraph__dark">
                    Turusta löytyy myös muita ravintoloita, joista paikalliset suosittelevat esimerkiksi seuraavia: 
            </p>
            <ul class="list list__dark list__icons" id="taxi-list">
                            <li class="list__icons__item"><a href="https://goo.gl/maps/UBz3dEe8hBP2" target="_blank" class="button button__small">&rarr;</a><p>Akateeminen Hesburger (avoinna ke ja to 10-02)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/B92kVftk9h72" target="_blank" class="button button__small">&rarr;</a><p>Hesburger Kauppatori a.k.a. torihese (avoinna ke ja to 10-05) </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/GMYdc2dy7LJ2" target="_blank" class="button button__small">&rarr;</a><p>Legendaarinen Turun torikiinalainen (avoinna about aina, tai sit ei)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/kDX6B9KvinC2" target="_blank" class="button button__small">&rarr;</a><p>Hämeenkadun Subway (avoinna 24/7)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/28yW4X7chr22" target="_blank" class="button button__small">&rarr;</a><p>Woolshed (avoinna ke ja to 11-23)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/jKcXuCk4maM2" target="_blank" class="button button__small">&rarr;</a><p>Morrisons (avoinna ke ja to 11-22) </p></li>

                            <li class="list__icons__item"><a href="https://goo.gl/maps/4zdEhPwtYDJ2" target="_blank" class="button button__small">&rarr;</a><p>Hook (avoinna ke ja to 16-23) </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/v4jVA5YxrTz" target="_blank" class="button button__small">&rarr;</a><p>Kasvisravintola Keidas (avoinna ke ja to 11-21)</li>
                            <li class="list__icons__item"><a href=" https://goo.gl/maps/g2DR1oSstrF2" target="_blank" class="button button__small">&rarr;</a><p>Kaikki edellä listatut ravintolat kartalla</li>
                                    
             </ul>
           
            
    </div>
            
</section>








<section class="section clippath__s" id="sos__viinaa">
            <div class="page-container">
                    <h2 class="heading heading__h2">Alkot, kaupat & apteekit</h2>
                    <p class="paragraph paragraph__light">
                            Janottaako? Kolottaako viinahammasta? Tekivätkö kaljakoppa ja viinitonkka ennenaikaisen tyhjenemisen? Ei hätiä mitiä hyvä ystävä. 
                    </p>
                    <p class="paragraph paragraph__light paragraph__centered paragraph__strong">
                            Turun Alkot palvelevat seuraavasti: 
                    </p>
                    <ul class="list list__light list__icons">
                            <li class="list__icons__item"><a href="https://goo.gl/maps/4nwaddmc5Sq" target="_blank" class="button button__small">&rarr;</a><p>Alko, K-Citymarket, lähinnä majoitusta (auki 9-21)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/615G7SoTLVN2" target="_blank" class="button button__small">&rarr;</a><p>Alko, kauppakeskus Wiklund, torin vieressä (auki 9-21)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/615G7SoTLVN2" target="_blank" class="button button__small">&rarr;</a><p>Alko, kauppakeskus Hansa, torin vieressä, viinipainotteinen valikoima (auki 9-21)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/sCA5pgJZjAB2" target="_blank" class="button button__small">&rarr;</a><p>Kaikki Alkot kartalla</p></li>
                    </ul>

                    <p class="paragraph paragraph__light paragraph__centered paragraph__strong">
                            Kauppoja juotavan ja purtavan metsästäjille:
                    </p>
                    <ul class="list list__light list__icons">
                            <li class="list__icons__item"><a href="https://goo.gl/maps/iCuEXdTQPS32" target="_blank" class="button button__small">&rarr;</a><p>Lähimpänä majoitusta: Sale Petrelius (avoinna 8-21) </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/EaqdXUzsNS82" target="_blank" class="button button__small">&rarr;</a><p>Hämeenkadun Sale (auki 7-23)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/UgLwHY6GZ1G2" target="_blank" class="button button__small">&rarr;</a><p>Hämeenkadun K-market Puhakka, panimo-oluita! (auki 6.30-22)
                            </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/7LA4tpU2NdH2" target="_blank" class="button button__small">&rarr;</a><p>Wiklundin S-market (avoinna 7-23)
                            </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/JpZCvKKRgym" target="_blank" class="button button__small">&rarr;</a><p>Keskustan Lidl (avoinna 7-21)
                            </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/wPpZhEAbkY12" target="_blank" class="button button__small">&rarr;</a><p>Kaubat kätevästi kartalla
                            </p></li>
                    </ul>
                    <!-- <a href="https://goo.gl/maps/wPpZhEAbkY12" target="_blank" class="button button__single">Kaubat kätevästi kartalla</a> -->
                    <p class="paragraph paragraph__light paragraph__centered paragraph__strong">
                                    Apteekit:
                            </p>
                    <ul class="list list__light list__icons">
                            <li class="list__icons__item"><a href="https://goo.gl/maps/i7vLGE4Ezty" target="_blank" class="button button__small">&rarr;</a><p>Lähellä majoitusta: Nova apteekki (Citymarketin yhteydessä, avoinna 8-20)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/aiU1px1cTn12" target="_blank" class="button button__small">&rarr;</a><p>Keskustassa: Yliopistonkadun apteekki (avoinna 7-23)</p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/FsD8AGA9p6L2" target="_blank" class="button button__small">&rarr;</a><p>Lähellä yliopistoa: Nummenmäen apteekki (avoinna 8.30-21)
                            </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/LJt2rDafVou" target="_blank" class="button button__small">&rarr;</a><p>Uusi Apteekki (baari, avoinna 14-02)
                            </p></li>
                            <li class="list__icons__item"><a href="https://goo.gl/maps/HJtcnyWhkc62" target="_blank" class="button button__small">&rarr;</a><p>Apteekit kartalla
                            </p></li>
                    </ul>
            </div>
</section>
<section class="section clippath__bottom__s" id="sos__hata">
    <div class="page-container">
            <h2 class="heading heading__h2">Hätäpuhelin</h2>
            <p class="paragraph paragraph__dark">
                    Jos joku tarvitsee lääkäriä, soitathan yleiseen hätänumeroon 112.
            </p>
            <p class="paragraph paragraph__dark">
                    Jos kyse on tapahtumaan liittyvästä kriisistä, meillä on käytössä tapahtuman ajan päivystävä puhelin akuuteille "hätä"tilanteille. Ethän soittele tähän numeroon ellei kyseessä ole tilanne, johon tarvitset järjestäjien välitöntä puuttumista. Järjestäjät tarvitsevat työrauhan.
            </p>
            
    </div>
            
</section>

    `;

    findAllLinks();
});


$("#status-yellow").click(function(){
        document.getElementById("sos__main").innerHTML= `
                



                
        <section class="sos__actions" id="sos__actions">
        <div class="landing-container">
                <div class="landing-container__nav">
                    <a href="#sos__majoitus" class="button button__XL">Haluan majoitukseen</a>
                    <a href="#sos__ruokaa" class="button button__XL">Ruokapaikat</a>
                    <a href="#sos__viinaa" class="button button__XL">Viinat ja lääkkeet</a>
                    <a href="#sos__hata" class="button button__XL">Hätänumerot</a>
                </div>
    
            </div>
</section>
<section class="section clippath__s" id="sos__majoitus">
<div class="page-container">
        <h2 class="heading heading__h2">Haluan majoitukseen</h2>
        <p class="paragraph paragraph__light">
                Majoitus on osoitteessa <a target="_blank" href="https://goo.gl/maps/nxNS4JoAHH72" class="paragraph__link paragraph__link__light">Ruiskatu 8.</a> 
                <strong>ÄLÄ PYÖRÄILE!</strong>
        </p>
        <p class="paragraph paragraph__light">
                Pääset sinne takaisin helpoiten hyppäämällä klo 02-05 majoituksen ja keskustan väliä kulkevaan ATK-YTP-bussiin.
        </p>
        <p class="paragraph paragraph__light paragraph__medium">
                Bussi lähtee liikkeelle tasatunnein klo 02, 03, 04 ja 05 tai kun se on täynnä!
        </p>
        <a href="#" target="_blank" id="bussibutton" class="button button__XL button__single button__single__sos">Bussin lähtöpaikka tästä</a>

        <a href="https://goo.gl/maps/zXN3BmNN2sC2" target="_blank" id="bussibutton" class="button button__XL button__single button__single__sos">Taksitolpat kartalla</a>
 <p class="paragraph paragraph__light">
        Majoituksessa koita tähdätä omaan makuupussiin/patjaan, muista juoda vettä ja valvojien sana on laki t.äiti
</p>

        <p class="paragraph paragraph__light paragraph__strong paragraph__centered" id="aukioloajat_heading">Aukioloajat:</p>
        <ul id="sos__aukiolot" class="list list__light">
                <li>Keskiviikkona klo 10-12</li>
                <li>Torstaina klo 11 asti</li>
                <li>Perjantaina klo 11</li>
        </ul>
        
        <p class="paragraph paragraph__light">
        Majoituksesta pääsee pois jalan, busseilla <a target="_blank" href="https://reittiopas.foli.fi/" class="paragraph__link paragraph__link__light"> (reittioppaasta löydät reitit ja aikataulut)</a> tai taksilla. Kävellen navigaattoriin hakusanoiksi <a target="_blank" href="https://goo.gl/maps/pBfkXCrBTbL2" class="paragraph__link paragraph__link__light">Natura tai Agora</a> Turun Yliopiston sijaan.
        </p>

</div>
</section>
<section class="section" id="sos__ruokaa">
        <div class="page-container">
                <h2 class="heading heading__h2">Ruokapaikat</h2>
                <p class="paragraph paragraph__dark">
                        <strong>Päivällä</strong> Unican kaksi opiskelijaraflaa tarjoavat legendaarista Kievin kanaa muiden vaihtoehtojen ohella:
                </p>
                
                <ul class="list list__dark list__icons">
                                <li class="list__icons__item"><a href="https://goo.gl/maps/s2efEKzKRB22" target="_blank" class="button button__small">&rarr;</a><p>Agoralla sijaitseva Galilei (lounas klo 14 saakka )</p></li>
                                <li class="list__icons__item"><a id="assari_link" href="https://goo.gl/maps/ZiVsYZfs4FH2" target="_blank" class="button button__small">&rarr;</a><p>Mäen juurella, Hämeenkadun vieressä sijaitseva Assarin ullakko (klo 20 saakka). Samoissa tiloissa myös kasvisruokaa tarjoava Brygge (klo 20 saakka)</p></li>
                               
                        </ul>
                <p class="paragraph paragraph__dark">
                        <strong>Illalla / yöllä</strong> mene 
                        <strong>Auroraan!</strong> Kaikki YTP:osallistujat saavat <strong>alennettuun hintaan</strong> ruokaa aamuviiiteen saakka! 
                        <strong>HUOMIO SIIS AAMUVIITEEN SAAKKA!</strong>
                </p>
                <a href="https://goo.gl/maps/3qnN92dbYiD2" target="_blank" id="aurorabutton" class="button button__XL button__single button__single__sos">Aurora löytyy täältä!</a>

                <p class="paragraph paragraph__dark">
                        Turusta löytyy myös muita ruokamestoja, tässä linkki, josta löytyy muutamia:  
                </p>
                <a href="https://goo.gl/maps/g2DR1oSstrF2" target="_blank" id="aurorabutton" class="button button__XL button__single button__single__sos">Muita ravintoloita</a>
                
        </div>
                
</section>

<section class="section clippath__s" id="sos__viinaa">
        <div class="page-container">
                <h2 class="heading heading__h2">Viinat ja lääkkeet</h2>

                <div class="landing-container__nav" id="landing-nav-main">
                <a href="https://goo.gl/maps/sCA5pgJZjAB2" target="_blank" class="button button__XL">Alkot kartalla</a>
                <a href="https://goo.gl/maps/wPpZhEAbkY12" target="_blank" class="button button__XL">Kaubat kartalla</a>
                <a href="https://goo.gl/maps/HJtcnyWhkc62" target="_blank" class="button button__XL">Apteekit kartalla</a>
                </div>
        </div>
</section>
<section class="section clippath__bottom__s" id="sos__hata">
        <div class="page-container">
                <h2 class="heading heading__h2">Hätäpuhelin</h2>
                <p class="paragraph paragraph__dark">
                        Jos joku tarvitsee lääkäriä, soitathan yleiseen hätänumeroon 112.
                </p>
                <p class="paragraph paragraph__dark">
                        Jos kyse on tapahtumaan liittyvästä kriisistä, meillä on käytössä tapahtuman ajan päivystävä puhelin akuuteille "hätä"tilanteille. Ethän soittele tähän numeroon ellei kyseessä ole tilanne, johon tarvitset järjestäjien välitöntä puuttumista. Järjestäjät tarvitsevat työrauhan.
                </p>
                
        </div>
                
</section>
        `;

        findAllLinks();
      });


$("#status-red").click(function(){
  document.getElementById("sos__main").innerHTML= `
  <section class="sos__actions" id="sos__actions">
  <div class="landing-container">
          <div class="landing-container__nav">
              <a href="#sos__majoitus" class="button button__XL button__sos">Haluan sammua</a>
              <a href="#sos__ruokaa" class="button button__XL button__sos">Nälkä</a>
              <a href="#sos__viinaa" class="button button__XL button__sos">En voi hyvin</a>
              <a href="#sos__hata" class="button button__XL button__sos">Hätänumerot</a>
          </div>

      </div>
</section>
<section class="section clippath__s" id="sos__majoitus">
<div class="page-container">
  <h2 class="heading heading__h2 heading__h2__sos">Haluan sammua</h2>
  <p class="paragraph paragraph__light paragraph__strong paragraph__strong__sos paragraph__centered">
          Näytä tämä osoite taksikuskille:
  </p>
  <p class="paragraph paragraph__light paragraph__strong paragraph__strong__sos paragraph__centered">
          Ruiskatu 8, Turku
  </p>

</div>
</section>
<section class="section" id="sos__ruokaa">
  <div class="page-container">
          <h2 class="heading heading__h2 heading__h2__sos">Nälkä</h2>
          <p class="paragraph paragraph__dark paragraph__strong paragraph__strong__sos paragraph__centered">
          Mene Auroraan
          </p>
          
          <a href="https://goo.gl/maps/3qnN92dbYiD2" target="_blank" id="aurorabutton" class="button button__XL button__single button__single__sos">Aurora löytyy täältä!</a>

  </div>
          
</section>

<section class="section clippath__s" id="sos__viinaa">
  <div class="page-container">
          <h2 class="heading heading__h2 heading__h2__sos">En voi hyvin</h2>
          <p class="paragraph paragraph__light paragraph__centered paragraph__strong paragraph__strong__sos">
                  Juo vettä!
          </p>
          <img class="sosdarra" src="img/sosdarra.jpg">
  </div>
</section>
<section class="section clippath__bottom__s" id="sos__hata">
  <div class="page-container">
          <h2 class="heading heading__h2 heading__h2__sos">Hätäpuhelin</h2>
          <p class="paragraph paragraph__dark paragraph__centered paragraph__strong paragraph__strong__sos">
                  Pyydä kaveria soittamaan 112, jos on oikeasti hätätilanne, etkä itse pysty.
          </p>
          
  </div>
          
</section>
  `;
  
  findAllLinks();

});


  