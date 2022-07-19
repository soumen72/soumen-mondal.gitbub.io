var navMenuAnchorTags=document.querySelectorAll('.nav-menu-heading a');
    // console.log(navMenuAnchorTags); //14anchor tags
    for(var i=0;i<navMenuAnchorTags.length;i++){
        // console.log(navMenuAnchorTags[i]);
        navMenuAnchorTags[i].addEventListener('click',function(event){
                
                event.preventDefault();
                var targetsectionid=this.textContent.trim().toLowerCase();
                // console.log(targetsectionid);
                var targetsection=document.getElementById(targetsectionid);
                
                // console.log(targetsectioncoordinates);
                var intervals=setInterval(function(){
                //    after each scroll the top /y axis distance reduced
                    var targetsectioncoordinates=targetsection.getBoundingClientRect();
                    if(targetsectioncoordinates.top<=0){
                        clearInterval(intervals);
                        return;
                    }
                    window.scrollBy(0,50);
                },40);
        });
    }


    var progressBars=document.querySelectorAll('.skill-progress > div');
    //console.log(progressBars); gives all the div tag within progresss bars
    var skillContainer=document.getElementById('skills-container');
    // console.log(skillContainer);
    var animationDone=false;
    function initialiseBars(){
        for(let bar of progressBars){
            // console.log(bar);
            bar.style.width=0+'%';
            
        }
    }
    initialiseBars();
     
    function fillBars(){
        for(let bar of progressBars){
            let targetWidth=bar.getAttribute('data-bar-width');
            let currentWidth=0;
            let  interval=setInterval(function(){
                if(currentWidth>=targetWidth){
                    clearInterval(interval);
                    return;
                }

                currentWidth++;
                bar.style.width=currentWidth+'%';
                // bar.scrollBy(50,0);

            },5);

        }
    }
    //for every scroll it will pass the function checkscroll
    window.addEventListener('scroll',checkScroll);

    function checkScroll(){
        //you have to check weather skill section is visibe
        var containerCoordinates=skillContainer.getBoundingClientRect();
        if(!animationDone && containerCoordinates.top<window.innerHeight){
            // console.log('if ' +containerCoordinates.top);
            animationDone=true;
            console.log('skill section visible');
            //animate
            fillBars();
        }else if(containerCoordinates.top>window.innerWidth){
            // console.log('else ' +containerCoordinates.top);
            animationDone=false;
            initialiseBars();
        }
        // else if(containerCoordinates.bottom<window.top){
        //     animationDone=false;
        //     initialiseBars();
        // }    


    }


