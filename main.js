// Скрипт popup для подписки
let popupBlock = document.querySelector('.popup__block'),
blockPopupClick = document.querySelector('.block__popup-click'),
popupBlockClose = document.querySelector('.popup__block-close');

blockPopupClick.addEventListener('click', function() {
    popupBlock.classList.add('popup__block_active');
});

popupBlockClose.addEventListener('click', function() {
    popupBlock.classList.remove('popup__block_active');
});
// Скрипт popup для подписки end