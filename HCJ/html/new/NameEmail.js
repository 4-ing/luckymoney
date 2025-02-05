document.addEventListener("DOMContentLoaded", function() {
    const checkAll = document.getElementById("check-all");
    const checkboxes = document.querySelectorAll(".agreement");

    // "전체 동의" 클릭 시 모든 체크박스 선택/해제
    checkAll.addEventListener("change", function() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = checkAll.checked;
        });
    });

    // 개별 체크박스가 변경될 때 "전체 동의" 상태 업데이트
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const allChecked = [...checkboxes].every(cb => cb.checked);
            checkAll.checked = allChecked;
        });
    });

    // 폼 제출 이벤트
    document.getElementById("pouch-form").addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 제출 방지
        
        // 필수 체크박스 확인
        const ageCheck = document.getElementById("age-check").checked;
        const termsCheck = document.getElementById("terms-check").checked;
        const privacyCheck = document.getElementById("privacy-check").checked;

        if (!ageCheck || !termsCheck || !privacyCheck) {
            alert("필수 약관에 동의해야 합니다.");
            return;
        }

        alert("복주머니 이름이 설정되었습니다!");
        window.location.href = "next_page.html"; // 다음 페이지로 이동 (추후 연결)
    });
});
