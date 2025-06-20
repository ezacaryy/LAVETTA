// <!-- =============================CREATE Auto navbar scrolling============================= -->
const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if (top>=offset && top< offset + height) {
            navLink.forEach(links=>{
                links.classlist.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })

// <!-- =============================CREATE A STICKY NAV BAR============================= -->
    var header=document.querySelector('header')
    header.classList.toggle("sticky",windows.scrollY>100)
    menubar.classlist.remove('bx-x')
    navbar.classList.remove('active')

};
// <!-- =============================CREATE A TOGGLE CHANGER============================= -->
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// <!-- =============================CREATE A TEXT CHANGER============================= -->
var type= new Typed('.textline',{
    strings:["Nous proposons des offres allant de 30 DH à 2000 DH, adaptées à tous les besoins et budgets.", "SOIN DE VISSAGE / CHEVEUX", "EPILATION DEFINITIVE LASER","HAMMAM SPA","BOTOX / FILLER" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:500,
    loop:true
})

