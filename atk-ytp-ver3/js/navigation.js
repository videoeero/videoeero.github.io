document.getElementById("nav").innerHTML= `
<input type="checkbox" class="navigation__checkbox" id="navi-toggle">

<label for="navi-toggle" class="navigation__button">
    <span class="navigation__icon">&nbsp;</span>
</label>

<div class="navigation__background">&nbsp;</div>

<nav class="navigation__nav">
    <ul class="navigation__list" id="nav__list">
        <li class="navigation__item"><a href="/#landing" class="navigation__link">Etusivu</a></li>
        <li class="navigation__item"><a href="index.html" class="navigation__link">Aikataulu</a></li>
        <li class="navigation__item"><a href="index.html" class="navigation__link">Yleisinfo</a></li>
        <li class="navigation__item"><a href="index.html" class="navigation__link">Majoitus</a></li>
        <li class="navigation__item"><a href="index.html" class="navigation__link">Rastikierrokset</a></li>
        <li class="navigation__item"><a href="index.html" class="navigation__link">Toimikunta</a></li>
        <li class="navigation__item"><a href="/#co-op" class="navigation__link">Yhteistyö</a></li>
    </ul>    
        
    </div>
</nav>
<div class="navigation__button sos__nav__button">
    <a href="sos.html">SOS</a>
</div>
            
        
    `;