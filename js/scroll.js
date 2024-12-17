gsap.registerPlugin(ScrollTrigger);
 
let x=document.querySelectorAll("div.wrapper>div.menu")
x.forEach((elem)=>{
    if(elem.clientWidth>1183){

        let animation=gsap.to("div.wrapper>div.container2>div.horizontalSlider",{
            x:"-600vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider",
            start:"top -10%",
            end:"7500px 0",
            animation:animation,
            scrub:true,
        })

        let aboutPage=gsap.to("div.wrapper>div.container2>div.aboutPage",{
            x:"-28vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.aboutPage",
            start:"1500px 0",
            end:"3500px 100%",
            animation:aboutPage,
            scrub:true
        })

        let projects=gsap.to("div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",{
            x:"-3vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",
            start:"-50px 0",
            end:"2500px 100%",
            animation:projects,
            scrub:2,
        })

        gsap.to("div.wrapper>div.container2>div.aboutPage>div.right>div.column",{
            y:0,
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.right>div.column",
                scrub:true,
                start:"bottom 100%",
                end:"top -350%"
            }
        })
        
        gsap.to("div.wrapper>div.container2>div.aboutPage>div.right>div.column>div.text",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.right>div.column>div.text",
                scrub:true,
                start:"top -750px",
                end:"top -1050px"
            }
        })
        
        gsap.to("div.wrapper>div.container2>div.aboutPage>div.left>div.title>div",{
            x:"-18vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.left>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top -2700px"
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.left>div.title>div",{
            x:"-23vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.left>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top -2700px",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 70%",
                end:"top -100%"
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(2)",
                scrub:true,
                start:"top 100%",
                end:"top 90%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 70%",
                end:"top -100%"
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(2)",
                scrub:true,
                start:"top 30%",
                end:"top 10%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 0",
                end:"top -100%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(2)",
                scrub:true,
                start:"top 10%",
                end:"top -10%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 70%",
                end:"top -170%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(2)",
                scrub:true,
                start:"top 80%",
                end:"top 70%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 20%",
                end:"top -100%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(2)",
                scrub:true,
                start:"top 30%",
                end:"top 10%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom -10%",
                end:"top -80%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(2)",
                scrub:true,
                start:"top 10%",
                end:"top 0",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right",{
            y:"85vh",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right",
                scrub:true,
                start:"top -20px",
                end:"top -200%",
            }
        })

        $(document).on("scroll", function () {
            let st = $(document).scrollTop();

            if(st>730){
                $("div.wrapper>div.container2>div.aboutPage>div.left").css({
                    position:"sticky",
                    top:"150px"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right").css({
                    position:"sticky",
                    top:"0"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.left").css({
                    position:"relative",
                    top:"0"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right").css({
                    position:"relative",
                    top:"0"
                })
            }
        
            /* start container2 */
            /* start line1 */
        
            if(st>0 && st<572){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number1").css({
                    display:"block"
                })
            }
        
            if(st>572 && st<1380){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number2").css({
                    display:"block"
                })
            }
        
            if(st>1380 && st<1900){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number3").css({
                    display:"block"
                })
            }
            if(st>1900 && st<3000){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number4").css({
                    display:"block"
                })
            }
        
            /* end line1 */
        
            /* start line2 */
        
            if(st>0 && st<240){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number1").css({
                    display:"block"
                })
            }
            if(st>240 && st<630){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number2").css({
                    display:"block"
                })
            }
            if(st>630 && st<1060){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number3").css({
                    display:"block"
                })
            }
            if(st>1060 && st<1695){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number4").css({
                    display:"block"
                })
            }
            if(st>1695 && st<1840){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number5").css({
                    display:"block"
                })
            }
        
            /* end line2 */
        
            /* start line3 */
        
            if(st>0 && st<160){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number1").css({
                    display:"block"
                })
            }
            if(st>160 && st<320){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number2").css({
                    display:"block"
                })
            }
            if(st>320 && st<620){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number3").css({
                    display:"block"
                })
            }
            if(st>620 && st<900){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number4").css({
                    display:"block"
                })
            }
            if(st>900 && st<1252){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number5").css({
                    display:"block"
                })
            }
            if(st>1252 && st<1526){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number6").css({
                    display:"block"
                })
            }
            if(st>1526 && st<3000){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number7").css({
                    display:"block"
                })
            }
        
            /* end line3 */

            console.log(st);
            
            
            /* start horizontalSlider */
            /* item1 */

            if(st>3005){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>3178){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item2 */

            if(st>3732){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>3918){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item3 */

            if(st>4556){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>4784){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
           
            /* item4 */

            if(st>5552){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>5817){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* start container3 (services) */

            if(st>10350){
                $("div.wrapper>div.container3>div.services>div.left").css({
                    position:"sticky",
                    top:"150px"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.left").css({
                    position:"relative",
                    top:"0"
                })
            }
            

            /* end container3 (services) */
        })
    }
    
    if(elem.clientWidth>975  && elem.clientWidth<1183){
        gsap.to("div.wrapper>div.container2>div.aboutPage>div.right>div.column",{
            y:0,
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.right>div.column",
                scrub:true,
                start:"bottom 100%",
                end:"top -350%"
            }
        })
        
        gsap.to("div.wrapper>div.container2>div.aboutPage>div.right>div.column>div.text",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.right>div.column>div.text",
                scrub:true,
                start:"top -750px",
                end:"top -1050px"
            }
        })
        
        gsap.to("div.wrapper>div.container2>div.aboutPage>div.left>div.title>div",{
            x:"-18vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.left>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top -2700px"
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.left>div.title>div",{
            x:"-23vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.left>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top -2700px",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 70%",
                end:"top -100%"
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item1>div:nth-of-type(2)",
                scrub:true,
                start:"top 100%",
                end:"top 90%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 70%",
                end:"top -100%"
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item2>div:nth-of-type(2)",
                scrub:true,
                start:"top 30%",
                end:"top 10%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 0",
                end:"top -100%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column1>div.item3>div:nth-of-type(2)",
                scrub:true,
                start:"top 10%",
                end:"top -10%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 70%",
                end:"top -170%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item1>div:nth-of-type(2)",
                scrub:true,
                start:"top 80%",
                end:"top 70%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom 20%",
                end:"top -100%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item2>div:nth-of-type(2)",
                scrub:true,
                start:"top 30%",
                end:"top 10%",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(1)>div",{
            y:"0%",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(1)>div",
                scrub:true,
                start:"bottom -10%",
                end:"top -80%",
            }
        })
        gsap.to("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(2)",{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right>div.column2>div.item3>div:nth-of-type(2)",
                scrub:true,
                start:"top 10%",
                end:"top 0",
            }
        })

        gsap.to("div.wrapper>div.container3>div.services>div.right",{
            y:"85vh",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.right",
                scrub:true,
                start:"top -20px",
                end:"top -200%",
            }
        })
    
        $(document).on("scroll", function () {
            let st = $(document).scrollTop();
            
            
            if(st>730){
                $("div.wrapper>div.container2>div.aboutPage>div.left").css({
                    position:"sticky",
                    top:"150px"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right").css({
                    position:"sticky",
                    top:"0"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.left").css({
                    position:"relative",
                    top:"0"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right").css({
                    position:"relative",
                    top:"0"
                })
            }
        
            /* start container2 */
            /* start line1 */
        
            if(st>0 && st<572){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number1").css({
                    display:"block"
                })
            }
        
            if(st>572 && st<1380){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number2").css({
                    display:"block"
                })
            }
        
            if(st>1380 && st<1900){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number3").css({
                    display:"block"
                })
            }
            if(st>1900 && st<3000){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)>div.num>div.number>div.number4").css({
                    display:"block"
                })
            }
        
            /* end line1 */
        
            /* start line2 */
        
            if(st>0 && st<240){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number1").css({
                    display:"block"
                })
            }
            if(st>240 && st<630){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number2").css({
                    display:"block"
                })
            }
            if(st>630 && st<1060){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number3").css({
                    display:"block"
                })
            }
            if(st>1060 && st<1695){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number4").css({
                    display:"block"
                })
            }
            if(st>1695 && st<1840){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)>div.num>div.number>div.number5").css({
                    display:"block"
                })
            }
        
            /* end line2 */
        
            /* start line3 */
        
            if(st>0 && st<160){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number1").css({
                    display:"block"
                })
            }
            if(st>160 && st<320){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number2").css({
                    display:"block"
                })
            }
            if(st>320 && st<620){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number3").css({
                    display:"block"
                })
            }
            if(st>620 && st<900){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number4").css({
                    display:"block"
                })
            }
            if(st>900 && st<1252){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number5").css({
                    display:"block"
                })
            }
            if(st>1252 && st<1526){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number6").css({
                    display:"block"
                })
            }
            if(st>1526 && st<3000){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div").css({
                    display:"none"
                })
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)>div.num>div.number>div.number7").css({
                    display:"block"
                })
            }
        
            /* end line3 */

            /* start horizontalSlider */
            /* item1 */

            if(st>2675){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2790){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item2 */

            if(st>3340){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>3476){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item3 */

            if(st>3948){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>4100){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
           
            /* item4 */

            if(st>4657){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(-5vw,-5vw,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>4865){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(5vw,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }


            /* end horizontalSlider */

            /* start container3 (services) */

            if(st>8524){
                $("div.wrapper>div.container3>div.services>div.left").css({
                    position:"sticky",
                    top:"150px"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.left").css({
                    position:"relative",
                    top:"0"
                })
            }

            /* end container3 (services) */
        })
        
        let animation=gsap.to("div.wrapper>div.container2>div.horizontalSlider",{
            x:"-600vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider",
            start:"top -10%",
            end:"5500px 0",
            animation:animation,
            scrub:true,
        })

        let aboutPage=gsap.to("div.wrapper>div.container2>div.aboutPage",{
            x:"-28vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.aboutPage",
            start:"1500px 0",
            end:"3500px 100%",
            animation:aboutPage,
            scrub:true
        })

        let projects=gsap.to("div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",{
            x:"-3vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",
            start:"-50px 0",
            end:"2500px 100%",
            animation:projects,
            scrub:2,
        })


    
    }

    if(elem.clientWidth>751 && elem.clientWidth<975){
        $(document).on("scroll", function () {
            let st = $(document).scrollTop();
            

            if(st>275){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            if(st>405){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            if(st>532){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* start horizontalSlider */
            /* start item1 */

            if(st>1320){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>1350){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item2 */

            if(st>1860){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>1888){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item3 */

            if(st>2396){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2419){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item4 */

            if(st>2930){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2957){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* end horizontalSlider */

            /* start container3 */
            /* column1 */
            /* item1 */

            if(st>4161){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item2 */

            if(st>4260){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item3 */

            if(st>4360){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* column2 */
            /* item1 */

            if(st>4460){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item2 */

            if(st>4560){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item3 */

            if(st>4660){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* end container3 */
        })

        /* container2 */

        gsap.to("div.wrapper>div.container2>div.aboutPage>div.title>div",{
            x:"-14vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top 0",
            }
        })

        let projects=gsap.to("div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",{
            x:"-11vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",
            start:"top 100%",
            end:"top -20%",
            animation:projects,
            scrub:2,
        })

        gsap.to("div.wrapper>div.container3>div.services>div.title>div",{
            x:"-10vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top 0",
            }
        })
        
    }

    if(elem.clientWidth>523 && elem.clientWidth<751){
        $(document).on("scroll", function () {
            let st = $(document).scrollTop();
            

            if(st>57){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            if(st>180){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            if(st>310){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* start horizontalSlider */
            /* start item1 */

            if(st>1030){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>1090){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item2 */

            if(st>1545){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>1605){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item3 */

            if(st>2054){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2115){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item4 */

            if(st>2566){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2631){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* end horizontalSlider */

            /* start container3 */
            /* column1 */
            /* item1 */

            if(st>3650){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item2 */

            if(st>3748){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item3 */

            if(st>3845){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* column2 */
            /* item1 */

            if(st>3945){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item2 */

            if(st>4040){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item3 */

            if(st>4140){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* end container3 */
        })

        /* container2 */

        gsap.to("div.wrapper>div.container2>div.aboutPage>div.title>div",{
            x:"-14vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top 0",
            }
        })

        let projects=gsap.to("div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",{
            x:"-11vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",
            start:"top 100%",
            end:"top -20%",
            animation:projects,
            scrub:2,
        })

        gsap.to("div.wrapper>div.container3>div.services>div.title>div",{
            x:"-10vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top 0",
            }
        })
    }

    if(elem.clientWidth<523){
        $(document).on("scroll", function () {
            let st = $(document).scrollTop();
            console.log(st);
            

            if(st>27){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(1)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            if(st>140){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(2)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            if(st>250){
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container2>div.aboutPage>div.right>div.column:nth-of-type(3)").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* start horizontalSlider */
            /* start item1 */

            if(st>1040){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>1140){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item1>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item2 */

            if(st>1570){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>1660){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item2>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item3 */

            if(st>2100){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2190){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item3>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* item4 */

            if(st>2625){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(0,0,0) rotate(5.2deg)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.img").css({
                    transform:"translate3d(-50px,-50px,0) rotate(5.2deg)",
                    opacity:"0",
                    transition:"800ms"
                })
            }
            if(st>2712){
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(0,0,0)",
                    opacity:"1",
                    transition:"800ms"
                })
            }else{
                $("div.wrapper>div.container2>div.horizontalSlider>div>div.section2>div>div.item4>div.text").css({
                    transform:"translate3d(50px,0,0)",
                    opacity:"0",
                    transition:"800ms"
                })
            }

            /* end horizontalSlider */

            /* start container3 */
            /* column1 */
            /* item1 */

            if(st>3676){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item1").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item2 */

            if(st>3764){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item2").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item3 */

            if(st>3850){
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column1>div.item3").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* column2 */
            /* item1 */

            if(st>3936){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item1").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item2 */

            if(st>4024){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item2").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* item3 */

            if(st>4112){
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3").css({
                    position:"relative",
                    left:"0",
                    transition:"700ms"
                })
            }else{
                $("div.wrapper>div.container3>div.services>div.right>div.column2>div.item3").css({
                    position:"relative",
                    left:"-130%",
                    transition:"700ms"
                })
            }

            /* end container3 */
        })

        /* container2 */

        gsap.to("div.wrapper>div.container2>div.aboutPage>div.title>div",{
            x:"-14vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container2>div.aboutPage>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top 0",
            }
        })

        let projects=gsap.to("div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",{
            x:"-11vw",
        })
        ScrollTrigger.create({
            trigger:"div.wrapper>div.container2>div.horizontalSlider>div>div.section1>div>div",
            start:"top 100%",
            end:"top -20%",
            animation:projects,
            scrub:2,
        })

        gsap.to("div.wrapper>div.container3>div.services>div.title>div",{
            x:"-10vw",
            scrollTrigger:{
                trigger:"div.wrapper>div.container3>div.services>div.title>div",
                scrub:2,
                start:"top 100%",
                end:"top 0",
            }
        })
    }
    
    
})