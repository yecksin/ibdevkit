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
  trackPageView(page_title) {
    if (gAiD) {
      try {
        gtag('event', 'page_view', {
          page_title,
          send_to: gAiD,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("can't access google analytics id");
    }
  },
  trackEvent(eventName, value) {
    try {
      gtag('event', eventName, {
        value,
      });
    } catch (error) {
      console.log(error);
    }
  },
});
