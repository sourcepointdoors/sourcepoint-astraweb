(() => {
  const story = document.querySelector('.element-story');
  if (!story) return;
  const video = document.querySelector('#element-orbit');
  const chapters = [...document.querySelectorAll('.element-chapter')];
  const toggle = document.querySelector('#element-motion');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const bar = document.querySelector('.element-progress span');
  let paused = reduced.matches,
    target = 0,
    queued = false;
  const clamp = (x) => Math.max(0, Math.min(1, x));
  const seek = () => {
    if (
      !video ||
      paused ||
      video.readyState < 1 ||
      video.seeking ||
      !Number.isFinite(video.duration)
    )
      return;
    const time = target * Math.max(0, video.duration - 0.06);
    if (Math.abs(video.currentTime - time) > 0.035) {
      try {
        video.currentTime = time;
      } catch {}
    }
  };
  function update() {
    queued = false;
    const rect = story.getBoundingClientRect();
    target = clamp(-rect.top / Math.max(1, rect.height - innerHeight));
    bar.style.width = `${target * 100}%`;
    const focus = innerWidth <= 760 ? innerHeight * 0.72 : innerHeight * 0.5;
    let active = 0,
      dist = Infinity;
    chapters.forEach((ch, i) => {
      const r = ch.getBoundingClientRect(),
        d = Math.abs(r.top + r.height / 2 - focus);
      if (d < dist) {
        dist = d;
        active = i;
      }
    });
    document.querySelector('#element-counter').textContent = `0${active + 1} / 06`;
    seek();
  }
  function queue() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }
  if (video) {
    video.addEventListener('loadeddata', () => {
      video.classList.add('ready');
      queue();
    });
    video.addEventListener('loadedmetadata', queue);
    video.addEventListener('seeked', seek);
    video.addEventListener('error', () => {
      video.classList.remove('ready');
      toggle.hidden = true;
      document.querySelector('#element-scroll-hint').textContent = 'Explore the details below';
    });
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          video.preload = 'auto';
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: '300px' },
    );
    if (!reduced.matches) observer.observe(story);
  } else toggle.hidden = true;
  function setPause(value) {
    paused = value;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume rotation' : 'Pause rotation';
    document.querySelector('#element-scroll-hint').textContent = paused
      ? 'Rotation paused'
      : 'Scroll to rotate';
    queue();
  }
  toggle.addEventListener('click', () => setPause(!paused));
  reduced.addEventListener('change', () => setPause(reduced.matches));
  setPause(paused);
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  queue();
  const select = document.querySelector('#element-height');
  document.querySelector('.element-size-controls').style.display = 'flex';
  const sizes = () =>
    document.querySelectorAll('.selected-height').forEach((el) => (el.textContent = select.value));
  select.addEventListener('change', sizes);
  sizes();
})();
