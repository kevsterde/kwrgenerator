

const nob = document.querySelector("#nob").value;
console.log(nob);



const show = document.querySelectorAll(".card-img-top");
show.forEach(item =>{
    item.style.cursor = 'pointer';
   item.addEventListener("click", function(){
    window.open(item.src,'_blank');
   })

});


const servGenerate = document.querySelector("#serv_boxes .btn-generate");
servGenerate.addEventListener("click", function () {
    const parent = servGenerate.parentNode.parentNode.parentNode.parentNode.id;
    const before = document.querySelectorAll("#" + parent + " .row_before input");
    const altvalue = document.querySelectorAll("#" + parent + " .row_alt input");
    const smallvalue = document.querySelectorAll("#" + parent + " .row_small input");
    const heading2 = document.querySelectorAll("#" + parent + " .row_h2 input");
    const span = document.querySelectorAll("#" + parent + " .row_span input");
    const paragraph = document.querySelectorAll("#" + parent + " .row_p input");
    const buttons = document.querySelectorAll("#" + parent + " .row_buttons input");
    const result = document.querySelectorAll("#" + parent + " .row_result textarea");
 

    var _href = [];

    for (let i = 0; i < 4; i++) {
        if (smallvalue[i].value == "") {
            if (span[i].value == "") {
                _href[i] = nob +heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
            else {
                _href[i] = nob +heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
                span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
        }
        else {
            _href[i] = nob +smallvalue[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
        }
    }





    var classname = "serv_boxes";

    let css = `.serv_boxes{ display: flex; gap: 10px;justify-content: space-between;}
    .serv_boxes section{position:relative; border: 1px solid red;max-width: 320px; width:100%; border-radius:10px; padding: 20px 20px 100px;text-align:center;}
    .serv_boxes section.serv_box1{}
    .serv_boxes section.serv_box2{}
    .serv_boxes section.serv_box3{}
    .serv_boxes section.serv_box4{}
    .serv_boxes section figure{ max-width:fit-content; width:100%; margin:0 auto 0;}
    .serv_boxes section figure img{ width:100%; border-radius:50%;}
    .serv_boxes section .serv_info{ }
    .serv_boxes section h2 {margin:0 0 20px;}
    .serv_boxes section h2 small{display:block;}
    .serv_boxes section h2 span{display:block;}
    .serv_boxes section p{}
    .serv_boxes section a{line-height: 50px; max-width: fit-content; position: absolute; bottom: 24px; left: 0; right: 0; margin: auto;}
    .serv_boxes section a:hover{}   
    `;

    if(before[0].checked == true)
    {
        css += `.serv_boxes section:before{position:absolute;left: 0; top: 20px; right:0; transform: none;margin:auto;max-width:fit-content;}
    .serv_boxes section.serv_box1:before{content:url(images/icons/serv1.png);}
    .serv_boxes section.serv_box2:before{content:url(images/icons/serv2.png);}
    .serv_boxes section.serv_box3:before{content:url(images/icons/serv3.png);}
    .serv_boxes section.serv_box4:before{content:url(images/icons/serv4.png);}`
    }



let content = [];

for (let i = 0; i < 4; i++)
{
 
    if(altvalue[i].value == ""){

        if(paragraph[i].value == "")
            {
                content[i] = '\n\t<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`serv_box${i+1}`, content[i]);
            }
            else{
                content[i] = '\n\t<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`serv_box${i+1}`, content[i]);
            }

    }
    else
    {

        if(paragraph[i].value == "")
        {
            content[i] = "\t" + figure(`serv${i+1}`, altvalue[i].value) + '\n\t<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
            content[i] = section(`serv_box${i+1}`, content[i]);
        }
        else{
            content[i] = "\t" + figure(`serv${i+1}`, altvalue[i].value) +'\n\t<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
            content[i] = section(`serv_box${i+1}`, content[i]);
        }


    
    }



}

  

    let three_boxes_content = content[0] + "\n\t" + content[1] + "\n\t" + content[2] + "\n\t" + content[3];

    result[0].value = div(classname, three_boxes_content);
    result[1].value = css;
    result[2].value = "\n" + register("1 Services Boxes(" + smallvalue[0].value  + " " + heading2[0].value + " " + span[0].value + ")", "serv_box1") +
        "\n" + register("2 Services Boxes(" + smallvalue[1].value  + " " + heading2[1].value + " " + span[1].value + ")", "serv_box2") +
        "\n" + register("3 Services Boxes(" + smallvalue[2].value  + " " + heading2[2].value + " " + span[2].value + ")", "serv_box3") +
        "\n" + register("4 Services Boxes(" + smallvalue[3].value  + " " + heading2[3].value + " " + span[3].value + ")", "serv_box4")


        ;


    for(let i = 0; i < 3; i++)
    {
       
        result[i].addEventListener("click", function(){
            result[i].select();
            result[i].setSelectionRange(0,9999);
            document.execCommand('copy');

    });
    }
 


});



const servReverseGenerate = document.querySelector("#serv_boxes_reverse .btn-generate");
servReverseGenerate.addEventListener("click", function () {
    const parent = servReverseGenerate.parentNode.parentNode.parentNode.parentNode.id;
    const before = document.querySelectorAll("#" + parent + " .row_before input");
    const altvalue = document.querySelectorAll("#" + parent + " .row_alt input");
    const smallvalue = document.querySelectorAll("#" + parent + " .row_small input");
    const heading2 = document.querySelectorAll("#" + parent + " .row_h2 input");
    const span = document.querySelectorAll("#" + parent + " .row_span input");
    const paragraph = document.querySelectorAll("#" + parent + " .row_p input");
    const buttons = document.querySelectorAll("#" + parent + " .row_buttons input");
    const result = document.querySelectorAll("#" + parent + " .row_result textarea");


    var _href = [];

    for (let i = 0; i < 4; i++) {
        if (smallvalue[i].value == "") {
            if (span[i].value == "") {
                _href[i] = nob + heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
            else {
                _href[i] =nob + heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
                span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
        }
        else {
            _href[i] = nob + smallvalue[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
        }
    }





    var classname = "serv_boxes";

    let css = `.serv_boxes{ display: flex; gap: 10px;justify-content: space-between;}
    .serv_boxes section{position:relative; border: 1px solid red;max-width: 320px; width:100%; border-radius:10px; padding: 20px 20px 20px;text-align:center;}
    .serv_boxes section.serv_box1{}
    .serv_boxes section.serv_box2{}
    .serv_boxes section.serv_box3{}
    .serv_boxes section.serv_box4{}
    .serv_boxes section figure{ max-width:fit-content; width:100%; margin:0 auto 0;}
    .serv_boxes section figure img{ width:100%;}
    .serv_boxes section .serv_info{ }
    .serv_boxes section h2 { margin:0 0 20px;}
    .serv_boxes section h2 small{display:block;}
    .serv_boxes section h2 span{display:block;}
    .serv_boxes section p{}
    .serv_boxes section a{line-height: 50px; max-width: fit-content; margin: auto;}
    .serv_boxes section a:hover{}   
    `;

    if(before[0].checked == true)
    {
        css += `.serv_boxes section:before{position:absolute;left: 0; top: 20px; right:0; transform: none;margin:auto;max-width:fit-content;}
    .serv_boxes section.serv_box1:before{content:url(images/icons/serv1.png);}
    .serv_boxes section.serv_box2:before{content:url(images/icons/serv2.png);}
    .serv_boxes section.serv_box3:before{content:url(images/icons/serv3.png);}
    .serv_boxes section.serv_box4:before{content:url(images/icons/serv4.png);}`
    }



let content = [];

for (let i = 0; i < 4; i++)
{
 
    if(altvalue[i].value == ""){

        if(paragraph[i].value == "")
            {
                content[i] = '\n\t<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`serv_box${i+1}`, content[i]);
            }
            else{
                content[i] = '\n\t<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`serv_box${i+1}`, content[i]);
            }

    }
    else
    {

        if(paragraph[i].value == "")
        {
            content[i] =  '\t\n\n<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>'
            + "\n\t" + figure(`serv${i+1}`, altvalue[i].value) 
            ;
            content[i] = section(`serv_box${i+1}`, content[i]);
        }
        else{
            content[i] = '\t\n\n<div class="serv_info">' + "\n\t\t" + widget(`serv_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>'  + "\n\t" + figure(`serv${i+1}`, altvalue[i].value) 
            
            
            
            ;
            content[i] = section(`serv_box${i+1}`, content[i]);
        }


    
    }



}

  

    let three_boxes_content = content[0] + "\n\t" + content[1] + "\n\t" + content[2] + "\n\t" + content[3];

    result[0].value = div(classname, three_boxes_content);
    result[1].value = css;
    result[2].value = "\n" + register("1 Services Boxes(" + smallvalue[0].value  + " " + heading2[0].value + " " + span[0].value + ")", "serv_box1") +
        "\n" + register("2 Services Boxes(" + smallvalue[1].value  + " " + heading2[1].value + " " + span[1].value + ")", "serv_box2") +
        "\n" + register("3 Services Boxes(" + smallvalue[2].value  + " " + heading2[2].value + " " + span[2].value + ")", "serv_box3") +
        "\n" + register("4 Services Boxes(" + smallvalue[3].value  + " " + heading2[3].value + " " + span[3].value + ")", "serv_box4")


        ;
        for(let i = 0; i < 3; i++)
        {
           
            result[i].addEventListener("click", function(){
                result[i].select();
                result[i].setSelectionRange(0,9999);
                document.execCommand('copy');
    
        });
        }


});

const three_boxesGenerate = document.querySelector("#three_boxes .btn-generate");
three_boxesGenerate.addEventListener("click", function () {
    const parent = three_boxesGenerate.parentNode.parentNode.parentNode.parentNode.id;

    const altvalue = document.querySelectorAll("#" + parent + " .row_alt input");
    const before = document.querySelectorAll("#" + parent + " .row_before input");
    const smallvalue = document.querySelectorAll("#" + parent + " .row_small input");
    const heading2 = document.querySelectorAll("#" + parent + " .row_h2 input");
    const span = document.querySelectorAll("#" + parent + " .row_span input");
    const paragraph = document.querySelectorAll("#" + parent + " .row_p input");
    const buttons = document.querySelectorAll("#" + parent + " .row_buttons input");
    const result = document.querySelectorAll("#" + parent + " .row_result textarea");


    var _href = [];

    for (let i = 0; i < 3; i++) {
        if (smallvalue[i].value == "") {
            if (span[i].value == "") {
                _href[i] = nob+ heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
            else {
                _href[i] = nob+ heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
                span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
        }
        else {
            _href[i] = nob+ smallvalue[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
        }
    }





    var classname = "three_boxes";

    let css = `.three_boxes{display: flex; gap: 10px; justify-content: space-between;}
    .three_boxes section{width: 33%; border:1px solid red;position:relative; max-width:400px;text-align:center; padding: 20px 20px 60px;}
    .three_boxes section.three_boxes_box1{}
    .three_boxes section.three_boxes_box2{}
    .three_boxes section.three_boxes_box3{}
    .three_boxes section figure{ max-width:fit-content; width:100%; margin:0 auto 0;}
    .three_boxes section figure img{ width:100%; border-radius:50%;}
    .three_boxes section .info{}
    .three_boxes section h2{font-size:20px; font-weight:400;margin-bottom: 20px;}
    .three_boxes section h2 small{display:block;}
    .three_boxes section h2 span{display:block;}
    .three_boxes section p{}
    .three_boxes section a{position:absolute; bottom:10px; left:0; right:0; margin:auto; line-height: 50px;  }
    .three_boxes section a:hover{}    
    `;

    if(before[0].checked == true)
    {
        css += `.three_boxes section:before{position:absolute;left: 0; top: 20px; right:0; transform: none;}
    .three_boxes section.three_boxes_box1:before{content:url(images/icons/three_boxes_box1.png);}
    .three_boxes section.three_boxes_box2:before{content:url(images/icons/three_boxes_box2.png);}
    .three_boxes section.three_boxes_box3:before{content:url(images/icons/three_boxes_box3.png);}`
    }


let content = [];

for (let i = 0; i < 3; i++)
{

    if(altvalue[i].value == ""){

        if(paragraph[i].value == "")
            {
                content[i] = '\t<div class="info">' + "\n\t\t" + widget(`three_boxes_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`three_boxes_box${i+1}`, content[i]);
            }
            else{
                content[i] = '\t<div class="info">' + "\n\t\t" + widget(`three_boxes_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`three_boxes_box${i+1}`, content[i]);
            }

    }
    else
    {

        if(paragraph[i].value == "")
        {
            content[i] = "\t" + figure(`three_boxes_box${i+1}`, altvalue[i].value) + '\n\t\t<div class="info">' + "\n\t\t" + widget(`three_boxes_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
            content[i] = section(`three_boxes_box${i+1}`, content[i]);
        }
        else{
            content[i] = "\t" + figure(`three_boxes_box${i+1}`, altvalue[i].value) +'\n\t\t<div class="info">' + "\n\t\t" + widget(`three_boxes_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
            content[i] = section(`three_boxes_box${i+1}`, content[i]);
        }


    
    }



}


    let three_boxes_content = content[0] + "\n\t" + content[1] + "\n\t" + content[2] ;

    result[0].value = div(classname, three_boxes_content);
    result[1].value = css;
    result[2].value = "\n" + register("1 Three Box (" + smallvalue[0].value  + " " + heading2[0].value + " " + span[0].value + ")", "three_boxes_box1") +
        "\n" + register("2 Three Box (" + smallvalue[1].value  + " " + heading2[1].value + " " + span[1].value + ")", "three_boxes_box2") +
        "\n" + register("3 Three Box(" + smallvalue[2].value  + " " + heading2[2].value + " " + span[2].value + ")", "three_boxes_box3") 


        ;

        for(let i = 0; i < 3; i++)
        {
           
            result[i].addEventListener("click", function(){
                result[i].select();
                result[i].setSelectionRange(0,9999);
                document.execCommand('copy');
    
        });
        }

});




// TESTIMONIAL 1

const testi1 = () => {
    
    const parent = document.querySelector("#test1").id;

    const result = document.querySelectorAll("#" + parent + " .row_result textarea");


    result[0].value =`<div class="testimonial owl-carousel">
    <section>
        <p>We are excited to post contents on the website.</p>
        <h2>Dummy Name</h2>
    
        <figure><img src="<?php bloginfo('template_url');?>/images/testimonial/1.jpg" alt="dummy"></figure>
    </section>
    <section>
        <p>We are excited to post contents on the website.</p>
        <h2>Dummy Name</h2>
    
        <figure><img src="<?php bloginfo('template_url');?>/images/testimonial/2.jpg" alt="dummy"></figure>
    </section>
    <section>
        <p>We are excited to post contents on the website.</p>
        <h2>Dummy Name</h2>
    
        <figure><img src="<?php bloginfo('template_url');?>/images/testimonial/3.jpg" alt="dummy"></figure>
    </section>
</div>`


    result[1].value = `.testimonial{display: flex;justify-content: space-between;}
    .testimonial section{min-height: 278px;max-width: 374px;width: 100%;margin: auto;padding: 91px 42px 76px;text-align: center;position: relative;margin-bottom: 81px;background: #e5e5e5;}
    .testimonial section:before{content:url(images/icons/testi.png); position:absolute;left: 44px;top: 48px;}
    .testimonial section p{}
    .testimonial section h2{font-size: 24px;margin-top: 16px;color: #4d4d4d;}
    .testimonial section figure{border-radius: 50%;overflow: hidden;width: 141px;aspect-ratio: 1/1;position: absolute;bottom: -75px;left: 0;right: 0;margin: auto;}
    .testimonial section figure img{}`

    
    result[2].value = `$(".owl-carousel").owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        loop: true,
        margin:10,
        responsive : {
        291 : {
            items:1
        },
        601 : {
            items:2
        },
        1111 : {items:3	}
    }
    });
    `

        

        for(let i = 0; i < 3; i++)
        {
           
            result[i].addEventListener("click", function(){
                result[i].select();
                result[i].setSelectionRange(0,9999);
                document.execCommand('copy');
    
        });
        }

}
testi1();




const box1Generate = document.querySelector("#box1 .btn-generate");
box1Generate.addEventListener("click", function(){

    
    
    
    const parent = box1Generate.parentNode.parentNode.parentNode.parentNode.id;
    const classname = document.querySelectorAll("#" + parent + " .row_class input");
    const before = document.querySelectorAll("#" + parent + " .row_before input");
    const altvalue = document.querySelectorAll("#" + parent + " .row_alt input");
    const smallvalue = document.querySelectorAll("#" + parent + " .row_small input");
    const heading2 = document.querySelectorAll("#" + parent + " .row_h2 input");
    const span = document.querySelectorAll("#" + parent + " .row_span input");
    const paragraph = document.querySelectorAll("#" + parent + " .row_p input");
    const buttons = document.querySelectorAll("#" + parent + " .row_buttons input");
    const result = document.querySelectorAll("#" + parent + " .row_result textarea");
    
    if(classname[0].value == "")
    {
        classname[0].value = "empty";
    }

    var _href = [];

    for (let i = 0; i < 1; i++) {
        if (smallvalue[i].value == "") {
            if (span[i].value == "") {
                _href[i] = nob + heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
            else {
                _href[i] = nob + heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
                span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
        }
        else {
            _href[i] = nob + smallvalue[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
        }
    }







    let css = `.${classname[0].value}{position:relative; border: 1px solid red;max-width: 320px; width:100%; border-radius:10px; padding: 20px 20px 100px;text-align:center;}
    .${classname[0].value} figure{ max-width:fit-content; width:100%; margin:0 auto 20px;}
    .${classname[0].value} figure img{ width:100%; border-radius:50%;}
    .${classname[0].value} .serv_info{ }
    .${classname[0].value} h2 {margin:0 0 20px;}
    .${classname[0].value} h2 small{display:block;}
    .${classname[0].value} h2 span{display:block;}
    .${classname[0].value} p{}
    .${classname[0].value} a{line-height: 50px; max-width: fit-content; position: absolute; bottom: 24px; left: 0; right: 0; margin: auto;}
    .${classname[0].value} a:hover{}   
    `;
    
    if(before[0].checked == true)
    {
        css += `.${classname[0].value}:before{position:absolute;left: 0; top: 20px; right:0; transform: none; content:url(images/icons/${classname[0].value}.png);}
    `
    
    }



let content = [];

for (let i = 0; i < 1; i++)
{
    content[i] = "\t" + figure(`${classname[0].value}`, altvalue[i].value) + '\n\t\t<div class="serv_info">' + "\n\t\t" + widget(`${classname[0].value}`) + "\n\n\t\t" + 
    h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
}



    let three_boxes_content = content[0] + "\n\t";

    result[0].value = div(classname[0].value, three_boxes_content);
    result[1].value = css;
    result[2].value = register(smallvalue[0].value  + " " + heading2[0].value + " " + span[0].value, `${classname[0].value}`) 
        ;


        for(let i = 0; i < 3; i++)
        {
           
            result[i].addEventListener("click", function(){
                result[i].select();
                result[i].setSelectionRange(0,9999);
                document.execCommand('copy');
    
        });
        }



});



const twoBoxesGenerate = document.querySelector("#two_boxes .btn-generate");
twoBoxesGenerate.addEventListener("click", function () {
    const parent = twoBoxesGenerate.parentNode.parentNode.parentNode.parentNode.id;

    const altvalue = document.querySelectorAll("#" + parent + " .row_alt input");
    const before = document.querySelectorAll("#" + parent + " .row_before input");
    const smallvalue = document.querySelectorAll("#" + parent + " .row_small input");
    const heading2 = document.querySelectorAll("#" + parent + " .row_h2 input");
    const span = document.querySelectorAll("#" + parent + " .row_span input");
    const paragraph = document.querySelectorAll("#" + parent + " .row_p input");
    const buttons = document.querySelectorAll("#" + parent + " .row_buttons input");
    const result = document.querySelectorAll("#" + parent + " .row_result textarea");


    var _href = [];

    for (let i = 0; i < 2; i++) {
        if (smallvalue[i].value == "") {
            if (span[i].value == "") {
                _href[i] = nob + heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
            else {
                _href[i] =nob +  heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
                span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
            }
        }
        else {
            _href[i] = nob + smallvalue[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            heading2[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase() + "-" + 
            span[i].value.replace(/\//g, '-or-').replace(/&/g, '-and-').replace(/\s+/g, '-').toLowerCase();
        }
    }





    var classname = "two_boxes";

    let css = `
    .two_boxes{display: flex; gap: 10px; justify-content: space-between;}
        .two_boxes section{width: 48%; border:1px solid red;position:relative; max-width:400px;text-align:center; padding: 20px 20px 60px;}
        .two_boxes section.two_boxes_box1{}
        .two_boxes section.two_boxes_box2{}
        .two_boxes section figure{ max-width:fit-content; width:100%; margin:0 auto 0;}
        .two_boxes section figure img{ width:100%; border-radius:50%;}
        .two_boxes section .info{}
        .two_boxes section h2{font-size:20px; font-weight:400;margin-bottom: 20px;}
        .two_boxes section h2 small{display:block;}
        .two_boxes section h2 span{display:block;}
        .two_boxes section p{}
        .two_boxes section a{position:absolute; bottom:10px; left:0; right:0; margin:auto; line-height: 50px;  }
        .two_boxes section a:hover{}    
    `;
    
    if(before[0].checked == true)
    {
        css += `    .two_boxes section:before{position:absolute;left: 0; top: 20px; right:0; transform: none;}
        .two_boxes section.two_boxes_box1:before{content:url(images/icons/two_boxes_box1.png);}
        .two_boxes section.two_boxes_box2:before{content:url(images/icons/two_boxes_box2.png);}
    `
    }


let content = [];

for (let i = 0; i < 2; i++)
{

    if(altvalue[i].value == ""){

        if(paragraph[i].value == "")
            {
                content[i] = '\t<div class="info">' + "\n\t\t" + widget(`two_boxes_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`two_boxes_box${i+1}`, content[i]);
            }
            else{
                content[i] = '\t<div class="info">' + "\n\t\t" + widget(`two_boxes_box${i+1}`) + "\n\n\t\t" + 
                h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
                content[i] = section(`two_boxes_box${i+1}`, content[i]);
            }

    }
    else
    {

        if(paragraph[i].value == "")
        {
            content[i] = "\t" + figure(`two_boxes_box${i+1}`, altvalue[i].value) + '\t<div class="info">' + "\n\t\t" + widget(`two_boxes_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
            content[i] = section(`two_boxes_box${i+1}`, content[i]);
        }
        else{
            content[i] = "\t" + figure(`two_boxes_box${i+1}`, altvalue[i].value) +'\t<div class="info">' + "\n\t\t" + widget(`two_boxes_box${i+1}`) + "\n\n\t\t" + 
            h2(heading2[i].value,smallvalue[i].value ,span[i].value) + "\n\t\t" + p(paragraph[i].value) + "\n\t\t" + a_class(_href[i], buttons[i].value, "btn_style") + '\n\t\t</div>';
            content[i] = section(`two_boxes_box${i+1}`, content[i]);
        }


    
    }



}


    let three_boxes_content = content[0] + "\n\t" + content[1] ;

    result[0].value = div(classname, three_boxes_content);
    result[1].value = css;
    result[2].value = "\n" + register("1 Two Boxes(" + smallvalue[0].value  + " " + heading2[0].value + " " + span[0].value + ")", "two_boxes_box1") +
        "\n" + register("2 Two Boxes(" + smallvalue[1].value  + " " + heading2[1].value + " " + span[1].value + ")", "two_boxes_box2") 


        ;

        for(let i = 0; i < 3; i++)
        {
           
            result[i].addEventListener("click", function(){
                result[i].select();
                result[i].setSelectionRange(0,9999);
                document.execCommand('copy');
    
        });
        }

});








const reset = document.querySelectorAll(".btn-reset");
reset.forEach(item => {
    item.addEventListener("click", function () {

        const parent = item.parentNode.parentNode.parentNode.parentNode.id;
        const allData = document.querySelectorAll("#" + parent + " input");
        const allDataTextArea = document.querySelectorAll("#" + parent + " textarea");

        allData.forEach(item => {
            item.value = null;
        });
        allDataTextArea.forEach(item => {
            item.value = null;
        });

    });

});




























////////////////////////////////////////////////////////////////// 



function register(name, id) {
    return `register_sidebar( array(
        'name' => __( '${name}', 'twentyten' ),
        'id' => '${id}',
        'description' => __( 'The primary widget area', 'twentyten' ),
        'before_widget' => '<div class="widget-container %2$s">',
        'after_widget' => '</div>',
        'before_title' => '',
        'after_title' => '',
    ) );`
}


function widget(classname) {
    return `<?php dynamic_sidebar('${classname}');?>`;
}




function div(classname, content) {

    if (content == null) {
        return `<div class="${classname}">
        
        </div>`;
    }

    return `<div class="${classname}">
    ${content}
</div>`;

}

function h2(h2,small, span) {
    if (span == "") {
        if(small == "")
        {
            return `<h2>${h2}</h2>`;
        }
        else{
            return `<h2><small>${small}</small> ${h2}</h2>`;
        }
    }
 

    if(small == "")
    {

        if(span == "")
        {
            return `<h2>${h2}</h2>`;
        }
        else{
            return `<h2>${h2} <span>${span}</span></h2>`;
        }
    }

     
    return `<h2><small>${small}</small> ${h2} <span>${span}</span></h2>`;


}

function small(content) {

    return `<small>${content}</small>`;
}



function p(p) {
    return `<p>${p}</p>`
}

function a(href, name) {


    if (name == '') {
        return `<a href="${href}">${name}</a>`
    }



    return `<a href="${href}">${name}</a>`
}

function a_class(href, name, classname) {
    return `<a href="${href}" class="${classname}">${name}</a>`
}



function section(classname, content) {

    if (content == null) {
        return `<section class="${classname}"></section>`;
    }

    return `<section class="${classname}">
    ${content}
    </section>`;

}


function figure(src, alt) {

    if (alt == '') {
        return `<figure><img src="<?php bloginfo('template_url');?>/images/` + src + `.jpg" alt="xxxxxxxxxxxxxxxxxx_ADD_ALT_HERE_xxxxxxxxxxxxxxxxxx"></figure>`;
    }


    return `<figure><img src="<?php bloginfo('template_url');?>/images/` + src + `.jpg" alt="` + alt + `"></figure>`;
}


