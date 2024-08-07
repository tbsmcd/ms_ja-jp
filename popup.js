document.addEventListener('DOMContentLoaded', () => {
    const featureToggle = document.getElementById('featureToggle');
  
    // ストレージから設定を読み込み
    chrome.storage.sync.get(['featureEnabled'], (result) => {
      featureToggle.checked = result.featureEnabled || false;
    });
  
    // チェックボックスの状態が変わったときにストレージに保存
    featureToggle.addEventListener('change', () => {
      chrome.storage.sync.set({ featureEnabled: featureToggle.checked });
    });
  });