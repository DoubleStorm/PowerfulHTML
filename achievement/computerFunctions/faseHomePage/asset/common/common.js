var commonService = {
    comCont:{
        adj:["帅气的","可爱的","浪漫的","乐观的","滑稽的","有趣的","贪吃的","祸不单行的","法力无边的","偷鸡不成蚀把米的","赔了夫人又折兵的"]
    },
    comFunc:{
        getRandomInt: function(min,max){
            [min,max] = [Math.round(min),Math.round(max)];
            if(min == max) return max;
            else if(max < min) [min,max] = [max,min];
            return Math.round(Math.random()*(max-min)) + min;
        },
        getRandomArrayItem: function(array){
            if(Object.prototype.toString.call(array).match("Array")){
                return array[commonService.comFunc.getRandomInt(0,array.length-1)];
            }
        },
        changePageTitle: function(){
            let title = document.getElementsByTagName('title').item(0);
            title.innerText = commonService.comFunc.getRandomArrayItem(commonService.comCont.adj) + "主页";
        }
    }
}