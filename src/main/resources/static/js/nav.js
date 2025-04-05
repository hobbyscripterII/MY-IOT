$(document).ready(function() {
	const toggle     = $('#toggle');
	let toggleTextEl = $('.toggle-wrap p');
	
	changeNavActive();  // 클릭 메뉴 강조 효과
	subNavClickEvent(); // sub-nav 클릭 시 a 태그 트리거
	
	// 토글 기본 세팅
	toggleTextEl.css('color', 'red');
	toggleTextEl.html('토글 활성화');
	
	// 토글
	toggle.click(function() {
	    let navbar = $('.navbar-wrap');
		
		if (navbar.is(':visible')) {
			toggle.attr('src', '/img/img-btn-toggle-2.png');
			toggleTextEl.css('color', 'darkgray');
			toggleTextEl.html('토글 비활성화');
		} else {
			toggle.attr('src', '/img/img-btn-toggle-1.png');
			toggleTextEl.css('color', 'red');
			toggleTextEl.html('토글 활성화');
		}

	    navbar.toggle();
	});
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