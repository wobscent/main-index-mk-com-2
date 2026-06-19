(function() {
    'use strict';

    var config = {
        siteUrl: 'https://main-index-mk.com',
        keyword: 'mk体育',
        projectName: 'Main Index MK',
        version: '1.2.0'
    };

    var hintCard = document.createElement('div');
    hintCard.className = 'site-hint-card';
    hintCard.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;background:#2d3748;color:#edf2f7;padding:16px 20px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);font-family:Arial,sans-serif;max-width:280px;font-size:14px;line-height:1.5;transition:opacity 0.3s;border:1px solid #4a5568;';

    var closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'float:right;cursor:pointer;font-size:18px;margin:-4px -4px 0 0;color:#a0aec0;';
    closeBtn.addEventListener('click', function() {
        hintCard.style.opacity = '0';
        setTimeout(function() { hintCard.style.display = 'none'; }, 300);
    });
    hintCard.appendChild(closeBtn);

    var title = document.createElement('div');
    title.textContent = '📌 ' + config.projectName;
    title.style.cssText = 'font-weight:bold;margin-bottom:8px;color:#63b3ed;font-size:16px;';
    hintCard.appendChild(title);

    var desc = document.createElement('div');
    desc.textContent = '欢迎使用「' + config.keyword + 」专题服务。当前版本 ' + config.version + '。';
    desc.style.cssText = 'margin-bottom:10px;color:#e2e8f0;';
    hintCard.appendChild(desc);

    var link = document.createElement('a');
    link.href = config.siteUrl;
    link.textContent = '🔗 访问主站';
    link.target = '_blank';
    link.style.cssText = 'display:inline-block;background:#3182ce;color:white;padding:6px 14px;border-radius:6px;text-decoration:none;font-weight:600;font-size:13px;margin-top:4px;';
    hintCard.appendChild(link);

    var badgeWrap = document.createElement('div');
    badgeWrap.style.cssText = 'margin-top:12px;display:flex;flex-wrap:wrap;gap:6px;';

    var badges = [config.keyword, '热门', '首页', '指南'];
    for (var i = 0; i < badges.length; i++) {
        var badge = document.createElement('span');
        badge.textContent = badges[i];
        badge.style.cssText = 'background:#4a5568;color:#e2e8f0;padding:2px 8px;border-radius:10px;font-size:11px;border:1px solid #5a6a7a;';
        badgeWrap.appendChild(badge);
    }
    hintCard.appendChild(badgeWrap);

    var accessInfo = document.createElement('div');
    accessInfo.style.cssText = 'margin-top:10px;font-size:12px;color:#a0aec0;border-top:1px solid #4a5568;padding-top:8px;';
    accessInfo.textContent = '💡 提示：页面加载完成自动显示，可点击右上角关闭。部分功能需连接主站。';
    hintCard.appendChild(accessInfo);

    document.body.appendChild(hintCard);

    setTimeout(function() {
        var style = document.createElement('style');
        style.textContent = '.site-hint-card:hover{box-shadow:0 6px 28px rgba(0,0,0,0.4);}';
        document.head.appendChild(style);
    }, 0);
})();