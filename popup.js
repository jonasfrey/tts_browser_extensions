document.getElementById('openTab').addEventListener('click', function() {
    browser.tabs.create({ url: "https://www.example.com" });
  });
  