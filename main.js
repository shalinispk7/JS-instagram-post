
        // save image section
        // let saveimg=document.getElementById("saveimg")
        function saveImagefnc(){
                let toastDiv = document.getElementById("toastDiv");
                toastMsg=`<p>Image Saved</p>`
                toastDiv.innerHTML= toastMsg
            setTimeout(function(){
                document.getElementById("toastDiv").style.display="none"
            },2000)
        document.getElementById("toastDiv").style.display="block"
                //  changing the icon while clicking
        let markImg=document.getElementById("saveimg")
        markImg.classList.toggle('bi-bookmark')
        markImg.classList.toggle('bi-bookmark-fill')

        if(markImg.classList.contains('bi-bookmark-fill')){
            markImg.style.color="black";
        }
        else if(markImg.classList.contains('bi-bookmark')){
            markImg.style.color="black";
        }
      }


    
        


    //   like image 
    let likeImg= document.getElementById("likeImg");
   
    count= parseInt(likeImg.innerHTML);
    function likeImagefnc(){
        
       let heart = document.getElementById("heart")
       heart.classList.toggle('bi-heart');
       heart.classList.toggle('bi-heart-fill');

        if(heart.classList.contains("bi-heart-fill")){
            heart.style.color="red";
            count++
            likeImg.innerHTML=count;
        }
        else if (heart.classList.contains("bi-heart")){
            heart.style.color="black";
            count--
            likeImg.innerHTML=count;
        }
       
    }


    // share image

    let popup=document.getElementById("popup")

    function openModal(){
        popup.classList.add("openpopup")
    }

    function closeModal(){
        popup.classList.remove("openpopup")
    }

    function circle(){
       
        let circleB=document.querySelector(".circleB");
        circleB.classList.toggle('bi-circle')
        circleB.classList.toggle('bi-record-circle')

        if(circleB.classList.contains('bi-record-circle')){
            circleB.style.color="blue";
        }
        else if(circleB.classList.contains('bi-circle')){
            circleB.style.color="black";
        }
    }


    