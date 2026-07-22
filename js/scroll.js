'use strict'
window.addEventListener('load', ()=>{
    window.addEventListener('scroll', function(){
        let offsety = window.pageYOffset
        console.log(offsety)
        let n1_1 = false;
        let n1_2 = false;
        let n1_3 = false;
        let n1_4 = false;
        let n1_5 = false;

        let n2_1 = false;
        let n2_2 = false;
        let n2_3 = false;

        let n3_1 = false;
        let n3_2 = false;

        let n4_1 = false;
        let n4_2 = false;
        let n4_3 = false;

        let n5 = false;

        let n6 = false;

        // content1
        if(400 < offsety && n1_1 == false){
            n1_1 = true;
            document.querySelector('.intro_in h2').classList.add('act');
        }
        else if(400 < offsety && n1_1 == true){
            n1_1 = false;
            document.querySelector('.intro_in h2').classList.remove('act');
        }
        if(700 < offsety && n1_2 == false){
            n1_2 = true;
            document.querySelector('.intro_list1').classList.add('act');
        }
        else if(700 < offsety && n1_2 == true){
            n1_2 = false;
            document.querySelector('.intro_list1').classList.remove('act');
        }
        if(1000 < offsety && n1_3 == false){
            n1_3 = true;
            document.querySelector('.intro_list2').classList.add('act');
        }
        else if(1000 < offsety && n1_3 == true){
            n1_3 = false;
            document.querySelector('.intro_list2').classList.remove('act');
        }
        if(1500 < offsety && n1_4 == false){
            n1_4 = true;
            document.querySelector('.intro_list3').classList.add('act');
        }
        else if(1500 < offsety && n1_4 == true){
            n1_4 = false;
            document.querySelector('.intro_list3').classList.remove('act');
        }
        if(2000 < offsety && n1_5 == false){
            n1_5 = true;
            document.querySelector('.intro_list4').classList.add('act');
        }
        else if(2000 < offsety && n1_5 == true){
            n1_5 = false;
            document.querySelector('.intro_list4').classList.remove('act');
        }
        // content2
        if(2700 < offsety && n2_1 == false){
            n2_1 = true;
            document.querySelector('#area .title_info h2').classList.add('act');
        }
        else if(2700 < offsety && n2_1 == true){
            n2_1 = false;
            document.querySelector('#area .title_info h2').classList.remove('act');
        }
        if(2750 < offsety && n2_2 == false){
            n2_2 = true;
            document.querySelector('#area .title_info .view').classList.add('act');
        }
        else if(2750 < offsety && n2_2 == true){
            n2_2 = false;
            document.querySelector('#area .title_info .view').classList.remove('act');
        }
        if(3100 < offsety && n2_3 == false){
            n2_3 = true;
            document.querySelector('#area .area_photo').classList.add('act');
        }
        else if(3100 < offsety && n2_3 == true){
            n2_3 = false;
            document.querySelector('#area .area_photo').classList.remove('act');
        }
        // content3
        if(3500 < offsety && n3_1 == false){
            n3_1 = true;
            document.querySelector('.pro_in h2').classList.add('act');
        }
        else if(3500 < offsety && n3_1 == true){
            n3_1 = false;
            document.querySelector('.pro_in h2').classList.remove('act');
        }
        if(3800 < offsety && n3_2 == false){
            n3_2 = true;
            document.querySelector('.pro_list').classList.add('act');
        }
        else if(3800 < offsety && n3_2 == true){
            n3_2 = false;
            document.querySelector('.pro_list').classList.remove('act');
        }
        // content4
        if(4200 < offsety && n4_1 == false){
            n4_1 = true;
            document.querySelector('#gallery .title_info h2').classList.add('act');
        }
        else if(4200 < offsety && n4_1 == true){
            n4_1 = false;
            document.querySelector('#gallery .title_info h2').classList.remove('act');
        }
        if(4250 < offsety && n4_2 == false){
            n4_2 = true;
            document.querySelector('#gallery .title_info .view').classList.add('act');
        }
        else if(4250 < offsety && n4_2 == true){
            n4_2 = false;
            document.querySelector('#gallery .title_info .view').classList.remove('act');
        }
        if(4600 < offsety && n4_3 == false){
            n4_3 = true;
            document.querySelector('.g_list').classList.add('act');
        }
        else if(4600 < offsety && n4_3 == true){
            n4_3 = false;
            document.querySelector('.g_list').classList.remove('act');
        }
        // content5
        if(4900 < offsety && n5 == false){
            n5 = true;
            document.querySelector('#news').classList.add('act');
        }
        else if(4900 < offsety && n5 == true){
            n5 = false;
            document.querySelector('#news').classList.remove('act');
        }
        // content6
        if(5700 < offsety && n6 == false){
            n6 = true;
            document.querySelector('#map').classList.add('act');
        }
        else if(5700 < offsety && n6 == true){
            n6 = false;
            document.querySelector('#map').classList.remove('act');
        }
    })
})