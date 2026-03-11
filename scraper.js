(async () => {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const waitFor = async (checkFn, timeout = 15000, interval = 300) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const result = checkFn();
      if (result) return result;
      await sleep(interval);
    }
    return null;
  };

  const extractUrlFromText = (text) => {
    if (!text) return null;
    const match = text.match(/https?:\/\/[^\s<>"']+/i);
    return match ? match[0] : null;
  };

  const getPostAnchors = () => {
    const anchors = [...document.querySelectorAll('a[href*="/p/"]')];
    const seen = new Set();

    return anchors.filter(a => {
      const href = a.getAttribute("href");
      if (!href || seen.has(href)) return false;
      seen.add(href);
      return true;
    });
  };

  const getCaptionElement = () => {
    return (
      document.querySelector('div.xt0psk2 h1') ||
      document.querySelector('h1._ap3a') ||
      document.querySelector('article h1') ||
      document.querySelector('main h1')
    );
  };

  const getNextButton = () => {
    return (
      document.querySelector('svg[aria-label="İleri"]')?.closest('button') ||
      document.querySelector('svg[aria-label="Next"]')?.closest('button')
    );
  };

  const getCloseButton = () => {
    return (
      document.querySelector('svg[aria-label="Kapat"]')?.closest('button') ||
      document.querySelector('svg[aria-label="Close"]')?.closest('button') ||
      [...document.querySelectorAll('button')].find(btn =>
        /kapat|close/i.test(btn.getAttribute('aria-label') || btn.innerText || '')
      )
    );
  };

  const countInput = prompt("Kaç adet gönderiden link toplanacak?", "10");
  const targetCount = parseInt(countInput, 10);

  if (!targetCount || targetCount < 1) {
    alert("Geçerli bir sayı girilmedi.");
    return;
  }

  const postAnchors = getPostAnchors();
  if (!postAnchors.length) {
    alert("Gönderi linkleri bulunamadı.");
    return;
  }

  const maxCount = Math.min(targetCount, postAnchors.length);
  const results = [];

  postAnchors[0].click();

  if (!(await waitFor(() => getCaptionElement(), 15000))) {
    alert("İlk gönderi açılamadı veya açıklama bulunamadı.");
    return;
  }

  for (let i = 0; i < maxCount; i++) {
    console.log(`İşleniyor ${i + 1}/${maxCount}`);

    const captionEl = await waitFor(() => getCaptionElement(), 15000);
    const captionText = captionEl ? captionEl.innerText : "";
    const foundUrl = extractUrlFromText(captionText);

    results.push(foundUrl || "URL_BULUNAMADI");
    console.log(foundUrl || "URL_BULUNAMADI");

    if (i < maxCount - 1) {
      const nextBtn = await waitFor(() => getNextButton(), 10000);
      if (!nextBtn) {
        console.warn("İleri butonu bulunamadı, işlem durdu.");
        break;
      }

      nextBtn.click();
      await sleep(2000);
    }
  }

  const output = results.join("\n");

  try {
    await navigator.clipboard.writeText(output);
    alert(`Tamamlandı. ${results.length} link panoya kopyalandı.`);
  } catch (err) {
    alert("Panoya kopyalama başarısız oldu. Konsoldan al.");
  }

  console.log("Toplanan linkler:\n" + output);

  const closeBtn = getCloseButton();
  if (closeBtn) closeBtn.click();
})();
