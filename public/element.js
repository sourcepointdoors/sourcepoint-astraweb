(() => {
  const story = document.querySelector('.element-story');
  if (!story) return;

  const MOBILE_BREAKPOINT = 760;
  const MOBILE_FOCUS_RATIO = 0.72;
  const DESKTOP_FOCUS_RATIO = 0.5;
  const VIDEO_END_PADDING_SECONDS = 0.06;
  const SEEK_TOLERANCE_SECONDS = 0.035;
  const VIDEO_PRELOAD_MARGIN = '300px';
  const CHAPTER_TOTAL_LABEL = '06';

  const video = document.querySelector('#element-orbit');
  const chapters = [...document.querySelectorAll('.element-chapter')];
  const toggle = document.querySelector('#element-motion');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const bar = document.querySelector('.element-progress span');
  const counter = document.querySelector('#element-counter');
  const scrollHint = document.querySelector('#element-scroll-hint');
  const heightSelect = document.querySelector('#element-height');
  const sizeControls = document.querySelector('.element-size-controls');
  const heightCells = document.querySelectorAll('.selected-height');

  let paused = reduced.matches;
  let target = 0;
  let queued = false;

  const clamp = (value) => Math.max(0, Math.min(1, value));

  function seek() {
    if (
      !video ||
      paused ||
      video.readyState < 1 ||
      video.seeking ||
      !Number.isFinite(video.duration)
    )
      return;

    const time = target * Math.max(0, video.duration - VIDEO_END_PADDING_SECONDS);
    if (Math.abs(video.currentTime - time) > SEEK_TOLERANCE_SECONDS) {
      try {
        video.currentTime = time;
      } catch {
        // Preserve the existing fallback: retry on a subsequent update or seek event.
      }
    }
  }

  function findActiveChapter(focus) {
    let active = 0;
    let closestDistance = Infinity;
    chapters.forEach((chapter, index) => {
      const rect = chapter.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - focus);
      if (distance < closestDistance) {
        closestDistance = distance;
        active = index;
      }
    });
    return active;
  }

  function update() {
    queued = false;
    const rect = story.getBoundingClientRect();
    target = clamp(-rect.top / Math.max(1, rect.height - innerHeight));
    bar.style.width = `${target * 100}%`;
    const focusRatio = innerWidth <= MOBILE_BREAKPOINT ? MOBILE_FOCUS_RATIO : DESKTOP_FOCUS_RATIO;
    const active = findActiveChapter(innerHeight * focusRatio);
    counter.textContent = `0${active + 1} / ${CHAPTER_TOTAL_LABEL}`;
    seek();
  }

  function queue() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }

  function handleVideoLoaded() {
    video.classList.add('ready');
    queue();
  }

  function handleVideoError() {
    video.classList.remove('ready');
    toggle.hidden = true;
    scrollHint.textContent = 'Explore the details below';
  }

  function initializeVideo() {
    if (!video) {
      toggle.hidden = true;
      return;
    }
    video.addEventListener('loadeddata', handleVideoLoaded);
    video.addEventListener('loadedmetadata', queue);
    video.addEventListener('seeked', seek);
    video.addEventListener('error', handleVideoError);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          video.preload = 'auto';
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: VIDEO_PRELOAD_MARGIN },
    );
    if (!reduced.matches) observer.observe(story);
  }

  function setPause(value) {
    paused = value;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume rotation' : 'Pause rotation';
    scrollHint.textContent = paused ? 'Rotation paused' : 'Scroll to rotate';
    queue();
  }

  function updateSizes() {
    heightCells.forEach((cell) => (cell.textContent = heightSelect.value));
  }

  function initializeSizes() {
    sizeControls.style.display = 'flex';
    heightSelect.addEventListener('change', updateSizes);
    updateSizes();
  }

  function initializeMotion() {
    initializeVideo();
    toggle.addEventListener('click', () => setPause(!paused));
    reduced.addEventListener('change', () => setPause(reduced.matches));
    setPause(paused);
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
    queue();
  }

  initializeMotion();
  initializeSizes();
})();
