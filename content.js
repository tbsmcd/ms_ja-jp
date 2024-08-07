chrome.storage.sync.get(['featureEnabled'], (result) => {
    if (result.featureEnabled) {
      let url = window.location.href;
      // en-us を ja-jp に置換
      url = url.replace('en-us', 'ja-jp');
      // 置換後のURLにリダイレクト
      window.location.href = url;
    }
});