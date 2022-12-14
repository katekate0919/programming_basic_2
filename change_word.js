function f(n){
    // childNodesは配列のように扱うことができる
    let cs = n.childNodes;
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace(/です。/g, "です。覚えときや。");
        c.textContent = c.textContent.replace(/しょう。/g, "しょう。読むだけじゃなくて手動かしや～。");
        c.textContent = c.textContent.replace(/\(\d\)/g, "★");
      }
      else{
        f(c);
      }
    }
  }
  
  f(document.body); // document.body は HTML の文章全体を示す要素