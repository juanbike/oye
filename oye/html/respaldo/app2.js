const reqListener = response => {  
  const content = document.getElementById("content");  
  content.innerHTML = response.currentTarget.response;  
};

const loadData = () => {  
  const req = new XMLHttpRequest();  
  req.onload = reqListener;  
  //url1 = new URL('../js/data/data2.txt');
  req.open("get", "data2.txt", true);  
  req.send();  
};

window.onload = () => {  
  const loadButton = document.getElementById("load");  
  loadButton.onclick = loadData;  
};