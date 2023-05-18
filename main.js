function showData(
    btnSubscribe,
    Box,
    itemBox
)
{
    const btnAdd = document.querySelector(btnSubscribe);
    const container = document.querySelector(Box);
    const itemContainer = document.querySelector(itemBox);

    container.classList.add('box-model');
    itemContainer.classList.add('item-box-model');
    btnAdd.addEventListener('click' , () => {
        container.style.display = "flex"
    })
    itemContainer.innerHTML += "<span class = 'close-btn'>&times;</span>";
    const closeBtn = itemContainer.querySelector('.close-btn');
    closeBtn.addEventListener("click" , () => {
        container.style.display = "none";
    }) 
    container.addEventListener("click" , (event) => {
        if(event.target === container){
            container.style.display = "none"
        }
    })
}