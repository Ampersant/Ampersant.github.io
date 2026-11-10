<header id="header">
    <nav>
        <div class="wrap">
            <div class="logo">
               <a href="index.php"><?php require_once('H:/xampp3/htdocs/portfolio/assets/img/M (2).svg'); ?></a> 
            </div>
            <div class="menu">
                <ul>
                    <li><a class="nav-link" href="#my-skills" data-i18n="nav.skills">Skills</a></li>
                    <li><a class="nav-link" href="#portfolio" data-i18n="nav.portfolio">Portfolio</a></li>
                    <li><a class="nav-link" href="#contact" data-i18n="nav.contact">Contact</a></li>
                </ul>
            </div>
            <div id="search" class="search-container">
                <div class="lang-switch" role="group" aria-label="Language">
                    <button type="button" class="lang-switch__btn is-active" data-set-lang="en" aria-pressed="true">EN</button>
                    <button type="button" class="lang-switch__btn" data-set-lang="ru" aria-pressed="false">RU</button>
                </div>
                <input type="text" placeholder="Search..." data-i18n-placeholder="search.placeholder">
                <div class="search"></div>
             </div>
        </div>
    </nav>
    <!-- RESPONSIVE -->
    <div id="toggle" class="button_container">
    <span class="top-toggle"></span>
    <span class="middle-toggle"></span>
    <span class="bottom-toggle"></span>
    </div>
    <div id="overlay-toggle" class="overlay-toggle">
    <nav class="overlay-menu">
        <ul>
            <li><a class="nav-link t-l" href="#my-skills" data-i18n="nav.skills">Skills</a></li>
            <li><a class="nav-link t-l" href="#portfolio" data-i18n="nav.portfolio">Portfolio</a></li>
            <li><a class="nav-link t-l" href="#contact" data-i18n="nav.contact">Contact</a></li>
            <li class="lang-li">
                <div class="lang-switch" role="group" aria-label="Language">
                    <button type="button" class="lang-switch__btn is-active" data-set-lang="en" aria-pressed="true">EN</button>
                    <button type="button" class="lang-switch__btn" data-set-lang="ru" aria-pressed="false">RU</button>
                </div>
            </li>
            <!-- <li>
                <div id="search-mobile" class="search-container">
                    <input type="text" placeholder="Search...">
                    <div class="search"></div>
                </div>
            </li> -->
        </ul>
    </nav>
    </div>
    <hr>
</header>
