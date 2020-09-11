var MXXBH_clickFun = {
    areaStyle: {
        width: '40px',
        height: '40px',
        overflow: 'hidden',
        position: 'absolute',
        transition: 'all 1s ease-in-out',
        opacity: "1"
    },
    figurePosition:{
        top : 10,
        left: 20,
        width: 40,
        height: 45
    },
    figure : [{
        name: 'heart',
        svg: `M20.5 9.5
            c-1.955 0 -3.83 1.268 -4.5 3
            c-0.67 -1.732 -2.547 -3 -4.5 -3
            C8.957 9.5 7 11.432 7 14
            c0 3.53 3.793 6.257 9 11.5
            c5.207 -5.242 9 -7.97 9 -11.5
            C25 11.432 23.043 9.5 20.5 9.5z`
    },{
        name: 'triangle',
        svg: `M25 15
            L35 40
            L15 40z`        
    },{
        name: 'auto',
        svg:`M20 7
            L28 30
            L8 16
            H32
            L12 30 
            `
    }],
    createFigure : function(figureSvg){
        let red = Math.floor(Math.random()*255).toString(16);
        let green = Math.floor(Math.random()*255).toString(16);
        let blue = Math.floor(Math.random()*255).toString(16);
        let path = `<path fill="#${red+green+blue}" d="${figureSvg}" />`;
        let heart = `<svg>${path}</svg>`;
        return heart;
    },
    ready : function(){
        let allClickFunArea = document.getElementsByClassName('MXXBH_clickFun');
        for(let x of allClickFunArea){
            x.addEventListener('mousedown',(e)=>{
                if(e.button == 0){
                    let div = document.createElement('div');
                    let style = '';
                    for(let i in this.areaStyle){
                        style += i + ":" + this.areaStyle[i] + ';';
                    }
                    let top = e.clientY + (Math.random()*4-2)*Math.random()*this.figurePosition.top - this.figurePosition.height;
                    let left = e.clientX + (Math.random()*4-2)*Math.random()*this.figurePosition.left - this.figurePosition.width/2;
                    // style += "top:" + top + "px;left:" + left + "px;";
                    div.setAttribute('style',style);
                    div.style.top = top + 'px';
                    div.style.left = left + 'px';
                    setTimeout(()=>{
                        div.style.top = top - 100 + "px";
                        div.style.opacity = 0;
                        setTimeout(()=>{
                            div.parentNode.removeChild(div)
                        },3000)
                    },10)
                    document.body.appendChild(div);
                    let j = Math.floor(Math.random()*this.figure.length);
                    div.innerHTML = this.createFigure(this.figure[j].svg);
                }
            })
        }
    }
}