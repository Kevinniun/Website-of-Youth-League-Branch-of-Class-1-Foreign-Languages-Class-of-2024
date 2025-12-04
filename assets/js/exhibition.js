// ========== 节点定义 ==========
const nodes = {
  5382: { img: "assets/images/exhibit/IMG_5382.jpg", next: 5383 },
  5383: {img: "assets/images/exhibit/IMG_5383.jpg",next: 5384, back: 5382},
  5384: { img: "assets/images/exhibit/IMG_5384.jpg", back: 5382, next: 5386},
  5386: { img: "assets/images/exhibit/IMG_5386.jpg", back: 5384, right: 5387},
  5387: { img: "assets/images/exhibit/IMG_5387.jpg", left: 5386, right: 5388},
  5388: { img: "assets/images/exhibit/IMG_5388.jpg", left: 5387, next: 5389},
  5389: { img: "assets/images/exhibit/IMG_5389.jpg", back: 5388, left: 5390, right: 5391, next: 5397,
    gallery: [
      "assets/images/exhibit/IMG_5392.jpg",
      "assets/images/exhibit/IMG_5393.jpg",
      "assets/images/exhibit/IMG_5395.jpg",
    ]
  },
  5391: { img: "assets/images/exhibit/IMG_5391.jpg", left: 5389, next: 5394},
  5394: { img: "assets/images/exhibit/IMG_5394.jpg", back: 5391},

  5390: { img: "assets/images/exhibit/IMG_5390.jpg", right: 5389, next: 5398},
  5397: { img: "assets/images/exhibit/IMG_5397.jpg", back: 5389},
  5398: { img: "assets/images/exhibit/IMG_5398.jpg", back: 5390, left: 5399},
  5399: { img: "assets/images/exhibit/IMG_5399.jpg", right: 5398, next: 5400},
  5400: { img: "assets/images/exhibit/IMG_5400.jpg", right: 5401, back: 5399},
  5401: { img: "assets/images/exhibit/IMG_5401.jpg", right: 5402, left: 5400},
  5402: { img: "assets/images/exhibit/IMG_5402.jpg", right: 5404, left: 5401, next: 5406},
  5404: { img: "assets/images/exhibit/IMG_5404.jpg", right: 5405, left: 5402},
  5405: { img: "assets/images/exhibit/IMG_5405.jpg", left: 5404},
  5406: { img: "assets/images/exhibit/IMG_5406.jpg", back: 5402, left: 5411, next: 5412,
    gallery: [
      "assets/images/exhibit/IMG_5407.jpg",
      "assets/images/exhibit/IMG_5408.jpg",
      "assets/images/exhibit/IMG_5409.jpg",
    ]
  },
  5411: { img: "assets/images/exhibit/IMG_5411.jpg", right: 5406},
  5412: { img: "assets/images/exhibit/IMG_5412.jpg", back: 5406, next: 5413},
  5413: { img: "assets/images/exhibit/IMG_5413.jpg", back: 5412, right: 5414},
  5414: { img: "assets/images/exhibit/IMG_5414.jpg", right: 5417, left: 5413,
    gallery: [
      "assets/images/exhibit/IMG_5415.jpg",
      "assets/images/exhibit/IMG_5416.jpg",
    ]
  },
  5417: { img: "assets/images/exhibit/IMG_5417.jpg", right: 5418, left: 5414,
    gallery: [
      "assets/images/exhibit/IMG_5422.jpg",
      "assets/images/exhibit/IMG_5424.jpg",
      "assets/images/exhibit/IMG_5426.jpg",
      "assets/images/exhibit/IMG_5429.jpg",
      "assets/images/exhibit/IMG_5432.jpg",
    ]
  },
  5418: { img: "assets/images/exhibit/IMG_5418.jpg", left: 5417, right: 5419},
  5419: { img: "assets/images/exhibit/IMG_5419.jpg", left: 5418, right: 5423},
  5423: { img: "assets/images/exhibit/IMG_5423.jpg", left: 5419, right: 5425},
  5425: { img: "assets/images/exhibit/IMG_5425.jpg", left: 5423, right: 5427},
  5427: { img: "assets/images/exhibit/IMG_5427.jpg", left: 5425, right: 5430},
  5430: { img: "assets/images/exhibit/IMG_5430.jpg", left: 5427, right: 5433},
  5433: { img: "assets/images/exhibit/IMG_5433.jpg", left: 5430, right: 5434, next: 5437},
  5434: { img: "assets/images/exhibit/IMG_5434.jpg", left: 5433,
    gallery: [
      "assets/images/exhibit/IMG_5435.jpg",
      "assets/images/exhibit/IMG_5436.jpg",
    ]
  },
  5437: { img: "assets/images/exhibit/IMG_5437.jpg", back: 5433, next: 5439},
  5439: { img: "assets/images/exhibit/IMG_5439.jpg", back: 5437, next: 5446, right: 5441},
  5441: { img: "assets/images/exhibit/IMG_5441.jpg", left: 5439,
    gallery: [
      "assets/images/exhibit/IMG_5442.jpg",
      "assets/images/exhibit/IMG_5443.jpg",
      "assets/images/exhibit/IMG_5444.jpg",
    ]
  },
  5446: { img: "assets/images/exhibit/IMG_5446.jpg", back: 5439, next: 5452, right: 5447},
  5447: { img: "assets/images/exhibit/IMG_5447.jpg", left: 5446,
    gallery: [
      "assets/images/exhibit/IMG_5448.jpg",
      "assets/images/exhibit/IMG_5449.jpg",
      "assets/images/exhibit/IMG_5450.jpg",
    ]
  },
  5452: { img: "assets/images/exhibit/IMG_5452.jpg", left: 5453, next: 5454, back: 5446},
  5453: { img: "assets/images/exhibit/IMG_5453.jpg", right: 5452},
  5454: { img: "assets/images/exhibit/IMG_5454.jpg", back: 5452, right: 5455},
  5455: { img: "assets/images/exhibit/IMG_5455.jpg", left: 5454, right: 5457,
    gallery: [
      "assets/images/exhibit/IMG_5456.jpg",
    ]
  },
  5457: { img: "assets/images/exhibit/IMG_5457.jpg", left: 5455, right: 5458},
  5458: { img: "assets/images/exhibit/IMG_5458.jpg", back: 5459, left: 5457},
  5459: { img: "assets/images/exhibit/IMG_5459.jpg", back: 5460, right: 5462, next: 5458, left: 5467},
  5460: { img: "assets/images/exhibit/IMG_5460.jpg", back: 5461, next: 5459},
  5461: { img: "assets/images/exhibit/IMG_5461.jpg", next: 5460},
  5462: { img: "assets/images/exhibit/IMG_5462.jpg", left: 5459, right: 5463},
  5463: { img: "assets/images/exhibit/IMG_5463.jpg", left: 5462,
    gallery: [
      "assets/images/exhibit/IMG_5464.jpg",
      "assets/images/exhibit/IMG_5465.jpg",
      "assets/images/exhibit/IMG_5466.jpg",
    ]
  },
  5467: { img: "assets/images/exhibit/IMG_5467.jpg", left: 5468, right: 5459},
  5468: { img: "assets/images/exhibit/IMG_5468.jpg", right: 5467},
};

// 当前节点
let current = 5382;
const img = document.getElementById("exhibit-img");

// 四向按钮
const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

// 展品按钮 & Overlay
const btnGallery = document.getElementById("btn-gallery");
const galleryOverlay = document.getElementById("gallery-overlay");
const galleryImages = document.getElementById("gallery-images");
const closeGallery = document.getElementById("close-gallery");

// ========== 切换主节点 ==========
function goToNode(targetId) {
  if (!nodes[targetId]) return;
  current = targetId;
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = nodes[current].img;
    img.style.opacity = 1;
    updateButtons();
  }, 400);
}

// ========== 更新按钮显示状态 ==========
function updateButtons() {
  btnNext.style.display = nodes[current].next ? "block" : "none";
  btnBack.style.display = nodes[current].back ? "block" : "none";
  btnLeft.style.display = nodes[current].left ? "block" : "none";
  btnRight.style.display = nodes[current].right ? "block" : "none";
  btnGallery.style.display = nodes[current].gallery ? "block" : "none";

  if (current === 5382) {
    btnNext.textContent = "开始云参观";
    btnNext.classList.add("start-btn");
  } else {
    btnNext.textContent = "↑";
    btnNext.classList.remove("start-btn");
  }
}

// ========== 展品一览逻辑 ==========
btnGallery.addEventListener("click", () => {
  const galleryList = nodes[current].gallery;
  if (!galleryList) return;

  // 清空旧内容
  galleryImages.innerHTML = "";

  // 生成图片缩略图
  galleryList.forEach(src => {
    const imgEl = document.createElement("img");
    imgEl.src = src;
    galleryImages.appendChild(imgEl);
  });

  // 显示 overlay
  galleryOverlay.style.display = "flex";
});

// 关闭展品一览
closeGallery.addEventListener("click", () => {
  galleryOverlay.style.display = "none";
});

// ========== 四向移动绑定 ==========
btnNext.addEventListener("click", () => goToNode(nodes[current].next));
btnBack.addEventListener("click", () => goToNode(nodes[current].back));
btnLeft.addEventListener("click", () => goToNode(nodes[current].left));
btnRight.addEventListener("click", () => goToNode(nodes[current].right));

// 初始化
updateButtons();

// ========== 点击展品放大功能 ==========

// 获取放大层元素
const imageZoom = document.getElementById("image-zoom");
const zoomedImg = document.getElementById("zoomed-img");

// 在展示展品一览时，为每个缩略图绑定点击事件
btnGallery.addEventListener("click", () => {
  const galleryList = nodes[current].gallery;
  if (!galleryList) return;

  galleryImages.innerHTML = "";

  galleryList.forEach(src => {
    const imgEl = document.createElement("img");
    imgEl.src = src;

    // ✅ 点击缩略图 → 打开放大层
    imgEl.addEventListener("click", () => {
      zoomedImg.src = src;
      imageZoom.style.display = "flex";
    });

    galleryImages.appendChild(imgEl);
  });

  galleryOverlay.style.display = "flex";
});

// 点击放大层任意处 → 关闭
imageZoom.addEventListener("click", () => {
  imageZoom.style.display = "none";
});

// // ===========================
// // 语音导览 - 四种语言播放
// // ===========================

// const audioBtn = document.getElementById("btn-audio");
// const audioOverlay = document.getElementById("audio-overlay");
// const closeAudio = document.getElementById("close-audio");
// const audioOptions = document.querySelectorAll(".audio-option");
// const guidePlayer = document.getElementById("guide-player");

// // 打开面板
// audioBtn.addEventListener("click", () => {
//   audioOverlay.style.display = "flex";
// });

// // 关闭面板
// closeAudio.addEventListener("click", () => {
//   guidePlayer.pause();
//   audioOverlay.style.display = "none";
// });

// // 点击选择语言
// audioOptions.forEach(option => {
//   option.addEventListener("click", () => {
//     const file = option.dataset.audio;
//     guidePlayer.src = `assets/sounds/${file}`;
//     guidePlayer.play();
//   });
// });

// ===========================
// 语音导览系统
// ===========================

const audioBtn = document.getElementById("btn-audio");
const audioOverlay = document.getElementById("audio-overlay");
const closeAudio = document.getElementById("close-audio");
const audioOptions = document.querySelectorAll(".audio-option");
const guidePlayer = document.getElementById("guide-player");

// 打开语音菜单（不影响播放）
audioBtn.addEventListener("click", () => {
  audioOverlay.style.display = "flex";
});

// 关闭语音菜单（不停止播放）
closeAudio.addEventListener("click", () => {
  audioOverlay.style.display = "none";
});

// 点击语言播放语音
audioOptions.forEach(option => {
  option.addEventListener("click", () => {
    const file = option.dataset.audio;
    const path = `assets/sounds/${file}`;

    // 如果选择相同语言，不重新加载音频
    if (guidePlayer.src.endsWith(file)) {
      if (guidePlayer.paused) guidePlayer.play();
      return;
    }

    // 切换音频
    guidePlayer.src = path;
    guidePlayer.play();
  });
});
