$("div.wrapper>div.menu>div.right").on("click",()=>{
        $("div.wrapper>div.menu>div.smenu").css({
            opacity:"1",
            transition:"500ms",
            zIndex:"1",
            display:"block",
        })
})

$("div.wrapper>div.menu>div.smenu>div.navbar>div.right").on("click", ()=>{
    $("div.wrapper>div.menu>div.smenu").css({
        opacity:"0",
        transition:"500ms",
        zIndex:"-1",
        display:"none"
    })
})

$("div.wrapper>div.menu>div.right").on("click",()=>{
    $("div.wrapper>div.container1").css({
        display:"none"
    })
})

$("div.wrapper>div.menu>div.smenu>div.navbar>div.right").on("click", ()=>{
    $("div.wrapper>div.container1").css({
        display:"block"
    })
})

let secondHead=document.querySelectorAll("div.wrapper>div.container1>div.header>div.top>div.head:nth-of-type(2)")
let firstHeadH1=document.querySelectorAll("div.wrapper>div.container1>div.header>div.top>div.head:nth-of-type(1)>h1:nth-of-type(1)")
let firstHeadH2=document.querySelectorAll("div.wrapper>div.container1>div.header>div.top>div.head:nth-of-type(1)>h1:nth-of-type(2)")
let headText=document.querySelectorAll("div.wrapper>div.container1>div.header>div.top>div.text")
let menuLeft=document.querySelectorAll("div.wrapper>div.menu>div.left")
let menuRight=document.querySelectorAll("div.wrapper>div.menu>div.right")
let headBotText1=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.text1")
let headBotDot1=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.dot1")
let headBotText2=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.text2")
let headBotDot2=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.dot2")
let headBotText3=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.text3")
let headBotDot3=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.dot3")
let headBotText4=document.querySelectorAll("div.wrapper>div.container1>div.header>div.bot>div.text4")

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{

        secondHead.forEach((head)=>{

            setTimeout(()=>{
                head.classList.add('head2active')
            })
        })

        firstHeadH1.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('head2active')
            },(idx + 1) * 300)
        })

        firstHeadH2.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('head2active')
            },(idx + 1) * 400)
        })

        headText.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('headtext')
            },(idx + 1) * 500)

        })

        menuLeft.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('menu')
            },(idx + 1) * 500)

        })

        menuRight.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('menu')
            },(idx + 1) * 500)

        })

        headBotText1.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 300)

        })

        headBotDot1.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 400)

        })

        headBotText2.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 500)

        })

        headBotDot2.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 600)

        })

        headBotText3.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 700)

        })

        headBotDot3.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 800)

        })

        headBotText4.forEach((head,idx)=>{

            setTimeout(()=>{
                head.classList.add('bot')
            },(idx + 1) * 900)

        })

    })
});e

fkldnskfjmnhyuiklngtjhftgyhjkjijbfjhsknguorhjghksdnc 