window.onload = function () {

    /* get all elements */

    var li = document.querySelectorAll(".question");
    var answer = document.querySelectorAll(".answer");
    var main = document.getElementById("main");
    var content = document.getElementById("content-wrapper");
    var btn = document.querySelectorAll(".close");


    var index = 0;

    /* loop to get every question & answer elements */
    for (var i = 0; i < li.length; i++) {

        //为每一个超链接都添加一个num属性
        li[i].num = i;

        
        /* 
            为超链接绑定单机响应函数：
                当li被点击时 
                    main display为none
                    answer-box display为block
                    所有带answer类的元素添加新的class active
                    content 添加新的active类
        */
        li[i].onclick = function () {

            /* 获取当前点击的索引并将其为设置为index */
            index = this.num;
            
            //遍历获取所有answe
            for (var j = 0; j < answer.length; j++) {
                answer[index].classList.add("active");
                main.style.display = "none";
                content.classList.add("active");

            }
            /* 
                获取所有关闭按钮:
                    给每个关闭按钮绑定单机响应函数
                    当关闭按钮点击时候，question display为block
                    answer display为none
            */
            for (var k = 0; k < btn.length; k++) {
                btn[k].num = k;

                btn[k].onclick = function () {
                    index = this.num;
                    /* console.log(this.num) */
                    answer[index].classList.remove("active")
                    content.classList.remove("active");
                    main.style.display = "block";

                }
            }


        }

    }




}