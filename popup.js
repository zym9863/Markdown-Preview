document.addEventListener('DOMContentLoaded', function() {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');

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
        } catch (error) {
            console.error('Markdown转换错误：', error);
            htmlOutput.innerHTML = '<p style="color: red;">转换出错：' + error.message + '</p>';
        }
    }

    // 监听输入事件，使用防抖优化性能
    let debounceTimer;
    markdownInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(convertMarkdown, 300);
    });

    // 初始转换
    convertMarkdown();
});