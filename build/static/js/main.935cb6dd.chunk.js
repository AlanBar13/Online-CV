(window.webpackJsonpcv=window.webpackJsonpcv||[]).push([[0],{30:function(e,a,t){e.exports=t(41)},35:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(18),c=t.n(r),s=t(5),o=t(6),i=t(8),m=t(7),d=t(9),u=t(16),E=t(15),p=(t(35),t(2)),g=function(e){return function(a){a({type:"IS_HIDDEN",payload:e})}},h=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.mobile.m&&this.props.isHidden("hidden")}},{key:"hiddenHam",value:function(){return this.props.mobile.m?"":"hidden"}},{key:"render",value:function(){var e,a,t=this,l=this.hiddenHam(),r=this.props.language;return"ES"===r?(e="active",a=""):(e="",a="active"),n.a.createElement("div",null,n.a.createElement("div",{className:"py-4 px-3 hamburger ".concat(l)},n.a.createElement("i",{className:"fas fa-bars",style:{color:"aliceblue"},onClick:function(){return t.props.isHidden("")}})),n.a.createElement("div",{className:"vertical-nav bg-white ".concat(this.props.mobile.hidden),id:"sidebar"},n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"btn btn-outline-dark ".concat(e),type:"button",onClick:function(){return t.props.lanSelect("ES")}},"ES"),"|",n.a.createElement("button",{type:"button",className:"btn btn-outline-dark ".concat(a),onClick:function(){return t.props.lanSelect("EN")}},"EN")),n.a.createElement("div",{className:"py-4 px-3 mb-4 bg-light"},n.a.createElement("div",{className:"media d-flex align-items-center"},n.a.createElement(u.b,{to:"/"},n.a.createElement("img",{src:"A01200363.jpg",alt:"...",width:"65",className:"mr-3 rounded-circle"})),n.a.createElement("div",{className:"media-body"},n.a.createElement("h4",{className:"m-0"},"Alan Bardales"),n.a.createElement("p",{className:"font-weight-light text-muted mb-0"},"EN"===r?"Computer and Electronic Engineer":"Ingeniero en Tecnolog\xedas Electr\xf3nicas")))),n.a.createElement("p",{className:"text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0"},"MENU"),n.a.createElement("ul",{className:"nav flex-column bg-white mb-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/",className:"nav-link text-dark font-italic bg-light"},"EN"===r?"Home":"Inicio")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/formacion",className:"nav-link text-dark font-italic bg-light",onClick:function(){return t.props.isHidden("")}},"EN"===r?"Formation":"Formaci\xf3n")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/proyectos",className:"nav-link text-dark font-italic bg-light"},"EN"===r?"Projects":"Proyectos")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/acerca",className:"nav-link text-dark font-italic bg-light"},"EN"===r?"Skills":"Habilidades"))),n.a.createElement("p",{className:"text-gray font-weight-bold text-uppercase px-3 py-4 small pb-4 mb-0"},"EN"===r?"Contact":"Contacto"),n.a.createElement("div",{className:"bg-white info"},n.a.createElement("ul",{className:"nav flex-column bg-white mb-5"},n.a.createElement("li",{className:"nav-item",style:{fontSize:20,textAlign:"center"}},n.a.createElement("div",{className:"nav-link text-dark bg-white"},n.a.createElement("i",{className:"fas fa-mobile-alt"})," 4423977484")),n.a.createElement("li",{className:"nav-item",style:{fontSize:14,textAlign:"center"}},n.a.createElement("div",{className:"nav-link text-dark bg-white"},n.a.createElement("i",{className:"fas fa-envelope"})," ",n.a.createElement("a",{href:"mailto:alan.g.bardales@gmail.com"},"alan.g.bardales@gmail.com"))),n.a.createElement("li",{className:"nav-item",style:{fontSize:25,textAlign:"center"}},n.a.createElement("div",{className:"nav-link text-dark bg-white"},n.a.createElement("a",{href:"https://www.linkedin.com/in/alan-bardales",className:"icon"},n.a.createElement("i",{className:"fab fa-linkedin"})),n.a.createElement("a",{href:"https://github.com/AlanBar13",className:"icon"},n.a.createElement("i",{className:"fab fa-github-square"})),n.a.createElement("a",{href:"/AlanCV_EN2020.pdf",className:"icon"},n.a.createElement("i",{className:"fas fa-file-pdf"}))))))))}}]),a}(n.a.Component),b=Object(p.b)(function(e){return{window:e.window,mobile:e.mobile,language:e.language}},{isHidden:g,lanSelect:function(e){return function(a){a({type:"LAN_SELECT",payload:e})}}})(h),N=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return"EN"===this.props.language?n.a.createElement("div",{className:"main container"},n.a.createElement("h3",null,"Technical Skills And Knowledge"),n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"row m-0"},n.a.createElement("th",{className:"col-4"},"Programming languages:"),n.a.createElement("th",{className:"col-4"},"Web development Oriented:"),n.a.createElement("th",{className:"col-4"},"Software Knowledge of:"))),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"C"),n.a.createElement("td",{className:"col-4"},"HTML, Javascript, CSS"),n.a.createElement("td",{className:"col-4"},"GitHub")),n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"Python"),n.a.createElement("td",{className:"col-4"},"Node.js"),n.a.createElement("td",{className:"col-4"},"Android SDK / iOS")),n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"Java"),n.a.createElement("td",{className:"col-4"},"SQL / MySQL / MongoDB"),n.a.createElement("td",{className:"col-4"},"Cloud Platforms (Huawei Cloud, AWS)")),n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"Shell"),n.a.createElement("td",{className:"col-4"},"PHP"),n.a.createElement("td",{className:"col-4"},"Docker (Basic knowledge)")))),n.a.createElement("h3",null,"Courses and Trainings"),n.a.createElement("ul",{className:"list-group",style:{color:"#173d85",textAlign:"start"}},n.a.createElement("li",{className:"list-group-item"},"Curso: iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp (In progress),(Udemy)"),n.a.createElement("li",{className:"list-group-item"},"Course: Modern Web Development with React and Redux [2019 Upate], (Udemy)"),n.a.createElement("li",{className:"list-group-item"},"Course: 20703-1 Administering System Center Configuration Manager, (ExecuTrain) obtaining a certificate of completion of the course."),n.a.createElement("li",{className:"list-group-item"},"Course: Python Scripting for Software Testers,(Udemy) obtaining a certificate of completion of the course."),n.a.createElement("li",{className:"list-group-item"},"Course: MacOs Support Essentials 10.13 y 10.12, (EduMac) obtaining a certificate of completion of the course."),n.a.createElement("li",{className:"list-group-item"},"Course: Xamarin.Android, obtaining a certificate of participation."))):n.a.createElement("div",{className:"main container"},n.a.createElement("h3",null,"Habilidades T\xe9cnicas y Conocimiento"),n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"row m-0"},n.a.createElement("th",{className:"col-4"},"Lenguajes de Programaci\xf3n:"),n.a.createElement("th",{className:"col-4"},"Orientadas a desarrollo web:"),n.a.createElement("th",{className:"col-4"},"Trabajado con:"))),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"C"),n.a.createElement("td",{className:"col-4"},"HTML, Javascript, CSS"),n.a.createElement("td",{className:"col-4"},"Git")),n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"Python"),n.a.createElement("td",{className:"col-4"},"Node.js"),n.a.createElement("td",{className:"col-4"},"Android SDK / iOS")),n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"Java"),n.a.createElement("td",{className:"col-4"},"SQL / MySQL / MongoDB"),n.a.createElement("td",{className:"col-4"},"Cloud Platforms (Huawei Cloud, AWS)")),n.a.createElement("tr",{className:"row m-0"},n.a.createElement("td",{className:"col-4"},"Shell"),n.a.createElement("td",{className:"col-4"},"React.js"),n.a.createElement("td",{className:"col-4"},"Docker (Conocimiento basico)")))),n.a.createElement("h3",null,"Cursos y Certificaciones"),n.a.createElement("ul",{className:"list-group",style:{color:"#173d85",textAlign:"start"}},n.a.createElement("li",{className:"list-group-item"},"Curso: iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp (In progress),(Udemy)"),n.a.createElement("li",{className:"list-group-item"},"Curso: Modern Web Development with React and Redux [2019 Upate] (Udemy)"),n.a.createElement("li",{className:"list-group-item"},"Curso: 20703-1 Administering System Center Configuration Manager, (ExecuTrain) obteniendo un certificado de finalizacion del curso"),n.a.createElement("li",{className:"list-group-item"},"Curso: MacOs Support Essentials 10.13 y 10.12, (EduMac) obteniendo un certificado de finalizacion del curso"),n.a.createElement("li",{className:"list-group-item"},"Curso: Python Scripting for Software Testers, (Udemy) obteniendo un certificado de finalizacion del curso."),n.a.createElement("li",{className:"list-group-item"},"Curso: Xamarin.Android, obteniendo un certificado de participaci\xf3n")))}}]),a}(n.a.Component),y=Object(p.b)(function(e){return{language:e.language}},{})(N),f=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return"EN"===this.props.language?n.a.createElement("div",{className:"main container"},n.a.createElement("h2",null,"Academic Formation"),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2010-2015"),n.a.createElement("td",null,"B.S. Electronics and Computer Engineering ITESM Campus Quer\xe9taro")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2014"),n.a.createElement("td",null,"\uc601\ub0a8\ub300\ud559\uad50(Yeungnam University), South Korea, International Exchange")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2007-2010"),n.a.createElement("td",null,"High School at ITESM Campus Quer\xe9taro")))),n.a.createElement("div",{className:"pt-4 pb-4"}),n.a.createElement("h2",null,"Professional Experience"),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2020(Mar- )"),n.a.createElement("td",null,n.a.createElement("strong",null,"Site Reliability Engineer (Huawei Latinoamerica)"),n.a.createElement("br",null)," Support to the Huawei Cloud Businness on the Storage Technology, using technology of openstack, shell and python scripting")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2017-2020"),n.a.createElement("td",null,n.a.createElement("strong",null,"IT Specialist (Tecnol\xf3gico de Monterrey)"),n.a.createElement("br",null)," Development, maintenance and support to official software, web pages and databases, as well as technical support of the physical and virtual servers.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2016(Sep- Dic)"),n.a.createElement("td",null,n.a.createElement("strong",null,"IT Assistant (Tecnol\xf3gico de Monterrey)"),n.a.createElement("br",null)," Technical support of audiovisual equipment, dealing with person who needed technical support in the classrooms.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2015(Feb-May)"),n.a.createElement("td",null,n.a.createElement("strong",null,"Intern in Electronics & Safety Area(CIDEC, Centro T\xe9cnico Quer\xe9taro)"),n.a.createElement("br",null)," Testing products in the automotive area. Infotaintent products testing using tools like DOORS.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2015(Ene-May)"),n.a.createElement("td",null,n.a.createElement("strong",null,"Centro de Apoyo al Desarrollo (CAD) Project in collaboration with the company LiCore"),n.a.createElement("br",null)," Project: Development and creation of a data acquisition PMOD board along with the drivers for Xilinx technologies."))))):n.a.createElement("div",{className:"main container"},n.a.createElement("h2",null,"Formaci\xf3n acad\xe9mica"),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2010-2015"),n.a.createElement("td",null,"Ingeniero en Tecnolog\xedas Electr\xf3nicas ITESM Campus Quer\xe9taro")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2014"),n.a.createElement("td",null,"Estudios en \uc601\ub0a8\ub300\ud559\uad50 (Yeungnam University), Corea del Sur, Semestre de intercambio")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2007-2010"),n.a.createElement("td",null,"Preaparatoria en ITESM Campus Quer\xe9taro")))),n.a.createElement("div",{className:"pt-4 pb-4"}),n.a.createElement("h2",null,"Formaci\xf3n Profesional"),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2020(Mar- )"),n.a.createElement("td",null,n.a.createElement("strong",null,"Site Reliability Engineer (Huawei Latinoamerica)"),n.a.createElement("br",null),"Soporte a la tecnolog\xeda de Storage de Huawei Cloud, usando tecnolog\xeda como openstack, shell y python scripting.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2017-2020"),n.a.createElement("td",null,n.a.createElement("strong",null,"Especialista en Gesti\xf3n de Tecnolog\xedas de Informaci\xf3n (Tecnol\xf3gico de Monterrey)"),n.a.createElement("br",null)," Mantenimiento y soporte a paginas web oficiales y base de datos, de igual manera soporte a los servidores fisicos y virtuales.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2016(Sep- Dic)"),n.a.createElement("td",null,n.a.createElement("strong",null,"Auxiliar en Gesti\xf3n de Tecnolog\xedas de Informaci\xf3n (Tecnol\xf3gico de Monterrey)"),n.a.createElement("br",null)," Soporte t\xe9cnico de equipo audiovisual, de igual manera trato con personas que requieren soporte tecnico en salones de clase.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2015(Feb-May)"),n.a.createElement("td",null,n.a.createElement("strong",null,"Practicante en el \xe1rea de Electronics & Safety (CIDEC, Centro T\xe9cnico Quer\xe9taro)"),n.a.createElement("br",null)," Laborando en \xe1rea de pruebas de productos automotrices. Proyecto: Pruebas de productos electr\xf3nicos, utilizando herramientas como DOORS.")),n.a.createElement("tr",{style:{textAlign:"start"}},n.a.createElement("td",null,"2015(Ene-May)"),n.a.createElement("td",null,n.a.createElement("strong",null,"Proyecto Centro de Apoyo al Desarrollo (CAD) en conjunto con la empresa LiCore"),n.a.createElement("br",null)," Proyecto: Desarrollo de controladores (en el lenguaje VHDL) y elaboraci\xf3n de una tarjeta de adquisici\xf3n de datos para tarjetas Xilinx")))))}}]),a}(n.a.Component),v=Object(p.b)(function(e){return{language:e.language}},{})(f),w=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return"EN"===this.props.language?n.a.createElement("div",{className:"main container-fluid"},n.a.createElement("h2",null,"Developed Projects"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Development of web application for Tecnologico de Monterrey"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2017(Aug-Sep)"),n.a.createElement("p",{className:"card-text"},"Project: Development of registration website for the inauguration event of the new Borregos Stadium. The page was programmed with ASP.NET technology.")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Collaboration in the development of a mobile aplication"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2017(Aug-Dic)"),n.a.createElement("p",{className:"card-text"},"Project: Working in collaboration with the company Zeldatec. We develop a platform for a taxi company, similar to Uber app, using Jquery Mobile.")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Development of a mobile and web application (BuSo) for the Tecnologico de Monterrey"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2018(Jan-Apr)"),n.a.createElement("p",{className:"card-text"},"Project: Using the technology of Jquery Mobile, an application is being developed to promote the services of the IT area, such as the software in agreement."," "))))),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"BuSo page update for Tec de Monterrey"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2020 (Jan-Mar)"),n.a.createElement("p",{className:"card-text"},"Project: Development of the BuSo page update, where modern web development tools such as React and Redux were used."," ")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Creation and development of vendor management application (Verkauf)"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2020 (Jan-Apr)"),n.a.createElement("p",{className:"card-text"},"Project: Initial design of platform for sellers of the company FSAC SA. Technology to use React, Redux and MongoDB."," ")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Platform development for Deparments/Condos (Own Project)"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"In Progress"),n.a.createElement("p",{className:"card-text"},"Project: App and Platform for management of Deparments/Condos")))))):n.a.createElement("div",{className:"main container-fluid"},n.a.createElement("h2",null,"Proyectos Desarrollados"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Desarrollo de pagina web para evento del Tecnologico de Monterrey"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2017(Ago-Sep)"),n.a.createElement("p",{className:"card-text"},"Proyecto: Desarrollo de pagina web de registro para evento de inaguracion del nuevo Estadio Borregos. La pagina fue programada con la tecnologia de ASP.NET.")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Colaboracion en Desarrollo de aplicaci\xf3n movil"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2017(Ago-Dic)"),n.a.createElement("p",{className:"card-text"},"Proyecto: Se trabajo en colaboracion con la empresa Zeldatec, para el desarrollo de plataformas para una empresa de taxis.")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Desarrollo de aplicaci\xf3n movil para el Tecnologico de Monterrey"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2018(Ene-Abr)"),n.a.createElement("p",{className:"card-text"},"Proyecto: Utilizando la tecnologia de Jquery Mobile, se esta desarrollando una aplicaci\xf3n para promover los servicios del area de TI, como son el software en convenio."," "))))),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Actualizaci\xf3n de pagina BuSo para el Tec de Monterrey"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2020 (Ene-May)"),n.a.createElement("p",{className:"card-text"},"Proyecto: Desarrollo de la actualizaci\xf3n de la pagina de BuSo, en donde se utilizaron herramientas de desarrollo web modernas como es React y Redux."," ")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Creaci\xf3n y desarrollo de aplicaci\xf3n de manejo de vendedores"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"2020 (Ene-Abr)"),n.a.createElement("p",{className:"card-text"},"Proyecto: Dise\xf1o inicial de plataforma para vendedores de la empresa FSAC SA. Tecnolog\xeda a utilizar React, Redux y MongoDB.")))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"card card-text h-100",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Plataforma para manejo de Condominio/Departamentos"),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"En curso"),n.a.createElement("p",{className:"card-text"},"Proyecto: Aplicaci\xf3n y plataforma para el manejo de los recursos de un Condominio o Departamentos"))))))}}]),a}(n.a.Component),j=Object(p.b)(function(e){return{language:e.language}},{})(w),O=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.mobile.m;return"EN"===this.props.language?e?n.a.createElement("div",{className:"main container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h1",null,"Alan Gustavo Bardales Mendoza")),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h2",null,'"Computer and Electronic Engineer, entrepreneur, leader, passionate. Enthusiast of technology, concerts and music"')),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h3",null,"Summary:"),n.a.createElement("p",null,"A person passionate about technology, reliable, efficient and with excellent leadership and teamwork skills. I am interested in growing in this area and developing my full potential. My goal is to create and develop systems that help people in their daily lives.")),n.a.createElement("div",{className:"row justify-content-center main-list"},n.a.createElement("h4",null,"Areas of interest:"),n.a.createElement("ul",{className:"list-group",style:{color:"#173d85"}},n.a.createElement("li",{className:"list-group-item"},"DevOps"),n.a.createElement("li",{className:"list-group-item"},"Web Develpment"),n.a.createElement("li",{className:"list-group-item"},"Musical Production")))):n.a.createElement("div",{className:"main container"},n.a.createElement("div",{className:"row justify-content-center main-head"},n.a.createElement("div",{className:"col-4"},n.a.createElement("h1",null,"Alan Gustavo Bardales Mendoza")),n.a.createElement("div",{className:"col-4"})),n.a.createElement("div",{className:"row justify-content-end main-lema"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h2",null,'"Computer and Electronic Engineer, entrepreneur, leader, passionate. Enthusiast of technology, concerts and music"')),n.a.createElement("div",{className:"row justify-content-start main-resumen"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",null,"Summary:"),n.a.createElement("p",null,"A person passionate about technology, reliable, efficient and with excellent leadership and teamwork skills. I am interested in growing in this area and developing my full potential. My goal is to create and develop systems that help people in their daily lives.")))),n.a.createElement("div",{className:"row justify-content-end main-list"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h4",null,"Areas of interest:"),n.a.createElement("ul",{className:"list-group",style:{color:"#173d85"}},n.a.createElement("li",{className:"list-group-item"},"DevOps"),n.a.createElement("li",{className:"list-group-item"},"Web Develpment"),n.a.createElement("li",{className:"list-group-item"},"Musical Production"))))):e?n.a.createElement("div",{className:"main container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h1",null,"Alan Gustavo Bardales Mendoza")),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h2",null,'"Ingeniero en Tecnolog\xedas Electr\xf3nicas, emprendedor, lider, apasionado. Entusiasta de la tecnolog\xeda, los conciertos y la m\xfasica"')),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h3",null,"Resumen:"),n.a.createElement("p",null,"Una persona apasionada por la tecnolog\xeda, confiable, eficiente y con excelentes habilidades de liderazgo y trabajo en equipo. Tengo el inter\xe9s de crecer en este \xe1mbito y desarrollar todo mi potencial. Mi meta es crear y desarrollar sistemas que ayuden a las personas en su vida diaria.")),n.a.createElement("div",{className:"row justify-content-center main-list"},n.a.createElement("h4",null,"Areas de Interes:"),n.a.createElement("ul",{className:"list-group",style:{color:"#173d85"}},n.a.createElement("li",{className:"list-group-item"},"DevOps"),n.a.createElement("li",{className:"list-group-item"},"Desarrollo Web"),n.a.createElement("li",{className:"list-group-item"},"Producci\xf3n musical")))):n.a.createElement("div",{className:"main container"},n.a.createElement("div",{className:"row justify-content-center main-head"},n.a.createElement("div",{className:"col-4"},n.a.createElement("h1",null,"Alan Gustavo Bardales Mendoza")),n.a.createElement("div",{className:"col-4"})),n.a.createElement("div",{className:"row justify-content-end main-lema"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h2",null,'"Ingeniero en Tecnolog\xedas Electr\xf3nicas, emprendedor, lider, apasionado. Entusiasta de la tecnolog\xeda, los conciertos y la m\xfasica"')),n.a.createElement("div",{className:"row justify-content-start main-resumen"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",null,"Resumen:"),n.a.createElement("p",null,"Una persona apasionada por la tecnolog\xeda, confiable, eficiente y con excelentes habilidades de liderazgo y trabajo en equipo. Tengo el inter\xe9s de crecer en este \xe1mbito y desarrollar todo mi potencial. Mi meta es crear y desarrollar sistemas que ayuden a las personas en su vida diaria.")))),n.a.createElement("div",{className:"row justify-content-end main-list"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h4",null,"Areas de Interes:"),n.a.createElement("ul",{className:"list-group",style:{color:"#173d85"}},n.a.createElement("li",{className:"list-group-item"},"DevOps"),n.a.createElement("li",{className:"list-group-item"},"Desarrollo Web"),n.a.createElement("li",{className:"list-group-item"},"Producci\xf3n musical")))))}}]),a}(n.a.Component),x=Object(p.b)(function(e){return{mobile:e.mobile,language:e.language}},{})(O),S=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={width:0,heigth:0},t.updateDimensions=function(){var e;e=window.innerWidth,t.props.getWidth(e),t.props.isMobile(e)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this,a=this.props.window.width,t="";return a<500?(t="mobile",this.props.isHidden("hidden")):(t="",this.props.isHidden("")),n.a.createElement(u.a,null,n.a.createElement(b,null),n.a.createElement("div",{className:"page-content ".concat(t),onClick:function(){"mobile"===t&&e.props.isHidden("hidden")}},n.a.createElement(E.a,{path:"/",exact:!0,component:x}),n.a.createElement(E.a,{path:"/formacion",component:v}),n.a.createElement(E.a,{path:"/acerca",component:y}),n.a.createElement(E.a,{path:"/proyectos",component:j})))}}]),a}(n.a.Component),C=Object(p.b)(function(e){return{window:e.window}},{getWidth:function(e){return function(a){a({type:"GET_WIDTH",payload:e})}},isMobile:function(e){return function(a){a({type:"IS_MOBILE",payload:e<500})}},isHidden:g})(S),A=t(14),D=t(29),P=t(20);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(t,!0).forEach(function(a){Object(P.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var k={width:0,heigth:0};function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function H(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(t,!0).forEach(function(a){Object(P.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var B={m:!1,hidden:""},L=Object(A.c)({window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_WIDTH":return T({},e,{width:a.payload});case"GET_HEIGTH":return T({},e,{heigth:a.payload});default:return e}},mobile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_MOBILE":return H({},e,{m:a.payload});case"IS_HIDDEN":return H({},e,{hidden:a.payload});default:return e}},language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EN",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LAN_SELECT":return a.payload;default:return e}}}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,z=Object(A.e)(L,R(Object(A.a)(D.a)));c.a.render(n.a.createElement(p.a,{store:z},n.a.createElement(C,null)),document.querySelector("#root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.935cb6dd.chunk.js.map