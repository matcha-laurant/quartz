---
title: 欢迎光临Somnia。
---
这个应该是wiki的首页。  
不知道写啥，大概就是锐意建设中吧！  

左上角的三条杠可以访问目前唯一的一条没用的内容。（立绘切换如果有延迟可以告诉我orz）  
或者点击[[一个测试|这里]]。  
点击logo可以回到这一页。  

### 连接似是而非世界之信箱

<div id="mailbox-container" style="width: 100%; margin: 20px 0;">
<form id="elegant-form" action="https://formsubmit.co/matchalaurant@gmail.com" method="POST" style="display: block;">
<input type="hidden" name="_captcha" value="false">
<input type="text" name="_honey" style="display:none">
<textarea id="msg-text" name="message" placeholder="把梦境、愿望与思绪投递到这里的话......" rows="3" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; font-family: inherit; resize: vertical; box-sizing: border-box;"></textarea>
<button type="submit" id="msg-btn" style="width: 100%; margin-top: 8px; padding: 10px 24px; background: rgba(166, 255, 204, 0.3); color: #333333; border: none; border-radius: 4px; font-size: 15px; font-weight: 1000; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(166, 255, 204, 0.5)'" onmouseout="this.style.background='rgba(166, 255, 204, 0.3)'">投递</button>
</form>
<div id="success-msg" style="display: none; text-align: center; padding: 40px 0; color: #666; font-style: italic;">已投递。祝愿您因此获得一场特别的梦境。</div>
<script>
document.getElementById('elegant-form').onsubmit = function(e) {
  e.preventDefault();
  var f = this, b = document.getElementById('msg-btn'), s = document.getElementById('success-msg');
  b.innerText = '正在投递...'; b.disabled = true;
  fetch(f.action, { method: 'POST', body: new FormData(f), headers: { 'Accept': 'application/json' } })
  .then(function(r) { if (r.ok) { f.style.display = 'none'; s.style.display = 'block'; } else { b.innerText = '错误，请重试'; b.disabled = false; } })
  .catch(function() { b.innerText = '网络错误'; b.disabled = false; });
  return false;
};
</script>
</div>


