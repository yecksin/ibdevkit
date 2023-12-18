declare let gtag: (property: string, value: any, configs: any) => {};
let gAiD = '';
export const IBDGoogleAnalytics = () => ({
  initialize(id) {
    gAiD = id;
    try {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gAiD}`;
      document.body.appendChild(script);

      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        console.log("Hi from GA");
        gtag('config', '${gAiD}');
        `;
      document.body.appendChild(script2);
    } catch (error) {
      console.error(error);
    }
  },
  trackPageView(url) {
    if (gAiD) {
      try {
        window['gtag']('config', gAiD, {
          page_path: url,
        });
        console.log('works');
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("can't access google analytics id");
      console.log(window['gtag']);
    }
  },
  trackEvent() {
    try {
      window['gtag']('event', 'click', {
        event_category: 'button',
        event_label: 'cta_button',
        value: '1',
      });
      window['gtag']('event', 'example', {
        event_category: 'button',
        event_label: 'cta_button',
        value: '1',
      });
      gtag('event', 'gtagaas', {
        event_category: 'button',
        event_label: 'cta_button',
        value: '1',
      });
    } catch (error) {
      console.log(error);
    }
  },
});
