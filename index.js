// Let's Discuss data all posts -1
const fachDATAWone = async(sharc)=>{
    const dataPost = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${sharc?`?category=${sharc}`:''}`)
    const postJson = await dataPost.json()
    postHtmlData (postJson.posts)
}
// sarch post
const fetchDataSarch = ()=>{
    const hiddenLoder = document.getElementById('hidden-loder')
    hiddenLoder.classList.remove('hidden')
    setTimeout(()=>{
        const hiddenLoder = document.getElementById('hidden-loder')
        hiddenLoder.classList.add('hidden')

        // sharc input saplai text
    const searchPosts = document.getElementById('searchPosts').value; 
    fachDATAWone(searchPosts)
    },3000)
    
}

// post data html
const postHtmlData = (post)=>{
const postContainer = document.getElementById('post-container')
postContainer.innerHTML = ""
post.forEach(p => {
const creatDiv = document.createElement('div')
creatDiv.innerHTML = `
<div class="p-6 lg:p-12 flex gap-6 lg:flex-row flex-col items-center lg:items-start bg-[#F3F3F5] rounded-3xl">
    <div class="indicator">
        <span class=" ${p.isActive ? 'bg-green-600' : 'bg-red-500'} indicator-item badge "></span>
        <div class="avatar">
            <div class="w-24 rounded-xl">
            <img src="${p.image}">
            </div>
        </div>
        </div>
        <div class="space-y-4 w-full">
          <div class="flex gap-4 *:opacity-60">
            <p>${p.category}</p>
            <p>Author: ${p.author.name}</p>
        </div>
        <h3 class="text-2xl font-bold opacity-70">
        ${p.title}
        </h3>
        <p class="opacity-40">
        ${p.description}
        </p>
        <hr class="border border-dashed border-gray-300">
        <div class="flex justify-between *:font-bold [&amp;>*:not(:last-child)]:opacity-45">
            <div class="flex gap-4">
            <div class="space-x-2 flex items-center">
                <i class="fa-regular fa-comment-dots" aria-hidden="true"></i>
                <p>${p.comment_count}</p>
            </div>
            <div class="space-x-2 flex items-center">
                <i class="fa-regular fa-eye" aria-hidden="true"></i>
                <p>${p.view_count}</p>
            </div>
            <div class="space-x-2 flex items-center">
                <i class="fa-regular fa-clock" aria-hidden="true"></i>
                <p>${p.posted_time}</p>
            </div>
            </div>
            <div class="opacity-100">
            <button id="addToList" onclick="markAsRead('${p.description}',' ${p.view_count}') "description":"learn="" python="" programming="" from="" scratch="" and="" become="" a="" coding="" ninja!","comment_count":780,"view_count":2650,"posted_time":10}'="" class="addToList btn btn-circle bg-green-500 btn-sm">
                <i class="fa-solid fa-envelope-open text-white" aria-hidden="true"></i>
            </button>



       <button id="addToListMainas" onclick="markAsReadMainas()" class="addToList btn btn-circle bg-red-500 btn-sm" disabled>
  <i class="fa-solid fa-envelope-open text-white" aria-hidden="true"></i>
</button>

            </div>
        </div>
        </div>
    </div>
`
postContainer.appendChild(creatDiv)
});
}

const markAsRead = (text,views)=>{
const markAsReadContainer = document.getElementById('markAsReadContainer')
const creatDivCard = document.createElement('div')
creatDivCard.className = "bg-white p-2 rounded-xl flex justify-end items-center gap-2"
creatDivCard.innerHTML = `
<div class="lg:w-4/5 w-11/12">${text}</div>
<div class="lg:w-1/5 w-4/12 flex justify-end">${views} <p><i class="fa-regular fa-eye mx-2" aria-hidden="true"></i></p> </div>
`
markAsReadContainer.appendChild(creatDivCard)
cauntJog()
}

const cauntJog = ()=>{
const markAsReadCounter = document.getElementById('markAsReadCounter').innerText;
const cauntPars = parseInt(markAsReadCounter);
const jog = cauntPars + 1;
document.getElementById('markAsReadCounter').innerText = jog;
if(typeof jog === 'number'){
    document.querySelectorAll('#addToListMainas').forEach((r)=>{
  r.removeAttribute('disabled', true);
    })
}else{
    document.querySelectorAll('#addToListMainas').forEach((s)=>{
   s.setAttribute('disabled', true);
    })
}
}

const markAsReadMainas = ()=>{
    const markAsReadCounter = document.getElementById('markAsReadCounter').innerText;
const cauntPars = parseInt(markAsReadCounter);
const mainas = cauntPars - 1;

//  Mark as read card
const markAsReadContainer = document.getElementById('markAsReadContainer');

if(markAsReadContainer.children.length > 0){
    markAsReadContainer.removeChild(markAsReadContainer.children[0])
}

document.getElementById('markAsReadCounter').innerText = mainas;
if(mainas <= 0){
    document.querySelectorAll('#addToListMainas').forEach((s)=>{
   s.setAttribute('disabled', true);
    })
}else{
    document.querySelectorAll('#addToListMainas').forEach((r)=>{
    r.removeAttribute('disabled', true);
    })
}
}

// Latest data all Posts -2

const fachDATATwo = async()=>{
    const dataPostTwo = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const postJsonTwo = await dataPostTwo.json()
    dataTwoHtml(postJsonTwo)
}

// data Two Html
const dataTwoHtml = (js)=>{
const latestPostContainer = document.getElementById('latest-post-container');
latestPostContainer.innerHTML = '';
js.forEach((j)=>{
const creattwoData = document.createElement('div')
creattwoData.classList.add('card', 'lg:w-96', 'pb-5', 'bg-base-100', 'shadow-2xl')
creattwoData.innerHTML = `
<div class="card lg:w-96 pb-5 bg-base-100 shadow-2xl">
            <figure class="lg:px-6 px-4 pt-4 lg:pt-8">
                <img src="${j.cover_image}" alt="Shoes" class="rounded-xl">
            </figure>
            <div class="p-5 lg:p-10 space-y-4 lg:space-y-5">
                <p class="opacity-50 text-start">
                    <i class="fa-solid fa-calendar-days me-2" aria-hidden="true"></i>${j.author?.posted_date || 'No Publish Date'}
                </p>
                <h2 class="card-title text-start">${j.title}</h2>
                <p class="text-start">
                  ${j.description}
                </p>
                <div class="card-actions flex gap-5 items-center">
                    <div class="avatar">
                        <div class="lg:w-12 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="${j.profile_image}">
                        </div>
                    </div>
                <div>
                <h3 class="text-start font-extrabold">${j.author.name}</h3>
                <p class="text-start opacity-60">${j.author?.designation || 'No designation'}</p>
            </div>
        </div>
        </div>
`
latestPostContainer.appendChild(creattwoData)
})
}

// loding own
const lodingSpiner = ()=>{
    const hiddenLoder = document.getElementById('hidden-loder')
    hiddenLoder.classList.remove('hidden')
    setTimeout(()=>{
        const hiddenLoder = document.getElementById('hidden-loder')
        hiddenLoder.classList.add('hidden')
  
   fachDATAWone()
    },4000)
}
// spener two
const spenarHidden = ()=>{
    const spenar = document.getElementById('spenar-hidden');
    spenar.classList.remove('hidden');
    setTimeout(()=>{
        const spenar = document.getElementById('spenar-hidden');
        spenar.classList.add('hidden');
   fachDATATwo()
    },4000)
}

lodingSpiner()
spenarHidden()