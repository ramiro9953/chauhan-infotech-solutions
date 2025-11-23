
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Sticky navbar
const nav = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{ if(window.scrollY>80) nav.classList.add('sticky'); else nav.classList.remove('sticky'); });

// Simple cart
function loadCart(){ return JSON.parse(localStorage.getItem('cis_cart')||'[]'); }
function saveCart(a){ localStorage.setItem('cis_cart', JSON.stringify(a)); }
function updateCartUI(){
  const list = document.getElementById('cart-items'); if(!list) return;
  list.innerHTML=''; let total=0; const arr=loadCart();
  arr.forEach((it,i)=>{ const li=document.createElement('li'); li.textContent=(i+1)+'. '+it.name+' - ₹'+it.price; list.appendChild(li); total+=Number(it.price); });
  document.getElementById('cart-total').textContent='₹'+total;
}
document.addEventListener('click', function(e){
  if(e.target && e.target.classList.contains('add-cart')){
    const id=e.target.dataset.id, name=e.target.dataset.name, price=e.target.dataset.price;
    const arr=loadCart(); arr.push({id,name,price}); saveCart(arr); updateCartUI(); alert(name+' added to cart');
  }
});

// Quick view
const quick = document.getElementById('quickview');
const qMainImg = document.getElementById('q-main-img');
const qTitle = document.getElementById('q-title');
const qPrice = document.getElementById('q-price');
const qSpecs = document.getElementById('q-specs');
const qAdd = document.getElementById('q-add');
const qWa = document.getElementById('q-wa');

document.querySelectorAll('.quickview').forEach(el=>el.style.display='none');

document.querySelectorAll('.quickview').forEach(()=>{});
document.querySelectorAll('.quickview');

document.querySelectorAll('.quickview');

document.querySelectorAll('.product-card').forEach(card=>{
  card.querySelector('.quickview')?.remove();
});

// open quickview when clicking quickview buttons
document.querySelectorAll('.quickview').forEach(()=>{});

document.querySelectorAll('.quickview');

document.querySelectorAll('.quickview');

document.querySelectorAll('.quickview');

document.querySelectorAll('.quickview');

document.querySelectorAll('.quickview');

document.querySelectorAll('.product-card .quickview');

document.querySelectorAll('.product-card .quickview');

document.querySelectorAll('.product-card').forEach(card=>{
  const qbtn = card.querySelector('.quickview, .quickview-btn') || card.querySelector('button.quickview');
  const addBtn = card.querySelector('.add-cart');
  const pid = card.dataset.id;
  const img = card.querySelector('img').src;
  const title = card.querySelector('h3').innerText;
  const price = card.querySelector('.price').innerText || card.querySelector('.price').textContent;
  if(qbtn){
    qbtn.addEventListener('click', ()=> openQuick(pid, title, price, img));
  } else {
    // fallback: attach to product image click
    card.querySelector('img').addEventListener('click', ()=> openQuick(pid, title, price, img));
  }
});

function openQuick(id, title, price, img){
  qMainImg.src = img;
  qTitle.innerText = title;
  qPrice.innerText = price;
  qSpecs.innerText = 'i5 • 8GB • 256GB SSD';
  qWa.href = 'https://wa.me/8287550904?text=I am interested in '+encodeURIComponent(title);
  qAdd.onclick = function(){
    const arr = loadCart(); arr.push({id:name,title,price:price}); saveCart(arr); updateCartUI(); alert(title + ' added to cart'); 
  };
  quick.style.display = 'block';
  setTimeout(()=> quick.classList.add('open'),20);
}

// close quickview
document.querySelector('.close-quick').addEventListener('click', closeQuick);
function closeQuick(){ quick.classList.remove('open'); setTimeout(()=> quick.style.display='none',300); }

// thumbnail click
document.querySelectorAll('.q-thumb').forEach(t=>{
  t.addEventListener('click', ()=>{ qMainImg.src = t.dataset.src; });
});

// checkout button
document.getElementById('checkout').addEventListener('click', function(){
  const arr = loadCart(); if(arr.length===0){ alert('Cart is empty'); return; }
  let msg = 'Order from CIS:%0A';
  arr.forEach((it,i)=> msg += (i+1)+'. '+it.name+' - ₹'+it.price + '%0A');
  const total = arr.reduce((s,i)=>s+Number(i.price),0);
  msg += 'Total: ₹' + total;
  window.open('https://wa.me/8287550904?text=' + msg, '_blank');
});

// init
updateCartUI();

// testimonial auto-scroll
const track = document.getElementById('testi-track');
let pos = 0;
setInterval(()=>{ if(track){ pos+=280; if(pos>track.scrollWidth-track.clientWidth) pos=0; track.scrollTo({left:pos, behavior:'smooth'}); } }, 3500);

function showLoader(){
  document.getElementById("formLoader").style.display="block";
}

/* Fade-in on scroll */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {threshold:0.2};

const appearOnScroll = new IntersectionObserver(function(entries){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
  });
}, appearOptions);

faders.forEach(f=> appearOnScroll.observe(f));
