const createSecNav =()=>{
    for(let i =1 ; i<=4;i++){
        $('ul').append(`<li><a id="link${i}" class="menu__link">section ${i}</a></li>`)

    }
};
createSecNav();
const creatSec = ()=>{
    $('main').append(`    <section id="section4" data-nav="Section 4">
    <div class="landing__container">
      <h2>Section 4</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
  </section>`)
};

creatSec();

const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');
const scrollToSec = () => {
    links.forEach((link)=>{
        link.addEventListener('click',(event)=>{
            event.preventDefault();
            //  using match to extract number from an id to connect <a> with <section>
            let sectionIdNum = link.id.match(/(\d+)/)[0];
             document.querySelector(`#section${sectionIdNum}`).scrollIntoView({behavior:'smooth'});
        })
    })
};
scrollToSec();

window.addEventListener('scroll',()=>{
    // check when section be onscreen responsively and distinguish section that onscreen from others
    sections.forEach((section)=>{
        if((section.getBoundingClientRect().top < 0.4* window.innerHeight) && (section.getBoundingClientRect().top >-0.5* window.innerHeight)){
            return section.classList.add('your-active-class') ,   document.querySelector(`#link${section.id.match(/(\d+)/)[0]}`).classList.add('active')

        }else{
            section.classList.remove('your-active-class')
            document.querySelector(`#link${section.id.match(/(\d+)/)[0]}`).classList.remove('active')
        }
    })
})
