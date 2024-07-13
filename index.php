<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Yaroslav Mankivskyi</title>

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/search.css">
    <link rel="stylesheet" href="assets/css/preloader.css">
</head>
<body>
    <?php require_once('layouts/preloader.php') ?>
    <?php require_once('layouts/header.php') ?>
    <main>
        <div id="greeting" class="container-1">
            <div id="ym" class="text">
                <h1>I'M <span>Yaroslav Mankivskyi</span></h1>
                <p id="ym-p" class="box typing"></p>
                <a href="mailto:y.mankivskyi@gmail.com" class="contact-btn">Contact Me</a>
            </div> 
            <div id="ym-image" class="image">
                <img src="assets/img/me1.png" alt="Yaroslav Mankivskyi">
            </div>
        </div>
        
        <div class="social-icons">
                <span class="vr-ln-gld"></span> 
                <a id="icon" href="https://www.linkedin.com/in/yaroslav-mankivskyi-2a1372256/" target="_blank"><img src="/assets/img/icons/linkedin.svg" alt="LinkedIn"></a>
                <a id="icon" href="https://github.com/Ampersant" target="_blank"><img src="/assets/img/icons/github.svg" alt="Github"></a>
                <a id="icon" href="mailto:y.mankivskyi@gmail.com"><img src="/assets/img/icons/mail.svg" alt="Email"></a>
            </div>
        <!-- <hr> -->
        <div id="about" class="container-2">
            
            <div class="text">
            <!-- <span class="hr-ln-gld"></span> -->
            <h2 id="about-h" class="dash">About</h2>
                <p id="about-p">Hi! My name is Yaroslav, <span>I’m a web developer specializing in PHP and Laravel, with a strong foundation in JavaScript and MySQL.</span> I’m ready to take responsibility before the team and the client and easily find an approach to different people. I excel at quickly learning new technologies and finding solutions to different problems. I have critical thinking skills and love challenges because they provide an opportunity to grow!</p>
            </div>
        </div>
        <div class="container-2">
            <div class="container-header">
                <h2 id="my-skills">My Skills</h2>
            </div>
        </div>
        <div class="skills-flex">
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/phplogo.png" alt="">
                    </div>
                    <p>PHP</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/pythonlogo.png" alt="">
                    </div>
                    <p>Python</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/laravellogo.png" alt="">
                    </div>
                    <p>Laravel</p>
                </div>
        
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/flasklogo.png" alt="">
                    </div>
                    <p>Flask</p>
                </div>
            </div>   
            <div class="skills-flex">
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/mysqllogo.webp" alt="">
                    </div>
                    <p>MySQL</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/htmllogo.png" alt="">
                    </div>
                    <p>HTML</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/csslogo.png" alt="">
                    </div>
                    <p>CSS</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/javascriptlogo.png" alt="">
                    </div>
                    <p>JavaScript</p>
                </div>
            </div>
            <div class="skills-flex">
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/bootstraplogo.png" alt="">
                    </div>
                    <p>Bootstrap</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/gsaplogo.png" alt="">
                    </div>
                    <p>GSAP</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/jquerylogo.svg" alt="">
                    </div>
                    <p>JQuery</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/chartjslogo.png" alt="">
                    </div>
                    <p>ChartJS</p>
                </div>
            </div>
            <div class="skills-flex">    
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/githublogo.png" alt="">
                    </div>
                    <p>Github</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/dockerlogo.png" alt="">
                    </div>
                    <p>Docker</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/postmanlogo.png" alt="">
                    </div>
                    <p>Postman</p>
                </div>
                <div class="skills-card">
                    <div class="card-image">
                        <img src="/assets/img/logos/termiuslogo.svg" alt="">
                    </div>
                    <p>Termius</p>
                </div>
            </div>
            <div id="portfolio" class="container-2">
                <div class="container-header">
                    <h2>Portfolio</h2>
                </div>
            </div>
                <div class="porfolio-flex">
                    <div class="p-item-content">
                        <img src="/assets/img/portfolio/project1.jpg" alt="">
                        <div class="overlay">
                            <h3>The header for item</h3>
                            <p>Description of item</p>
                            <a href="#" class="view-btn">Will be soon..</a>
                        </div>
                    </div>
                    <div class="p-item-content">
                        <img src="/assets/img/portfolio/project2.png" alt="">
                        <div class="overlay">
                            <h3>The header for item</h3>
                            <p>Description of item</p>
                            <a href="#" class="view-btn">Will be soon..</a>
                        </div>
                    </div>
                    <div class="p-item-content">
                        <img src="/assets/img/portfolio/project3.jpg" alt="">
                        <div class="overlay">
                            <h3>The header for item</h3>
                            <p>Description of item</p>
                            <a href="#" class="view-btn">Will be soon..</a>
                        </div>
                    </div>
                    <div class="porfolio-flex">
                        <div class="p-item-content">
                            <img src="/assets/img/portfolio/project4.webp" alt="">
                            <div class="overlay">
                                <h3>The header for item</h3>
                                <p>Description of item</p>
                                <a href="#" class="view-btn">Will be soon..</a>
                            </div>
                        </div>
                        <div class="p-item-content">
                            <img src="/assets/img/portfolio/project5.webp" alt="">
                            <div class="overlay">
                                <h3>The header for item</h3>
                                <p>Description of item</p>
                                <a href="#" class="view-btn">Will be soon..</a>
                            </div>
                        </div>
                        <div class="p-item-content">
                            <img src="/assets/img/portfolio/project6.avif" alt="">
                            <div class="overlay">
                                <h3>The header for item</h3>
                                <p>Description of item</p>
                                <a href="#" class="view-btn">Will be soon..</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-2">
                    <div  id="experience-header" class="container-header">
                        <h2>Experience</h2>
                        <hr id="experience-hr">
                    </div>
                </div>
                <div class="timeline">
                    <div class="con">
                        <div class="year">2021</div>
                        <div class="content">
                            <h2>PHP Web-developer</h2>
                            <h3>Freelance, mentor</h3>
                            <p>During this period of time I’ve done next things:
                                <!-- <ul> -->
                                    <li>Worked with several web applications and their parts(including DBs, APIs etc.), such as landing pages and multi-page applications on different topics and with different needs. Implemented different patterns such as REST and MVC.</li>
                                    <li>Did strong user authentication using OAuth2, Sessions and Tokens.</li>
                                    <li>Made web-based administrative panels, as well as remote administration service using Telegram Bot API.</li>
                                    <li>Deployed projects to web servers using remote access software(e.g., Termius) and set up server admin panels for easy configuration of the application</li>
                                <!-- </ul> -->
                            </p>
                           
                        </div>
                    </div>
                    <!-- <div class="con">
                        <div class="year">2021</div>
                        <div class="content">
                            <h2>Python Developer</h2>
                            <h3>AutoGrid Systems, Naperville</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                    </div> -->
                </div>
                <div id="Feedback">
                    <div class="container-f">
                        <div id="text-feedback" class="text">
                            <span class="hr-ln-gld"></span>
                            <h2>Testimonial</h2>
                            <p class="dash-f">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Etiam eu turpis molestie, dictum est a, mattis tellus.</span> Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. <span>Maecenas eget</span> condimentum velit, sit amet feugiat lectus.</p>
                            <h3>Name Surname</h3>
                            <p class="person-position dash-sm "><span class="typing"></span></p>
                        </div>
                        <div class="feedback-image">
                            <div class="card">
                                <img src="/assets/img/person1-removebg-preview.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
    </main>
    <?php require_once('layouts/footer.php') ?>
    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="assets/js/header-scroll.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/menu.js"></script>
    <script src="assets/js/preloader.js"></script>

</body>
</html>
