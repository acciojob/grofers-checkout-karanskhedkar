  const getSumBtn = document.createElement("button");
  getSumBtn.append("Get Total Price");
  document.body.appendChild(getSumBtn);

  const getSum = () => {
  //Add your code here
      const ans=document.getElementById("ans");
      if(ans){
        return;
      } 
      const priceList=document.querySelectorAll(".price");
      let total=0;
      for(let i=0;i<priceList.length;i++){
          total+=Number(priceList[i].innerHTML)
      }
      const lastElemet=document.createElement("tr");
      lastElemet.innerHTML=`
          <td colspan="2" id="ans">${total}</td>`
      document.getElementsByTagName("tbody")[0].appendChild(lastElemet);
  };

  getSumBtn.addEventListener("click", getSum);