* {
    box-sizing: border-box;
  }
  html,
  body,
  .container {
    width: 100%;
  }
  html {
    font-family: Pretendare;
  }
  body {
    margin: 0;
  }


apiKey: "AIzaSyCq4ivi1FKKHYZJDsw9M-5V7OrKmpe-7-8",
  authDomain: "fir-b2f7b.firebaseapp.com",
  projectId: "fir-b2f7b",
  storageBucket: "fir-b2f7b.appspot.com",
  messagingSenderId: "941112398298",
  appId: "1:941112398298:web:d0aa195f81df73edb8f0e3"






async function getDatas(collectionName) {}





cosort {getDatas} from '/.resopurces/js/firebase.js';
const items = document.getElementById('items');


async function getMbtiInfo() {
const datas = await getDatas("mbtiColor");
let idx = 1;
datas.forEach((doc, idx) => {
    const info -doc.data(idx);
    items.i nsertAdjacenTHTML(
        'afterbegin',
'
'
   <li class='item'
<div class= 'item-id'>${idx}</div>
<div class= 'item-id'>${idx}</div>
<div class= 'item-id'>${idx}</div>


class="item=color-chip"
style="background-color" : ${info.code}"
></div>
<div class="item-color-code">${info.code.toUpperCase()}</div>
</li>

    );
idx++;
    });
    }
getMbtiInfo();

// const mbtiArr = [
 //   {mbti: "ENFP", code: "#efb578"},
 //   {mbti: "ENFP", code: "#C460LE"},
 //   {mbti: "ENFP", code: "#95fcc0"},
   // {mbti: "ENFJ", code: "#4d74b8"},
  //  {mbti: "INFP", code: "#40fa34"},
  //  {mbti: "ISFP", code: "#106100"},
  //  {mbti: "INFP", code: "#f0df32"},
   // {mbti: "INTJ", code: "#10e479"},
  //  {mbti: "ENFP", code: "#6c84ac"},
  //  {mbti: "ESFJ", code: "#aec7cb"},
   // {mbti: "ESTJ", code: "ff5028"},
   // {mbti: "INFP", code: "#6C84AC"},
  //  {mbti: "ENTJ", code: "#6746cb"},
   // {mbti: "INTJ", code: "#ff5028"},
  //  {mbti: "ISTP", code: "#36c667"},
  //  {mbti: "INFP", code: "#4c8f9e"},
  //  {mbti: "ESFP", code: "#c88ce8"},
  //  {mbti: "ENFP", code: "#c1ffc0"},
   // {mbti: "INFJ", code: "5f6600"},


console.log(doc.data());
})
}
getMbtiInfo();

const mbtiArr = [ ...]
mbtiArr.forEach ((info, idx) =>) {

















toString(16).padStart(2, '0');

const submitBtn = document.querySelector("button.submit");
submitBtn.addEventListener("click", async function(){
    // mbtu 가져오기
    const selectedArr = document.querySelectorAll(".selected > span");
if(selectedArr.length ! = 4) {
    alert("네가지의 MBTI 를 모두 선택하셔야 합니다.");
    return false; 
}
const mbtiVal = (Array.from(selectedArr)). reduce((acc, cur) => {
return acc+ cur.innerTEXT
}, "");

console.log(mbtiVal);

// color code 가져오기
const colorCode = colorInput.value.toLowerCase();

// 객체형태로 만들기
const addObj = { mbti: mbtiVal, code: colorCode };

// addDatas 함수 호출하기
const result = await addDatas("mbtiColor", addObj);
if(result) {
    alert("MBTI 컬러 등록을 성공했습니다.");
    window.location.reload();
}else {
    alert("MBTI 컬러 등록을 실패했습니다. 관리자에게 문의하세요.");
}
});
</script>
</hmtl>










    





















    
    









