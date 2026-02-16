---
title: 欢迎光临Somnia。
---
这个应该是wiki的首页。  
不知道写啥，大概就是锐意建设中吧！  

左上角的三条杠可以访问目前唯一的一条没用的内容。（立绘切换如果有延迟可以告诉我orz）  
或者点击[[一个测试|这里]]。  
点击logo可以回到这一页。  

### 连接似是而非世界之信箱

<form id="my-message-box" action="https://formsubmit.co/2559912317@qq.com" method="POST" style="width: 100%; max-width: 100%; margin: 20px 0; display: block;">
  <input type="hidden" name="_captcha" value="false">
  <input type="text" name="_honey" style="display:none">
  
  <textarea id="msg-content" name="message" placeholder="把梦境、愿望与思绪投递到这里的话......" rows="3" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; font-family: inherit; resize: vertical; box-sizing: border-box;"></textarea>

  <button type="submit" id="submit-btn" style="width: 100%; margin-top: 8px; padding: 10px 24px; background: rgba(166, 255, 204, 0.3); color: #333333; border: none; border-radius: 4px; font-size: 15px; font-weight: 1000; cursor: pointer; transition: background 0.3s;" onmouseover="this.style.background='rgba(166, 255, 204, 0.5)'" onmouseout="this.style.background='rgba(166, 255, 204, 0.3)'">投递</button>
</form>

<script>
document.getElementById('my-message-box').addEventListener('submit', function(e) {
  e.preventDefault(); // 阻止原生的跳转
  
  const btn = document.getElementById('submit-btn');
  const textarea = document.getElementById('msg-content');
  const originalText = btn.innerText;
  
  btn.innerText = '投递中...';
  btn.disabled = true;

  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert('投递成功！');
      textarea.value = ''; // 清空输入框
    } else {
      alert('投递失败，请稍后再试。');
    }
  })
  .catch(error => alert('发生错误：' + error))
  .finally(() => {
    btn.innerText = originalText;
    btn.disabled = false;
  });
});
</script>


