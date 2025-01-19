const toast = document.getElementById("toastPopup");
let isToastShown = false;
copyLinkButton = document.getElementById("copyLinkButton");
copyLinkButton.addEventListener('click', function() {
    // var copyText = document.getElementById("textToCopy");
    var copyText = "www.naver.com";
    // Clipboard API 사용하여 클립보드에 복사
    navigator.clipboard.writeText(copyText).then(function() {
        if (isToastShown) return;
        isToastShown = true;
        toast.classList.add("show");
        setTimeout(function () {
            toast.classList.remove("show");
            isToastShown = false;
        }, 2280);
    }).catch(function(err) {
        console.error('복사 실패:', err);
    });
});