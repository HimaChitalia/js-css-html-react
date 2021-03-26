//Fetch request. It is thenable. You need to convert response into json and return it. For error use catch block

fetch(url + location + '&appid=' + apiKey).then(function(response){
    return(response.json());
}).then(function(response) {
    updateUISuccess(response);
}).catch(function() {
    updateUIFailure();
});

document.querySelector -> this will give you first matching elem;
document.querySelector -> To select the group of elements;

const location = document.querySelector('#location').value;
document.querySelector('#location').value = '';

document.querySelectorAll('.options div').forEach(function(el) {
    el.classList.remove('selected')
})


//Events - clicks, hover

document.querySelector('li').addEventListener('click', function(e) {
    e.preventDefault();
    data.clickX = e.screenX;
    data.clickY = e.screenY;
}, false);


//JQuery alternatives

$(this).hasClass('.class') => event.target.classList.contains('.class');
$(this).removeClass('.class') => event.target.classList.remove('.class');
$(this).attr('id') => event.target.id;
$(this).addClass('selected') => event.target.classList.add('selected');

DOM Manipulation

createElement() (method)=> create
setAttribute()(method) => add attribute and value

let cityPara = document.createElement('p');
cityPara.setAttribute('class', 'city')


textContent  [property] => set text content of paragarph or div or header
cityPara.textContent = state.city;

appendChild() (method) =>  add that node in dom
container.appendChild(cityPara);


replaceChild() (method) => replaceChild in DOM;
if(document.querySelector('.activities div')){
    into.replaceChild(activitiesContainer, document.querySelector('.activities div'))
} else {
    into.appendChild(activitiesContainer)
}ViewFlags

Template Literals

conditionPara.textContent = `${state.degCInt} \u00B0 C / ${state.degFInt} \u00B0 F `;
