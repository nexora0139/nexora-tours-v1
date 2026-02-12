/* ===============================
   UI + SCENE CONTROL
================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     UI APPEAR AFTER MARZIPANO
  ================================ */

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const uiRoot = document.getElementById("uiRoot");
      uiRoot.classList.replace("hidden-ui", "ui-visible");
    });
  });

  /* ===============================
     AUDIO PERMISSION SETUP
  ================================ */

  const audioModal = document.getElementById("audioModal");
  const audioYes = document.getElementById("audioYes");
  const audioNo = document.getElementById("audioNo");
  const sceneAudio = document.getElementById("sceneAudio");

  let audioEnabled = false;

  const sceneAudioMap = [
    "assets/audio/scene1.mp3",
    "assets/audio/scene2.mp3",
    "assets/audio/scene3.mp3"
  ];

  function playSceneAudio(index) {
    if (!audioEnabled) return;

    sceneAudio.pause();
    sceneAudio.currentTime = 0;
    sceneAudio.src = sceneAudioMap[index];

    sceneAudio.play().catch(() => {
      // Autoplay restriction — safe to ignore
    });
  }

  // Show audio permission modal
  audioModal.classList.remove("hidden");

  audioYes.addEventListener("click", () => {
    audioEnabled = true;
    audioModal.classList.add("hidden");
    playSceneAudio(currentSceneIndex);
  });

  audioNo.addEventListener("click", () => {
    audioEnabled = false;
    audioModal.classList.add("hidden");
  });

  /* ===============================
     SCENE SWITCH LOGIC
  ================================ */

  const sceneButton = document.getElementById("uiSceneNext");

  const sceneLabels = [
    "Next Realm",
    "Step into Luxury",
    "Explore the Estate",
    "Return to the Estate",

  ];

  let currentSceneIndex = 0;

  sceneButton.textContent = sceneLabels[0];

  sceneButton.addEventListener("click", () => {

    currentSceneIndex =
      (currentSceneIndex + 1) % window.APP.scenes.length;

    window.APP.switchScene(
      window.APP.scenes[currentSceneIndex]
    );

    playSceneAudio(currentSceneIndex);

    sceneButton.textContent =
      sceneLabels[currentSceneIndex];
  });

  /* ===============================
     MUTE / UNMUTE BUTTON
  ================================ */

  const muteButton = document.getElementById("uiMute");

  muteButton.addEventListener("click", () => {
    sceneAudio.muted = !sceneAudio.muted;

    muteButton.innerHTML = sceneAudio.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
  });

});


/* ===============================
   LUXURY MENU TOGGLE + LOGO SWAP
================================ */

const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  const isOpen = sideMenu.classList.contains("open");

  sideMenu.classList.toggle("open", !isOpen);
  menuOverlay.classList.toggle("active", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

menuOverlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});


/* ===============================
   VR / FULLSCREEN BUTTON (TEMP)
================================ */

const vrButton = document.getElementById("uiVR");

vrButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

/* ===============================
          FOR  PLOT LAYER 
================================ */

