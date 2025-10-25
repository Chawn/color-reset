	// เลือกทุก element บนหน้าเว็บ
const allElements = document.querySelectorAll('*');

// วนลูปเพื่อสั่งลบ filter ทีละตัว 
allElements.forEach(element => {
  element.style.setProperty('filter', 'none', 'important');
});

const removeFilters = (root = document) => {
  if (root && root.nodeType === 1) { 
    root.style.setProperty('filter', 'none', 'important');
    root.style.setProperty('-webkit-filter', 'none', 'important');
  }
  if (root && root.querySelectorAll) { 
    root.querySelectorAll('*').forEach(el => {
      el.style.setProperty('filter', 'none', 'important');
      el.style.setProperty('-webkit-filter', 'none', 'important');
    });
  }
}; 

removeFilters(document);

const observer = new MutationObserver(mutations => {
  mutations.forEach(m => {
    if (m.type === 'attributes' && m.target && m.target.nodeType === 1) {
      removeFilters(m.target);
    }
    if (m.addedNodes) {
      m.addedNodes.forEach(n => {
        if (n && n.nodeType === 1) {
          removeFilters(n);
        }
      });
    }
  });
});

try {
  observer.observe(document.documentElement || document, {
    attributes: true,
    attributeFilter: ['style', 'class'],
    childList: true,
    subtree: true
  });
} catch (e) {}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => removeFilters(document));
}