/* app.js - common functionality for all pages */

/* ----- appStorage: localStorage helpers ----- */
const appStorage = (function () {
  const USER_KEY = 'expenseUser';
  const EXP_KEY = 'expenses';

  function getUser() {
    try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch(e){ return null; }
  }
  function saveUser(userObj) {
    localStorage.setItem(USER_KEY, JSON.stringify(userObj));
  }
  function getExpenses() {
    try { return JSON.parse(localStorage.getItem(EXP_KEY)) || []; } catch(e){ return []; }
  }
  function saveExpenses(arr) {
    localStorage.setItem(EXP_KEY, JSON.stringify(arr));
  }
  function addExpense(exp) {
    const arr = getExpenses();
    arr.push(exp);
    saveExpenses(arr);
  }
  return {
    getUser, saveUser, getExpenses, saveExpenses, addExpense
  };
})();

/* ----- appUI: UI helpers (navbar injection, toast, username display) ----- */
const appUI = (function () {
  function injectNavbar() {
    const navbarHTML = `
      <nav class="navbar" role="navigation">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="brand">Expense History</div>
          <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="user.html">UserDetail</a>
            <a href="addExpense.html">ExpenseMade</a>
            <a href="summary.html">Summary</a>
            <a href="#" id="exitApp">Exit</a>
          </div>
        </div>

        <div class="nav-right">
          <div id="datetime"></div>
          <div id="userBadge" style="display:none"></div>
        </div>
      </nav>
    `;
    const container = document.getElementById('navbar');
    if (container) container.innerHTML = navbarHTML;

    // Exit link
    const exitEl = document.getElementById('exitApp');
    if (exitEl) {
      exitEl.addEventListener('click', (e) => {
        e.preventDefault();
        // Attempt to close window
        try {
          window.close();
          // If can't close (common), inform user
          setTimeout(() => {
            if (!window.closed) {
              alert('This tab could not be closed programmatically (browser security). You can close the tab/window manually. Your data is preserved in localStorage.');
            }
          }, 300);
        } catch (err) {
          alert('Could not close window automatically. Please close the tab/window manually. Your data is preserved in localStorage.');
        }
      });
    }

    // Show username if available
    const user = appStorage.getUser();
    if (user) updateUserInNavbar(user.name);
    updateDateTime();
    // update the time every 30 seconds
    setInterval(updateDateTime, 30000);
  }

  function updateUserInNavbar(name) {
    const badge = document.getElementById('userBadge');
    if (!badge) return;
    if (name) {
      badge.style.display = 'inline-block';
      badge.textContent = name;
    } else {
      badge.style.display = 'none';
    }
  }

  function updateDateTime() {
    const el = document.getElementById('datetime');
    if (!el) return;
    const now = new Date();
    // Format e.g., Mon Oct 13 2025 08:00
    const formatted = now.toLocaleString('en-IN', { weekday:'short', year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
    el.textContent = formatted;
  }

  // Simple toast-ish feedback
  function showToast(msg) {
    // create ephemeral small notification
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.right = '18px';
    t.style.bottom = '18px';
    t.style.padding = '10px 14px';
    t.style.background = 'rgba(10,90,220,0.95)';
    t.style.color = 'white';
    t.style.borderRadius = '10px';
    t.style.boxShadow = '0 6px 18px rgba(10,30,80,0.18)';
    t.style.zIndex = 9999;
    document.body.appendChild(t);
    setTimeout(()=> t.style.opacity = '0.0', 2200);
    setTimeout(()=> t.remove(), 2600);
  }

  return { injectNavbar, updateUserInNavbar, showToast };
})();

/* Inject navbar on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  appUI.injectNavbar();
});

/* Expose for page-specific scripts */
window.appStorage = appStorage;
window.appUI = appUI;
