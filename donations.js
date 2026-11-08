const gate = document.querySelector('#age-gate');
const supportContent = document.querySelector('#support-content');
const confirmButton = document.querySelector('#age-confirm');
const tabs = [...document.querySelectorAll('.support-tab')];
const panels = [...document.querySelectorAll('.support-panel')];
let providersLoaded = false;

function loadScript(src, attributes = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function loadProviders() {
  if (providersLoaded) return;
  providersLoaded = true;

  try {
    await loadScript('https://www.paypal.com/sdk/js?client-id=BAA_ndqaWMyQwTnDZ0LXwLQ22jdJo9uxkeXYqmBbF-hD41HMiZ83mvOcx1Kti0b6ZfXfje7Q1ievNaS8Ok&vault=true&intent=subscription', {'data-sdk-integration-source': 'button-factory'});
    window.paypal.Buttons({
      style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'subscribe' },
      createSubscription: (data, actions) => actions.subscription.create({ plan_id: 'P-4FD24238VX4902214NK2XP2Y', quantity: 1 }),
      onApprove: (data) => { document.querySelector('#paypal-status').textContent = `PayPal subscription approved: ${data.subscriptionID}`; }
    }).render('#paypal-button-container-P-4FD24238VX4902214NK2XP2Y');
  } catch (error) {
    document.querySelector('#paypal-status').textContent = 'PayPal could not load. Use the provider page or another tab.';
  }

  try {
    await loadScript('https://storage.ko-fi.com/cdn/scripts/overlay-widget.js');
    window.kofiWidgetOverlay.draw('fedpromptly', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#00b9fe',
      'floating-chat.donateButton.text-color': '#fff'
    });
    document.querySelector('#kofi-status').textContent = 'Ko-fi support bubble is ready.';
  } catch (error) {
    document.querySelector('#kofi-status').textContent = 'Ko-fi could not load. Use the direct provider page if available.';
  }

  try {
    await loadScript('https://js.stripe.com/v3/buy-button.js', { async: '' });
    const stripeButton = document.createElement('stripe-buy-button');
    stripeButton.setAttribute('buy-button-id', 'buy_btn_1UJKaaJaRf233kfWKZ81fcIe');
    stripeButton.setAttribute('publishable-key', 'pk_live_51UIdAGJaRf233kfWlFacR31IYVGdjCVAttNFzIgQGXQzrUdc894iJcBqamRZNwF11z2AN5kvjyzitor462f2egVI00UmKj0sd8');
    document.querySelector('#stripe-provider-box').replaceChildren(stripeButton);
  } catch (error) {
    document.querySelector('#stripe-provider-box').innerHTML = '<p class="provider-status">Stripe could not load. Please use another provider tab.</p>';
  }
}

function activateTab(tab) {
  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  panels.forEach((panel) => {
    const active = panel.id === tab.dataset.panel;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });
}

confirmButton?.addEventListener('click', () => {
  gate.hidden = true;
  supportContent.hidden = false;
  document.body.classList.add('age-confirmed');
  loadProviders();
});

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[next].focus();
    activateTab(tabs[next]);
  });
});

document.querySelector('#kofi-launch')?.addEventListener('click', () => {
  if (window.kofiWidgetOverlay?.draw) {
    window.kofiWidgetOverlay.draw('fedpromptly', { type: 'floating-chat', 'floating-chat.donateButton.text': 'Support me', 'floating-chat.donateButton.background-color': '#00b9fe', 'floating-chat.donateButton.text-color': '#fff' });
  }
  document.querySelector('#kofi-status').textContent = 'Ko-fi widget opened; select the floating support button.';
});
