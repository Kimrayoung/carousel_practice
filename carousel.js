function getFirstNode(box){
    return box.firstElementChild;
}

function getLastNode(box) {
    return box.lastElementChild;
}

function appendBox(box) {
    const firstNode = getFirstNode(box);
    const lastNode = getLastNode(box);
    box.append(firstNode.cloneNode(true));
    box.insertBefore(lastNode.cloneNode(true),firstNode);
}

const box = document.querySelector('.box');
//let imgs = document.querySelectorAll('img');
console.log(box.firstElementChild);
 //element는 태그들만 가져와지는 것
 //즉, element는 node이자 element가 됨
 //element는 node의 것들이 상속
console.log(box);
console.log('text',box.childNodes[0]);
//태그와 태그 사이에 있는 빈 문자열도 node로 취급이 됨
 //태그와 태그 사이에는 빈 문자열이 있음(그러므로 childnode를 가져오면 text,img이런식으로 가져와짐)

const left = document.querySelector('.left');
const right = document.querySelector('.right');

//이렇게 box앞 뒤에 마지막 이미지와 첫번째 이미지롤 넣어주는 게 없다면 마지막 이미지에서 
//첫번째 이미지로 이동할 때 인위적으로 이동되는 것처럼 보임, 즉 부자연스러워보임
//앞뒤에 이미지를 붙여준다면 같은 이미지에서 같은 이미지로 이동하는 것이기 때문에 자연스러움

const len = box.querySelectorAll('img').length;
//console.log('길이',len);
let onesize = 500;
box.style.transform = `translate(-${onesize}px,0px)`; //맨처음 이미지로 이동하기 위해서

const min = 0;
const max = onesize * (len - 1);
console.log('길이',len);

let sum = onesize; //이동하는 캐러셀 사이즈
left.addEventListener('click',function(event){
    box.style.transition = '1s';  //1초에 이동하는 것처럼 이미지가 보여짐
    if(sum === max){
        return;
    }
    sum += onesize;
    box.style.transform = `translate(-${sum}px,0)`;

    if(sum === max){
        setTimeout(function(){
            box.style.transition = 'none'; //이미지가 옮겨지는 것처럼 보이면 안됨
            sum = onesize; //첫번째 이미지로 옮겨갈 수 있도록 첫번쨰 이미지의 위치를 넣어줌
            box.style.transform = `translate(-${sum}px,0px)`;
        },1000);
    }
    
    console.log(sum);
});

right.addEventListener('click',function(event){
    box.style.transition = '1s';
    if(sum === min) {
        return;
    }

    sum -= onesize;
    box.style.transform = `translate(-${sum}px,0)`;

    if(sum === min){
        setTimeout(function(){
            box.style.transition = 'none';
            sum = max - onesize; //마지막 이미지로 옮겨져서 자연스럽게 이동되게함
            box.style.transform = `translate(-${sum}px,0px)`;
        },1000);
    }
    console.log(sum);
});