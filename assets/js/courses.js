// Adding Vue Component
var coursesVue = new Vue({
    el: "#main",
    data: {
        nombre_curso: "",
        img1: "",
        img2:"",
        img3:"",
        info:{
            categoria:"",
            asesor:"",
            fecha_inicio:"",
            link: ""
        },
        asunto:""
    },
    methods:{
        //Adding methods for once courses
        //PMP
        data_pmp(){
            coursesVue.nombre_curso= "PMP";
            coursesVue.img1="assets/img/portafolio/img_pmp_1";
            coursesVue.img2="assets/img/portafolio/img_pmp_2";
            coursesVue.img3="assets/img/portafolio/img_pmp_3";
            coursesVue.info.categoria="Especialización";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="El curso se desarrollará en forma presencial con un total de 72 horas dosificadas en un periodo de 2 meses, con sesiones de 8 horas semanales. El curso es teórico y práctico y comprende tópicos de Gestión de Proyectos basado en el marco de referencia propuesto por la guía del PMBOK® Versión 6.";
        },
        //JAVA desde Cero
        data_java(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "JAVA desde Cero";
            coursesVue.img1="assets/img/portafolio/img_java_1";
            coursesVue.img2="assets/img/portafolio/img_java_2";
            coursesVue.img3="assets/img/portafolio/img_java_3";
            coursesVue.info.categoria="Especialización";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="Este curso está diseñado para poder interiorizar los conocimientos previos y fundamentales para la programación en Java, conocer su lenguaje y el paso a paso para crear programas y llegar a base de datos.";
        },
        //istqb
        data_istqb(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "ISTQB";
            coursesVue.img1="assets/img/portafolio/img_istqb_1";
            coursesVue.img2="assets/img/portafolio/img_istqb_2";
            coursesVue.img3="assets/img/portafolio/img_istqb_3";
            coursesVue.info.categoria="Certificación";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="El curso se desarrollará en forma presencial con un total de 16 horas dosificadas en un periodo de un mes, con sesiones de 4 horas semanales. El curso es teórico y práctico y comprende tópicos de ISTQB basado en el marco de referencia propuesto por la guía de ISTQB Foundation Level.";
        },
        //Automatizacion Pruebas
        data_automatizacion(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "Automatización de Pruebas de Software";
            coursesVue.img1="assets/img/portafolio/img_auto_1";
            coursesVue.img2="assets/img/portafolio/img_auto_2";
            coursesVue.img3="assets/img/portafolio/img_auto_3";
            coursesVue.info.categoria="Especialización";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="El curso se desarrollará en forma presencial con un total de 16 horas dosificadas en un periodo de un mes, con sesiones de 4 horas semanales. El curso es teórico y práctico y comprende tópicos de ISTQB basado en el marco de referencia propuesto por la guía de ISTQB Foundation Level.";
        },
        //Implementacipon de OKRs
        data_okrs(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "Implementación de OKRs";
            coursesVue.img1="assets/img/portafolio/img_okrs_1";
            coursesVue.img2="assets/img/portafolio/img_okrs_2";
            coursesVue.img3="assets/img/portafolio/img_okrs_3";
            coursesVue.info.categoria="Taller";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="OKR es una combinación de un objetivo y unos resultados clave asociados a ese objetivo, lo cual nos ayudará a visualizar qué es el éxito que buscamos y a entender si lo estamos consiguiendo.";
        },
        //Business Intelligence
        data_business(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "Business Inteliigence";
            coursesVue.img1="assets/img/portafolio/img_business_1";
            coursesVue.img2="assets/img/portafolio/img_business_2";
            coursesVue.img3="assets/img/portafolio/img_business_3";
            coursesVue.info.categoria="Especialización";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="La Inteligencia de Negocios está cobrando cada vez más importancia a la hora de tomar decisiones dentro de una organización, debido al marco de herramientas y metodologías que entrega para el manejo de información estratégica, permitiendo que una organización agilice sus decisiones, entregando una visión más clara del comportamiento de los clientes y de la competencia así como también de los procesos Internos de la Empresa como Operaciones, Finanzas, Ventas, Tecnologías de Información, etc.";
        },
        //DevOps Profesional
        data_devops(){
            coursesVue.nombre_curso= "DevOps Profesional";
            coursesVue.img1="assets/img/portafolio/img_devops_1";
            coursesVue.img2="assets/img/portafolio/img_devops_2";
            coursesVue.img3="assets/img/portafolio/img_devops_3";
            coursesVue.info.categoria="Especialización";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="Las Certificaciones DevOps Professional y DevOps Master de Exin aportan competencias prácticas al conocimiento con el fin de que una persona con la certificación DevOps Master pueda implementar el modelo DevOps de forma satisfactoria en un equipo y promover sus principios en la empresa, mientras que una persona con la Certificación DevOps Professional cuenta con los conocimientos para la adaptarse a un entorno de trabajo DevOps.";
        },
        //SCRUM Master
        data_scrum(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "SCRUM Master";
            coursesVue.img1="assets/img/portafolio/img_scrum_1";
            coursesVue.img2="assets/img/portafolio/img_scrum_2";
            coursesVue.img3="assets/img/portafolio/img_devops_3";
            coursesVue.info.categoria="Certificación";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="El examen Master Agile Scrum de EXIN es parte del programa de cualificación de EXIN y ha sido desarrollado en cooperación con expertos internacionales en la materia. Es necesario que el candidato esté familiarizado con todos los Conceptos básicos del curso de Fundamentos de Ágil Scrum. Para mayores detalles consulte la guía de preparación de Fundamentos de Ágil Scrum.";
        },
        //COBIT
        data_cobit(){
            location.replace("portafolio-details.html");
            coursesVue.nombre_curso= "COBIT";
            coursesVue.img1="assets/img/portafolio/img_cobit_1";
            coursesVue.img2="assets/img/portafolio/img_cobit_2";
            coursesVue.img3="assets/img/portafolio/img_cobit_3";
            coursesVue.info.categoria="Certificación";
            coursesVue.info.asesor="BMT Partners";
            coursesVue.info.fecha_inicio="";
            coursesVue.info.link="";
            coursesVue.asunto="COBIT 5 provee de un marco de Gobierno de TI integral que ayuda a las empresas a alinear la estrategia de TI con la estrategia del negocio, alcanzando de este modo sus objetivos para el gobierno y la gestión de las TI corporativas. Dicho de una manera sencilla, ayuda a las empresas a crear el valor óptimo desde IT manteniendo el equilibrio entre la generación de beneficios y la optimización de los niveles de riesgo y el uso de recursos.";
        }
    }
});