document.getElementById("nav").innerHTML= `
<div id="nav" class="navigation">
<input type="checkbox" class="navigation__checkbox" id="navi-toggle">

<label for="navi-toggle" class="navigation__button">
    <span class="navigation__icon">&nbsp;</span>
</label>

<div class="navigation__background">&nbsp;</div>

<nav class="navigation__nav flex-row">
    <ul class="navigation__list flex-column" id="nav__list">
        <li class="navigation__item"><a href="index.html#landing" class="navigation__link">Etusivu</a></li>
        <li class="navigation__item"><a href="index.html#aikataulu" class="navigation__link">Aikataulu</a></li>
        <li class="navigation__item"><a href="info.html#yleisinfo" class="navigation__link">Yleisinfo</a></li>
        <li class="navigation__item"><a href="info.html#majoitus" class="navigation__link">Majoitus</a></li>
        <li class="navigation__item"><a href="info.html#rastikierrokset" class="navigation__link">Rastikierrokset</a></li>
        <li class="navigation__item"><a href="info.html#toimikunta" class="navigation__link">Toimikunta</a></li>
        <li class="navigation__item"><a href="index.html#co-op" class="navigation__link">Yhteistyö</a></li>
    </ul>    
</nav>
<div class="navigation__button sos__nav__button flex-row" id="sos-js">
        <a href="sos.html#sos__header">SOS</a>
</div>                
</div>
            
        
    `;