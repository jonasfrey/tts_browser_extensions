console.log('asdfasdf')
console.log(franc)
console.log(franc("hallo welt"))
// Create a context menu item
browser.contextMenus.create({
    id: "speakText",
    title: "Text to Speech",
    contexts: ["selection"]
  });
  
  // Add a click event listener
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "speakText") {
      detectLanguageAndSpeak(info.selectionText);
    }
  });
  
  // Function to detect language and perform text-to-speech
  function detectLanguageAndSpeak(text) {
    const lang = franc(text);

    detectLanguageAndSpeak
    console.log(`Detected language: ${lang}`);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langToSpeechLang(lang); // Convert franc language code to SpeechSynthesisUtterance language code
    let s_langcode = {
        'eng': 'en',
        'spa': 'es',
        'fra': 'fr',
        'deu': 'de',
        // Add more mappings as needed
    }[lang]
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    let o_voice = voices.find(o=>o.lang.includes(s_langcode))
    let o_voice_default_en = voices.find(o=>o.lang.includes('en'))
    debugger
    if(!o_voice){
        o_voice = o_voice_default_en
    }
    if(o_voice){
        msg.voice = o_voice;
    }
    // msg.voiceURI = "native";
    // msg.volume = 1;
    msg.text = text;
    msg.lang = lang;
    speechSynthesis.speak(msg);

  }
  
  // Map franc language codes to SpeechSynthesisUtterance language codes
  function langToSpeechLang(lang) {
    const langMap = {
      'eng': 'en',
      'spa': 'es',
      'fra': 'fr',
      'deu': 'de',
      // Add more mappings as needed
    };
    return langMap[lang] || 'en-US'; // Default to 'en-US' if language is not in the map
  }
  