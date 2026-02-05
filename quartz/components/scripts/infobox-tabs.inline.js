// Infobox Tab 切换功能
document.addEventListener('nav', () => {
  // 初始化所有 tab
  initInfoboxTabs();
});

function initInfoboxTabs() {
  // 找到所有 tab 容器
  const tabContainers = document.querySelectorAll('.infobox-tabs');
  
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.infobox-tab-button');
    const contents = container.querySelectorAll('.infobox-tab-content');
    
    // 默认激活第一个 tab
    if (buttons.length > 0 && contents.length > 0) {
      buttons[0].classList.add('active');
      contents[0].classList.add('active');
    }
    
    // 为每个按钮添加点击事件
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // 移除所有 active 状态
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // 激活当前点击的 tab
        button.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  });
}

// 页面加载时也初始化一次
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInfoboxTabs);
} else {
  initInfoboxTabs();
}