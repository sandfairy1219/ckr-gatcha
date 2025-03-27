// 기본 페이지 설정 및 다른 스크립트와의 통합을 위한 파일
console.log('뽑기 시스템이 준비되었습니다.');

// 페이지 로딩 시간 측정
document.addEventListener('DOMContentLoaded', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                     window.performance.timing.navigationStart;
    console.log(`페이지 로딩 시간: ${loadTime}ms`);
});