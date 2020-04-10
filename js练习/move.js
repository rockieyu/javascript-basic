

function change(obj,attr,target){
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        var curAttr = 0;
        
        if(attr =='opacity'){
            curAttr = Math.round(parseFloat(getComputedStyle(obj,false)[attr])*100)
            console.log(curAttr);
        }
        else{
            curAttr = parseInt(getComputedStyle(obj,false)[attr]);
        }
                     
        var speed = (target - curAttr)/5;
        console.log(target-curAttr);

        if (speed>0){
            speed = Math.ceil(speed)
        }
        else{
            speed = Math.floor(speed)
        }

        if(curAttr == target){
            clearInterval(obj.timer)
        }
        else{

            if(attr == 'opacity'){
                obj.style.opacity = (curAttr+speed)/100;
            }
            else{
            obj.style[attr] = curAttr + speed +'px'
            }
        } //style['height'],style.height,注意代码的规范，debug好半天...

    },30)


}