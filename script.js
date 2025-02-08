function savePost() {
    let content = document.getElementById('blog-content').value;
    let imageFile = document.getElementById('upload-image').files[0];
    let videoFile = document.getElementById('upload-video').files[0];

    if (!content) {
        alert("文章内容不能为空！");
        return;
    }

    let post = {
        content: content,
        image: imageFile ? URL.createObjectURL(imageFile) : null,
        video: videoFile ? URL.createObjectURL(videoFile) : null,
        date: new Date().toLocaleString()
    };

    localStorage.setItem("blogPost", JSON.stringify(post));
    alert("文章已保存！（仅本地存储）");

    // 显示文章
    displayPost();
}

function displayPost() {
    let savedPost = JSON.parse(localStorage.getItem("blogPost"));
    if (savedPost) {
        let blogList = document.getElementById('blog-list');
        let newPost = document.createElement('li');
        newPost.innerHTML = `<a href="blog.html?post=local">${savedPost.content} - ${savedPost.date}</a>`;
        blogList.appendChild(newPost);
    }
}

// 页面加载时显示已有文章
window.onload = displayPost;