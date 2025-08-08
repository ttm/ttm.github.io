/*
 * JavaScript for the Silencing the Mind playground.  
 * Handles dynamic behaviours such as adjusting the animated
 * background speed via the mental noise slider, toggling
 * between light and dark themes, running a guided breathing
 * exercise and presenting a selection of mindfulness tasks
 * within a modal with a countdown timer.  
 */

document.addEventListener('DOMContentLoaded', () => {
  /**
   * MENTAL NOISE SLIDER
   * Maps the slider value (0-100) to an animation duration
   * between 60s (very calm) and 10s (very noisy). A lower value
   * means the gradient moves slowly, evoking stillness. A higher
   * value speeds up the gradient to reflect mental turbulence.
   */
  const noiseSlider = document.getElementById('noiseSlider');
  const updateAnimationSpeed = () => {
    const value = parseInt(noiseSlider.value, 10);
    // Map 0 → 60s, 100 → 10s linearly
    const speed = 60 - value * 0.5;
    document.documentElement.style.setProperty('--animation-speed', `${speed}s`);
  };
  noiseSlider.addEventListener('input', updateAnimationSpeed);
  // initialise on load
  updateAnimationSpeed();

  /**
   * THEME TOGGLE
   * Persists user preference in localStorage. If the saved theme
   * is dark, we set the data-theme attribute on the root element
   * and check the toggle. Otherwise we default to light.
   */
  const themeToggle = document.getElementById('themeToggle');
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mindTheme', theme);
  };
  // initial theme from localStorage
  const savedTheme = localStorage.getItem('mindTheme') || 'light';
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
  }
  applyTheme(savedTheme);
  themeToggle.addEventListener('change', () => {
    applyTheme(themeToggle.checked ? 'dark' : 'light');
  });

  /**
   * GUIDED BREATHING EXERCISE
   * Cycles through four phases: inhale, hold, exhale, hold. Each
   * phase has a duration (ms) and target scale for the circle. We
   * use setTimeout to sequence phases. The cycle repeats until
   * stopped. The Start button becomes disabled while running and
   * the Stop button is enabled. On stop we clear pending timeouts
   * and reset the circle and instructions.
   */
  const breathingCircle = document.getElementById('breathing-circle');
  const breathingInstructions = document.getElementById('breathing-instructions');
  const startBtn = document.getElementById('breathingStart');
  const stopBtn = document.getElementById('breathingStop');
  // Define the breathing phases (label, duration in ms, target scale)
  const phases = [
    { label: 'Inhale', duration: 4000, scale: 1.6 },
    { label: 'Hold', duration: 2000, scale: 1.6 },
    { label: 'Exhale', duration: 6000, scale: 1.0 },
    { label: 'Hold', duration: 2000, scale: 1.0 },
  ];
  let phaseIndex = 0;
  let breathingTimeout = null;
  let breathingActive = false;

  const runPhase = () => {
    const phase = phases[phaseIndex];
    breathingInstructions.textContent = phase.label;
    breathingCircle.style.transform = `scale(${phase.scale})`;
    breathingTimeout = setTimeout(() => {
      phaseIndex = (phaseIndex + 1) % phases.length;
      runPhase();
    }, phase.duration);
  };
  const startBreathing = () => {
    if (breathingActive) return;
    breathingActive = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    phaseIndex = 0;
    runPhase();
  };
  const stopBreathing = () => {
    breathingActive = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearTimeout(breathingTimeout);
    breathingInstructions.textContent = 'Press Start';
    breathingCircle.style.transform = 'scale(1)';
  };
  startBtn.addEventListener('click', startBreathing);
  stopBtn.addEventListener('click', stopBreathing);

  /**
   * MINDFULNESS TASKS
   * Each task has a title, description and duration in seconds. Cards
   * are created dynamically and clicking a card opens the modal with
   * the task details and a timer. The user can start the timer,
   * watch the countdown and close the modal when complete or at
   * any time. Timers are cleared when the modal closes.
   */
  const tasks = [
    {
      title: '5-Minute Breath Focus',
      desc: 'Sit comfortably and focus on your breath. Each time your mind wanders, gently return to your breathing.',
      duration: 5 * 60,
    },
    {
      title: 'Body Scan (7 min)',
      desc: 'Spend a few minutes scanning your body from head to toe. Notice sensations, release tension on the exhale.',
      duration: 7 * 60,
    },
    {
      title: 'Guided Visualization',
      desc: 'Imagine yourself in a tranquil place — a forest, beach or mountain. Explore it using all your senses.',
      duration: 8 * 60,
    },
    {
      title: 'Stoic Reflection',
      desc: 'Reflect on a meaningful quote or situation. Contemplate what is within your control and release what is not.',
      duration: 10 * 60,
    },
  ];
  const taskList = document.getElementById('task-list');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTimer = document.getElementById('modal-timer');
  const modalAction = document.getElementById('modal-action');
  const modalClose = document.getElementById('modal-close');
  let taskInterval = null;
  let currentDuration = 0;
  // Format seconds into mm:ss
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };
  const closeModal = () => {
    modal.classList.add('hidden');
    if (taskInterval) {
      clearInterval(taskInterval);
      taskInterval = null;
    }
    // Reset modal elements
    modalAction.disabled = false;
    modalAction.textContent = 'Start';
    modalTimer.classList.add('hidden');
  };
  modalClose.addEventListener('click', closeModal);
  // Create each task card
  tasks.forEach((task) => {
    const card = document.createElement('div');
    card.className = 'task-card';
    const h = document.createElement('h3');
    h.textContent = task.title;
    const p = document.createElement('p');
    p.textContent = task.desc;
    card.appendChild(h);
    card.appendChild(p);
    card.addEventListener('click', () => openTask(task));
    taskList.appendChild(card);
  });
  // Open a task in the modal
  const openTask = (task) => {
    modal.classList.remove('hidden');
    modalTitle.textContent = task.title;
    modalDesc.textContent = task.desc;
    currentDuration = task.duration;
    modalTimer.textContent = formatTime(currentDuration);
    modalTimer.classList.add('hidden');
    modalAction.textContent = 'Start';
    modalAction.disabled = false;
    modalAction.onclick = () => startTask(task);
  };
  // Start the task timer
  const startTask = (task) => {
    modalAction.disabled = true;
    modalTimer.classList.remove('hidden');
    currentDuration = task.duration;
    modalTimer.textContent = formatTime(currentDuration);
    // Clear any existing interval
    if (taskInterval) clearInterval(taskInterval);
    taskInterval = setInterval(() => {
      currentDuration -= 1;
      if (currentDuration <= 0) {
        clearInterval(taskInterval);
        taskInterval = null;
        modalTimer.textContent = 'Done! Great job.';
        modalAction.disabled = false;
        modalAction.textContent = 'Close';
        modalAction.onclick = closeModal;
      } else {
        modalTimer.textContent = formatTime(currentDuration);
      }
    }, 1000);
  };
});
