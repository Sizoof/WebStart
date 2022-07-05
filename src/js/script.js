const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectTitle = document.querySelector('.select__title');
const selectImg = document.querySelector('.select__header img');

selectHeader.addEventListener('click', () => {
    if (selectBody.classList.contains('select__body--active')) {
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';
        selectBody.style.maxHeight = null;
    }else {
        selectImg.style.transform = 'rotate(180deg)';
        selectBody.classList.add('select__body--active');
        selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
    }
});

selectItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        selectTitle.textContent = item.textContent;
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';  
        selectBody.style.maxHeight = null;  
    })
});