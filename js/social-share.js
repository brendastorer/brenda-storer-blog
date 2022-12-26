if (!customElements.get('social-share')) {
  customElements.define('social-share', class SocialShare extends HTMLElement {
    constructor() {
      super();
      this.clipboardButton = this.querySelector('[data-share-clipboard]');
      this.successMessage = this.querySelector('[data-success-message]');
      this.shareUrl = this.dataset.shareUrl;
      this.shareLinks = this.querySelectorAll('[data-share-link]');

      this.clipboardButton.addEventListener('click', ()  => {
        this.copyUrlToClipboard(this.shareUrl);
      });
    }

    copyUrlToClipboard(url) {
      navigator.clipboard.writeText(url).then(() => {
        this.successMessage.classList.remove('display--hidden');
        this.successMessage.setAttribute('aria-hidden', false);

        setTimeout(() => {
          this.successMessage.setAttribute('aria-hidden', true);
          this.successMessage.classList.add('display--hidden');
        }, 5000);
      });
    }
  });
}
