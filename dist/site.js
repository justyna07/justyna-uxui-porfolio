(function(){
  var btn=document.getElementById('copyEmail');
  if(btn){btn.addEventListener('click',function(){
    var email=btn.getAttribute('data-email');
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(email).then(function(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy email'},1800)})}
  })}
})();
