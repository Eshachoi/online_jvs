//함수 calc()선언과 구현을 하고 있다. 
        function calc() {
            var currentYear = 2025;//올해 년도를 변수  currentYear에 저장함
            
            var birthYear = prompt("태어난 년도를 입력하세요.","YYYY");
            //사용자로부터 입력을 받은 값은로 변수 birthYear에 저장함
            var age = 0;//변수 age를 0으로 초기화
            age = currentYear - birthYear;//실제 나이를 구하기 위한 코드
            document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다."
            //document는 현재 웹브라우저의 페이지를 의미하고, 
            // querySelector함수는 id가 result인 웹요소(div)를 의미한다. innerHTML은 대입한 값으로 
            //HTML문서에 대체하라는 의미임.
        }