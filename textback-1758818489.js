(function() {
  'use strict';

  // Check if already loaded
  if (window.TextBackLoaded) {
    return;
  }
  window.TextBackLoaded = true;

  // Default configuration
  let config = {
    phoneValidateUrl: 'https://stage.nerdifyit.com/op/api/v3/phone_validate',
    isExistsUrl: 'https://stage.nerdifyit.com/op/api/v1/number/is_exists',
    getUserDataUrl: 'https://ana.dsh-agency.com/ipinfo/me?geo=1',
    createLeadUrl: 'https://stage.nerdifyit.com/op/api/v3/users/client/new',
    textbackUrl: 'https://connect-stage.dsh-agency.com/api/v1/external/messages/textback',
    appPhone: '+17606182740',
    landingGuid: 'stage.nerdifyit.com_en',
    lrtrackerId: '55c35f469553770fe8a3c66d'
  };

  // CSS Styles
  const css = `
  :root {
    --tb-primary: #24A652;
    --tb-primary-hover: #1e8a44;
    --tb-error: #ff3363;
    --tb-text-muted: #797C91;
    --tb-bg: #fff;
    --tb-radius-lg: 10px;
  }

  .textback *,
  .textback *::before,
  .textback *::after {
    box-sizing: border-box;
  }

  .textback__consent {
    margin-bottom: 12px;
  }

  .consent {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 4px;
    font-size: 12px;
    color: var(--tb-text-muted);
    line-height: 1.5;
    text-align: left;
    text-align-last: left;
  }

  .consent__control {
    appearance: auto;
    width: 16px;
    height: 16px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    flex-shrink: 0;
    accent-color: var(--tb-primary);
    opacity: 0.8;
    border: 1px solid var(--tb-text-muted);
    border-radius: 4px;
  }

  .consent__link {
    color: inherit;
  }

  .textback[data-error] .input-wrapper {
    background-color: var(--tb-error-bg);
    border-color: var(--tb-error);
  }

  .textback[data-error] .phone-input {
    color: var(--tb-error);
  }

  .textback[data-error] .textback__error {
    display: block;
  }

  .input-wrapper {
    height: 50px;
    margin-bottom: 10px;    
    border-radius: var(--tb-radius-lg);
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    padding: 0 15px 0 20px;
    background-color: var(--tb-bg);
  }

  .phone-input {
    display: block;
    font-family: inherit;
    font-size: 20px;
    letter-spacing: 0.27px;
    color: #000;
    background: transparent;
    padding: 0 0 0 25px;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    border: none;
    outline: none;
  }

  .submit-button {
    font-size: 20px;
    font-family: inherit;
    display: block;
    text-align: center;
    background-color: var(--tb-primary);
    padding: 15px;
    color: var(--tb-bg);
    font-weight: bold;
    border-radius: var(--tb-radius-lg);
    overflow: hidden;
    transition: background-color 0.3s ease;
    border: none;
    cursor: pointer;
    will-change: transform;
  }

  .submit-button:disabled {
    opacity: 0.5;
  }

  .submit-button:not(:disabled):hover {
    background-color: var(--tb-primary-hover);
  }

  .submit-button--block {
    margin-bottom: 12px;
    width: 100%;
  }
    
  .submit-button--inline {
    display: none;
  }  

  .textback__error {
    display: none;
    margin-bottom: 12px;
    color: #e97473;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
  }

  .textback__flag {
    display: flex;
    width: 24px;
    aspect-ratio: 1;
    flex-shrink: 0;
  }
  
  /* Ripple Effect */
  .ripple-js {
    overflow: hidden;
    will-change: transform;
  }

  .ripple-js .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    transform: scale(0);
    animation: ripple-animation 1000ms linear;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale3d(4, 4, 1);
      opacity: 0;
    }
  }

  @media (min-width: 900px) {
    .input-wrapper {
      height: 66px;
    }

    .submit-button--inline {
      position: relative;
      display: inline-block;
    }

    .submit-button--block {
      display: none;
    }    
  }
  `;

  // Masked Phone Number Input Component
  class MaskedPhoneNumberInput extends HTMLElement {
    constructor() {
      super();
      // data-live-verification='{"mode": "live", "delay": 1500}'
      // data-live-verification='{"mode": "off"}'>
      this.verification = JSON.parse(this.dataset.liveVerification || '{"mode": "off"}');
    }

    connectedCallback() {
      const input = this.input = this.querySelector('input');
      input.valid = !input.required;
      this.pattern = input.placeholder;
      this.mask = input.dataset.mask;
      this.prefixLength = this.pattern.indexOf(this.mask);
      const prefixStr = this.pattern.slice(0, this.prefixLength);
      this.prefixStrRe = new RegExp(`^${escapeRegex(this.getLeadingPlusAndDigits(prefixStr))}`);
      const prefixDigitsLength = this.getDigits(this.pattern).length;
      const missingPartLength = this.pattern.split('').filter(c => c === this.mask).length
      this.maxLength = prefixDigitsLength + missingPartLength;
      
      input.onbeforeinput = (event) => {
        const { mask, prefixLength, lastkey, caretPosition } = this;
        const inputValue = input.value;
        const isDigitKey = this.isDigitKey = this.isDigit(lastkey);
        const isDeleteOrBackspaceKey = this.isDeleteOrBackspace(lastkey);
        const isInsidePrefix = this.isInsidePrefix = caretPosition < prefixLength;
        const hasPlaceForDigit = inputValue.indexOf(mask) !== -1;

        if ((isDigitKey && !hasPlaceForDigit) || (isDeleteOrBackspaceKey && isInsidePrefix)) {
          this.stopProcessing(event);
        }
        
        this.prevValue = this.input.value;
        this.nextWasDigitOrMask = new RegExp(`\\d|${mask}`).test(inputValue[caretPosition]);      
      }

      input.oninput = ({ target: { value } }) => {
        const { prefixLength, lastkey, prevValue, isInsidePrefix, isDigitKey } = this;
        if (isInsidePrefix && isDigitKey) {
          value = [prevValue.slice(0, prefixLength), lastkey, prevValue.slice(prefixLength)].join('');
          this.caretPosition = prefixLength;
        }
        this.formatAndValidate(this.removePrefixAndGetDigits(value));
      };

      input.onblur = () => {
        if (this.input.value === this.pattern) {
          this.input.value = '';
        }
      }

      input.onfocus = () => {
        if (!this.input.value.length) { this.input.value = this.pattern; }
        this.input.removeAttribute("valid");
      };

      input.onpaste = this.pasteHandler.bind(this);

      input.onkeydown = this.saveKeyAndCaretPosition.bind(this);

      function escapeRegex(string) {
        return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
      }
    }

    stopProcessing(event) {
      this.lastkey = undefined;
      event.preventDefault();
      event.stopPropagation();
    }

    pasteHandler(event) {
      event.preventDefault();
      const paste = (event.clipboardData || window.clipboardData).getData("text");
      this.formatAndValidate(this.removePrefixAndGetDigits(paste));
    }

    removePrefixAndGetDigits(string) {
      return this.getDigits(this.getLeadingPlusAndDigits(string).replace(this.prefixStrRe, ''));
    }

    getLeadingPlusAndDigits(string) {
      const hasLeadingPlus = string.trim().startsWith('+');
      const digits = string.replace(/\D/g, '');
      return (hasLeadingPlus ? '+' : '') + digits;
    }

    formatAndValidate(digits) {
      this.input.value = this.format(digits);
      this.input.valid = !this.input.required || this.validate();
      this.setCaretPosition();
      
      const { mode, delay } = this.verification;
      if (mode === "live") {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => this.toggleValidationStyle(), this.input.valid ? 0 : delay);
      }
    }

    saveKeyAndCaretPosition(event) {
      this.lastkey = event.key?.toLowerCase();
      this.caretPosition = this.input.selectionStart;
    }

    setCaretPosition() {
      const { caretPosition, isInsidePrefix, nextWasDigitOrMask, lastkey } = this;
      const indexOfLastDigit = this.getLastDigitIndex();
      let afterInputCaretPosition;

      if (lastkey === "delete") {
        afterInputCaretPosition = caretPosition;
      }
      else if (lastkey === "backspace") {
        const caretPositionM1 = caretPosition - 1;
        afterInputCaretPosition = indexOfLastDigit > caretPositionM1 ? caretPositionM1 : this.getLastDigitIndex(caretPosition) + 1;     
      }
      else {
        const indexOfMask = this.getMaskIndex();
        const nextDigitIndex = this.getDigitIndex(caretPosition + 1);
        const caretShift = +!(isInsidePrefix || nextWasDigitOrMask);
        afterInputCaretPosition = caretShift + (indexOfLastDigit > caretPosition ? nextDigitIndex: indexOfMask);
      }
      this.input.setSelectionRange(afterInputCaretPosition, afterInputCaretPosition);
      this.lastkey = undefined;
    }  

    toggleValidationStyle() {    
      this.input.setAttribute('valid', this.input.valid);
    }

    validate(number = this.input.value) {
      return this.getDigits(number).length === this.maxLength;
    }    

    format(digits) {
      let pattern = this.pattern;
      const mask = this.mask;

      for (const digit of digits.split('')) {
        pattern = pattern.replace(mask, digit);
      }
      return pattern;
    }

    getMaskIndex() {
      return this.input.value.indexOf(this.mask);
    }

    getDigitIndex(from = 0) {
      const found = this.input.value.slice(from).search(/\d/);    
      return found === -1 ? found : from + found;
    }

    getLastDigitIndex(from) {
      const value = this.input.value;
      from = from ?? value.length;
      const lastDigit = this.getDigits(value).split('').pop();
      return value.lastIndexOf(lastDigit, from);
    }

    getDigits(value = this.input.value) {
      const notDigit = /\D/g;
      return value.replace(notDigit, '');    
    }

    isDeleteOrBackspace(key) {
      return (/delete|backspace/).test(key)
    }

    isDigit(key) {
      return (/\d/).test(key);
    }

    get number() {
      return `+${this.getDigits()}`
    }

    get valid() {
      this.input.setAttribute('valid', this.input.valid);
      return this.input.valid;
    }
  }

  // Utility functions
  const getCookie = (cname) => {
    let name = cname + '=';
    let decodedCookie = '';

    try {
      decodedCookie = decodeURIComponent(document.cookie);
    } catch (error) {
      console.error("decodedCookie:", error);
    }

    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  const getGtagClientId = () => {
    function getCookieInternal(name) {
      const isClient = typeof window !== 'undefined';
      let matches =
        isClient &&
        document.cookie.match(
          new RegExp(
            '(?:^|; )' +
            name.replace(/([?$*|{}\\[\\]\\\\()+^])/g, '\\\\$1') +
            '=([^;]*)'
          )
        );
      let gtagClientId;
      try {
        gtagClientId = decodeURIComponent(matches[1]);
      } catch (error) {
        console.error("getGtagClientId:", error);
      }
      return gtagClientId;
    }

    const _ga = getCookieInternal('_ga');
    if (_ga) {
      if (/^GA\\d\\./.test(_ga)) {
        return _ga.replace(/^GA\\d\\.\\d\\./, '');
      }
      if (/^amp-/.test(_ga)) {
        return _ga.replace(/^amp-/, '');
      }
      return _ga;
    }

    return false;
  };

  const getSessionStorageQuery = () => {
    const query = JSON.parse(sessionStorage.getItem('query')) || {
      path: '',
      search: '',
    };

    const clientId = getGtagClientId();
    const tcid = window.tcid;

    const gClientQuery = clientId ? `&ga_client_id=${clientId}` : '';
    const tcidQuery = tcid ? `&tcid=${tcid}` : '';

    const gaSessionId = getCookie('_ga_session_id') || '';
    const gaSessionIdQuery = gaSessionId ? `&ga_session_id=${gaSessionId}` : '';

    let search = `${query.search}${gClientQuery}${gaSessionIdQuery}${tcidQuery}`;
    if (search.startsWith('&')) {
      search = search.substring(1);
    }

    return {
      path: query.path,
      search: search,
    };
  };

  const parseQuery = (search) => {
    const query = {};
    try {
      const pairs = (search[0] === '?' ? search.substr(1) : search).split('&');
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
    } catch (error) {
      console.error("parseQuery:", error);
    }
    return query;
  };

  // API functions
  async function phoneValidate(phone) {
    const response = await fetch(config.phoneValidateUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone })
    });
    if (!response.ok) throw new Error('Phone validation failed');
    return response.json();
  }

  async function checkLeadExists(phone) {
    const response = await fetch(config.isExistsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, get_id: true })
    });
    if (!response.ok) throw new Error('Failed to check lead existence');
    return response.json();
  }

  async function createLead(data) {
    const response = await fetch(config.createLeadUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create lead');
    return response.json();
  }

  async function getUserData() {
    const response = await fetch(config.getUserDataUrl, {
      method: 'GET',
    });
    if (!response.ok) throw new Error('Failed to fetch user data');
    return response.json();
  }

  async function sentTextBack(data) {
    const response = await fetch(config.textbackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to send text back');
    return response.json();
  }

  const getConsents = (checkboxes) => {
    const consents = {};
    checkboxes.forEach(cb => consents[cb.name] = cb.checked);
    return consents;
  };

  // Form submission handler
  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (form.dataset.submitted) { return; }

    if (!form.refs.phone.valid) {
      form.dataset.error = true;
      return;
    }

    form.refs.submits.forEach(b => b.disabled = true);
    form.refs.consents.forEach(c => c.disabled = true);

    // let redirected = false;

    try {
      // Step 1: Phone number validation
      const phoneResponse = await phoneValidate(form.refs.phone.number);
      if (!phoneResponse.ok) {
        form.dataset.error = true;
        form.refs.submits.forEach(b => b.disabled = false);
        form.refs.consents.forEach(c => c.disabled = false);
        return;
      } else {
        form.refs.submits.forEach(b => b.textContent = "Sending SMS...");
      }

      // Step 2: Check for lead existence
      const currentUrl = window.location.href;
      const { search } = window.location;
      const existsData = await checkLeadExists(form.refs.phone.number);

      if (existsData.result) {
        // Lead exists, send textback
        if (window.tracker && window.tracker.config && window.tracker.config.setCid) {
          window.tracker.config.setCid(existsData?._id);
        }
        if (window.trackValues) {
          window.trackValues('stage', 'textbackSentSuccessfully', {
            context: {
              userAgent: window.navigator.userAgent,
            }
          });
        }

        const textbackData = {
          to_num: form.refs.phone.number,
          landing_guid: config.landingGuid,
          source_url: currentUrl,
          client_id: existsData._id,
          consents: getConsents(form.refs.consents),
        };

        // Step 3.1: If the lead exists, then send the request /textback
        const textbackResponse = await sentTextBack(textbackData);

        if (textbackResponse.ok) {
          alert("Thanks for giving us a try.\nWe'll text you in a second!");
          form.dataset.submitted = true;
          return;
        }

      } else {
        //Lead does not exist, fetch user data and create a new lead

        // Step 4.1: fetch user data
        const userData = await getUserData();
        if (userData) {
          const query = getSessionStorageQuery();

          const data = {
            phone: form.refs.phone.number,
            phone_ref: config.appPhone,
            timezone_str: Intl.DateTimeFormat().resolvedOptions().timeZone,
            country: userData?.country_name,
            geoip_country_code: userData?.country_code,
            geoip_country_name: userData?.country_name,
            profile_landing: query?.path,
            profile_landing_query: parseQuery(query?.search),
            host: config.lrtrackerId,
            ip: userData?.ip_address,
            referral_info: 'Direct',

            textback_options: {
              to_num: form.refs.phone.number,
              landing_guid: config.landingGuid,
              source_url: currentUrl,
              consents: getConsents(form.refs.consents),
            },
          };

          const createLeadData = await createLead(data);

          if (createLeadData?._id) {
            if (window.tracker && window.tracker.config && window.tracker.config.setCid) {
              window.tracker.config.setCid(createLeadData?._id);
            }
            if (window.trackValues) {
              window.trackValues('stage', 'textbackSentSuccessfully', {
                context: {
                  userAgent: window.navigator.userAgent,
                },
              });
            }

            alert("Thanks for giving us a try.\nWe'll text you in a second!");
            form.dataset.submitted = true;
            return;
          }
        }
      }
    } catch (error) {
      form.dataset.error = true;
      console.log(error.message);
    } finally {
      const text = form.dataset.submitted ? "Wait for SMS" : "Text me now";
      if (form.dataset.submitted) {
        form.refs.submits.forEach(b => b.textContent = text);
      }

      if (!form.dataset.submitted) {
        form.refs.submits.forEach(b => b.disabled = false);
        form.refs.consents.forEach(c => c.disabled = false);
      }
    }
  }

  // Ripple effect
  function initRippleEffect() {
    document.querySelectorAll('.textback .ripple-js').forEach((button) => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      });
    });
  }

  // Create form HTML
  function createFormHTML() {
    return `
        <form class="textback">
          <div class="textback__error">Looks like you have mistyped your phone number. &NewLine;Please check and re-enter it.</div>

          <div class="textback__consent">
            <label class="consent">
              <input class="consent__control" data-id="consent" required name="accept_terms" type="checkbox">
              <span class="consent__text">I accept the <a class="consent__link" href="/terms-of-service">Nerdify Terms of Service</a> and have read the <a class="consent__link" href="/privacy-policy">Nerdify Privacy Policy</a></span>
            </label>
          </div>

          <div class="input-wrapper">
            <div class="textback__flag">
              <svg viewBox="0 0 512 512">
                <circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"/>
                <g>
                  <path style="fill:#D80027;" d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"/>
                  <path style="fill:#D80027;" d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"/>
                  <path style="fill:#D80027;" d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"/>
                  <path style="fill:#D80027;" d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819
                    C15.236,346.596,24.993,369.036,37.574,389.565z"/>
                </g>
                <path style="fill:#0052B4;" d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037
                  C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941
                  c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444
                  C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4
                  l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z
                  M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
                  L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
                  l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822
                  l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509
                  l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"/>
              </svg>
            </div>

            <masked-phone-number-input>
              <input
                type="tel"
                name="phone"
                class="phone-input"
                data-mask="X"
                placeholder="+1 (XXX) XXX - XXXX">
            </masked-phone-number-input>

            <div class="ripple-wrapper" style="margin-left: auto;">
              <button class="submit-button submit-button--inline ripple-js" type="submit" data-gacat="text-back_request" data-gaact="bottom"
                >Text me now</button>
            </div>
          </div>

          <button class="submit-button submit-button--block" type="submit" data-gacat="text-back_request" data-gaact="bottom"
            >Text me now</button>

          <div class="textback__consent">
            <label class="consent">
              <input class="consent__control" data-id="consent" name="accept_updates" type="checkbox">
              <span class="consent__text">OPTIONAL: I would like to receive newsletters and updates about the Nerdify product at the phone number provided. One message per month. Message and data rates may apply. Reply HELP for help or STOP to cancel. <a class="consent__link" href="/sms-terms-of-service">Nerdify SMS Terms of Service</a></span>
            </label>
          </div>
        </form>
    `;
  }

  // Initialize the embed
  function initTextBackEmbed() {
    // Find all elements with data-textback attribute
    const textbackElements = document.querySelectorAll('[data-textback]');

    if (textbackElements.length === 0) {
      console.warn('No elements with data-textback attribute found');
      return;
    }

    // Inject CSS
    const styleSheet = document.createElement('style');
    styleSheet.textContent = css;
    document.head.appendChild(styleSheet);

    // Define custom element for masked phone input
    if (!customElements.get('masked-phone-number-input')) {
      customElements.define('masked-phone-number-input', MaskedPhoneNumberInput);
    }

    // Process each textback element
    textbackElements.forEach((element) => {
      // Insert form HTML
      element.innerHTML = createFormHTML();

      // Initialize form functionality
      const form = element.querySelector('form');
      if (!form) { return; }
      form.refs = {
        consents: form.querySelectorAll('input[data-id="consent"]'),
        submits: form.querySelectorAll("button[type='submit']"),
        phone: form.querySelector('masked-phone-number-input'),
      }
      form.addEventListener("submit", handleFormSubmit);
      form.addEventListener("focusin", () => form.removeAttribute("data-error"));
    });

    // Initialize ripple effects
    initRippleEffect();

    console.log('TextBack Embed initialized successfully');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTextBackEmbed);
  } else {
    initTextBackEmbed();
  }

  // Export public API for manual initialization
  window.TextBackEmbed = {
    init: initTextBackEmbed,
    config: function(userConfig) {
      // Store config and return chainable API
      window.TextBackConfig = userConfig;
      return this;
    }
  };

})();
