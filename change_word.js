function f(n){
    let cs = n.childNodes;
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace(/神戸/g, "KOBE ");
        c.textContent = c.textContent.replace(/大学/g, "UNIVERSITY ");
      }
      else{
        f(c);
      }
    }
  }
  
  f(document.body); // document.body は HTML の文章全体を示す要素