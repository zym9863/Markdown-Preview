document.addEventListener('DOMContentLoaded', function() {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');

    // 检查marked库是否正确加载
    if (typeof marked === 'undefined') {
        console.error('Marked库未正确加载！');
        return;
    }

    // 设置marked选项，启用GFM（GitHub Flavored Markdown）
    marked.setOptions({
        gfm: true,
        breaks: true,
        sanitize: false,  // 允许HTML标签
        headerIds: true,  // 为标题添加id
        mangle: false,    // 不转义内联HTML
        pedantic: false,  // 尽可能兼容GitHub风格
    });

    // 实时转换函数
    function convertMarkdown() {
        try {
            const markdownText = markdownInput.value;
            const htmlContent = marked.parse(markdownText);
            htmlOutput.innerHTML = htmlContent;
            
            // 添加转换完成的视觉反馈
            htmlOutput.style.opacity = '0.8';
            setTimeout(() => {
                htmlOutput.style.opacity = '1';
            }, 100);
        } catch (error) {
            console.error('Markdown转换错误：', error);
            htmlOutput.innerHTML = '<p style="color: var(--accent-pink);">转换出错：' + error.message + '</p>';
        }
    }

    // 清空功能
    clearBtn.addEventListener('click', function() {
        markdownInput.value = '';
        htmlOutput.innerHTML = '';
        markdownInput.focus();
        
        // 添加清空动画
        markdownInput.style.transform = 'scale(0.98)';
        setTimeout(() => {
            markdownInput.style.transform = 'scale(1)';
        }, 150);
    });

    // 复制HTML功能
    copyBtn.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(htmlOutput.innerHTML);
            
            // 视觉反馈
            copyBtn.textContent = '✅';
            copyBtn.style.background = 'var(--accent-green)';
            
            setTimeout(() => {
                copyBtn.textContent = '📋';
                copyBtn.style.background = 'var(--bg-tertiary)';
            }, 1500);
        } catch (error) {
            console.error('复制失败：', error);
            copyBtn.textContent = '❌';
            setTimeout(() => {
                copyBtn.textContent = '📋';
            }, 1500);
        }
    });

    // 监听输入事件，使用防抖优化性能
    let debounceTimer;
    markdownInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(convertMarkdown, 300);
    });

    // 添加焦点状态管理
    markdownInput.addEventListener('focus', function() {
        document.querySelector('.editor-section .section-indicator').style.background = 'var(--accent-blue)';
    });

    markdownInput.addEventListener('blur', function() {
        document.querySelector('.editor-section .section-indicator').style.background = 'var(--accent-green)';
    });

    // 初始转换
    convertMarkdown();
});