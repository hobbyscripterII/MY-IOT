$(document).ready(function() {
	changeNavActive();  // 클릭 메뉴 강조 효과
	subNavClickEvent(); // sub-nav 클릭 시 a 태그 트리거
});


// sub-nav 클릭 시 a 태그 트리거 이벤트
function subNavClickEvent() {
	$(document).on('click', '.sub-nav', function() {
		window.location = $(this).find('a').attr('href');
	})
}

// 클릭 메뉴 강조 효과 이벤트
function changeNavActive() {
	const currentPath = window.location.pathname;
    const subPlantEl  = $('.sub-nav');
	
    subPlantEl.each((idx, el) => {
		const elHref = $(el).find('a').attr('href');

        // 기존 active 효과 제거
        $(el).removeClass('active');
		
        if(currentPath == elHref) {
            $(el).addClass('active');
        }
    });
}