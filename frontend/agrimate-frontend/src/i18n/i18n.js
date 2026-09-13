import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      diseaseDetection: "Disease Detection",
      uploadImage: "Upload Plant Image",
      detectDisease: "Detect Disease",
      reset: "Reset",
      dropPhoto: "Drop your plant photo here",
      chooseFile: "Choose Image File",
      noImage: "No image analyzed yet",
      description: "Upload a photo of a diseased plant leaf for diagnosis, treatment solutions, and prevention strategies.",
      browseFiles: "or click to browse files",
      fileTypes: "JPG, PNG, WEBP — up to 10MB",
      uploadAdvice: "Upload a clear photo of an affected plant leaf for instant diagnosis and treatment advice",
      detectable: "Detectable conditions",
      photoTips: "Photo Tips",
tip1: "Use natural daylight — avoid shadows and flash.",
tip2: "Capture the affected area clearly, filling most of the frame.",
tip3: "Include both healthy and diseased portions for accuracy.",
tip4: "Hold steady and use at least 5MP resolution.",
planthealthAI: "Plant Health AI",
goodMorning: "Good morning",
goodAfternoon: "Good afternoon",
goodEvening: "Good evening",
dashboardOverview: "Here's an overview of your farming intelligence. Select a module to get started.",

modulesActive: "Modules Active",
dataSources: "Data Sources",
cropsSupported: "Crops Supported",
detectionSpeed: "Detection Speed",

quickAccess: "Quick Access",

checkWeather: "Check Weather",
weatherDesc: "Live temp, humidity & wind for any city",

soilAnalysis: "Soil Analysis",
soilDesc: "Get fertilizer & irrigation advice",

marketPrices: "Market Prices",
marketDesc: "Today's crop prices & trend signals",

diseaseDetection: "Disease Detection",
diseaseDesc: "Upload a leaf photo for instant diagnosis",

goButton: "Go",

todayFarmingTips: "Today's Farming Tips",

farmTip1: "Water crops in the early morning to reduce evaporation by up to 40%.",
farmTip2: "Rotate crops each season to naturally restore nitrogen to the soil.",
farmTip3: "Monitor soil temperature — most seeds germinate best between 18–24°C.",
farmTip4: "Introduce ladybugs and lacewings as natural predators for aphid control.",

gettingStarted: "Getting Started",

step1Title: "Check the Weather",
step1Desc: "Start your day with real-time conditions for your region.",

step2Title: "Analyze Your Soil",
step2Desc: "Input NPK readings for fertilizer recommendations.",

step3Title: "Monitor Markets",
step3Desc: "Track crop prices and hold or sell intelligently.",

step4Title: "Detect Diseases",
step4Desc: "Upload a photo of a diseased leaf for instant AI diagnosis.",
dashboard: "Dashboard",
weather: "Weather",
soilAnalysis: "Soil Analysis",
marketPrices: "Market Prices",
diseaseDetect: "Disease Detection",
signOut: "Sign Out",
navigation: "Navigation",
weatherIntelligence: "Weather Intelligence",
liveWeatherData: "Live Weather Data",
weatherSubtitle: "Real-time temperature, humidity, and wind speed for any city — plan your farm activities with confidence.",

enterCity: "Enter city name (e.g. Pune, Nagpur, Mysuru…)",
getWeather: "Get Weather",
fetchingWeather: "Fetching…",

quickSelect: "Quick select:",

fetchingLiveWeather: "Fetching live weather data…",

feelsLike: "Feels like",

humidity: "Humidity",
wind: "Wind",
pressure: "Pressure",
speed: "Speed",

cropSuitability: "Crop Suitability",
irrigationAdvice: "Irrigation Advice",
windAdvisory: "Wind Advisory",

extremeHeat: "Extreme heat — schedule early-morning irrigation",
hotWeather: "Hot — ensure adequate soil moisture",
warmWeather: "Warm — ideal for most crops",
coolWeather: "Cool — watch for frost risk at night",
coldWeather: "Cold — protect frost-sensitive crops",

veryHumid: "Very Humid",
humid: "Humid",
comfortable: "Comfortable",
dry: "Dry",

strongWind: "Strong wind — avoid spraying, protect tall crops",
moderateWind: "Moderate wind — suitable for pesticide spraying",
calmWind: "Calm — ideal for drone operations and spraying",

excellentCrops: "Excellent for rice, sugarcane, banana, and tropical vegetables.",
goodCrops: "Good for wheat, barley, mustard, potato, and winter crops.",
coolCrops: "Cool weather — consider leafy greens, peas, carrots, and cauliflower.",

lowHumidity: "Low humidity — irrigate fields today to prevent crop stress.",
moderateHumidity: "Moderate humidity — check soil moisture and water as needed.",
highHumidity: "Sufficient humidity — reduce irrigation to avoid waterlogging.",
loginFailed: "Login failed. Please check your credentials.",

welcomeBack: "Welcome back",
signInAccount: "Sign in to your AgriMate account",

emailAddress: "Email address",
password: "Password",

emailPlaceholder: "you@example.com",
passwordPlaceholder: "Your password",

signIn: "Sign In →",
signingIn: "Signing in…",

noAccount: "Don't have an account?",
createAccount: "Create one →",

tagline: "The farmer is the man who feeds us all.",

featureWeather: "Real-time weather intelligence for every field",
featureSoil: "AI-powered soil nutrient recommendations",
featureMarket: "Live crop market prices & trading signals",
featureDisease: "Instant plant disease detection from images",
enterFullName: "Please enter your full name.",
passwordMismatch: "Passwords do not match.",
passwordLength: "Password must be at least 6 characters.",
registrationFailed: "Registration failed. This email may already be registered.",

tooShort: "Too short",
weak: "Weak",
fair: "Fair",
strong: "Strong",

backToLogin: "Back to sign in",

createAccount: "Create your account",
joinFarmers: "Join thousands of farmers using AI-powered insights",

fullName: "Full name",
namePlaceholder: "Ramesh Kumar",

passwordMin: "Min 6 characters",
confirmPassword: "Confirm password",
repeatPassword: "Repeat password",

creatingAccount: "Creating account…",
createAccountBtn: "Create Account →",

alreadyAccount: "Already have an account?",
signIn: "Sign in →",

termsText: "By creating an account, you agree to our Terms of Service and Privacy Policy.",

agricultureQuote: "Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.",

activeFarmers: "Active Farmers",
diseaseTypes: "Disease Types",
liveUpdates: "Live Data Updates",
cropsSupported: "Crops Supported",
soilIntelligence: "Soil Intelligence",
soilAnalysis: "Soil Analysis",
soilSubtitle: "Input your soil's NPK values and moisture level to receive precise fertilizer and irrigation recommendations.",

soilParameters: "Soil Parameters",
loadPreset: "Load preset:",

sandySoil: "Sandy Soil",
claySoil: "Clay Soil",
loamSoil: "Loam Soil",
dryField: "Dry Field",

soilMoisture: "Soil Moisture (%)",
moistureIdeal: "Ideal range: 30–70%",

nitrogen: "Nitrogen (N) mg/kg",
nitrogenIdeal: "Ideal: 50+",

phosphorus: "Phosphorus (P) mg/kg",
phosphorusIdeal: "Ideal: 40+",

moisture: "Moisture",

analyzeSoil: "Analyze Soil",
analyzing: "Analyzing…",

analysisFailed: "Analysis failed. Please try again.",

analysisComplete: "Analysis Complete",
fertilizerRecommendation: "Fertilizer Recommendation",
irrigationStatus: "Irrigation Status",

npkGuide: "NPK Guide",

nitrogenGuide: "Promotes leaf growth and greenness. Deficiency shows as yellowing of older leaves.",
phosphorusGuide: "Essential for root development and flowering. Deficiency causes purple discoloration.",
potassiumGuide: "Strengthens disease resistance. Deficiency shows as browning leaf edges.",
moistureGuide: "Below 30% → immediate irrigation needed. Above 70% → risk of root rot.",
marketIntelligence: "Market Intelligence",
cropMarketPrices: "Crop Market Prices",
marketSubtitle: "Current Indian mandi & MSP-based prices, trend analysis, and smart selling recommendations.",

selectCrop: "Select a Crop",
customCrop: "Custom Crop",

typeCropName: "Type any crop name…",
search: "Search",

fetchingMarket: "Fetching market data…",
marketSuggestion: "Market Suggestion",

trend: "Trend",
msp: "MSP",
updated: "Updated",

recentQueries: "Recent Queries",

selectCropMessage: "Select a crop to see prices",
priceDescription: "Prices based on Indian MSP and current mandi data with daily variance.",

increasing: "Increasing",
decreasing: "Decreasing",
stable: "Stable",

perQuintal: "/ quintal",

analysisError: "Could not fetch market data.",
selectCropMessage: "Select a crop to see prices",
priceDescription: "Prices based on Indian MSP and current mandi data with daily variance."
    }
  },
  hi: {
    translation: {
      diseaseDetection: "रोग पहचान",
      uploadImage: "पौधे की तस्वीर अपलोड करें",
      detectDisease: "रोग पहचानें",
      dropPhoto: "अपने पौधे की फोटो यहाँ डालें",
      reset: "रीसेट करें",
      chooseFile: "छवि  चुनें",
      noImage: "अभी तक कोई छवि विश्लेषित नहीं हुई",
      description: "रोग पहचान, उपचार और रोकथाम के लिए संक्रमित पौधे की पत्ती की फोटो अपलोड करें।",
      browseFiles: "या फ़ाइल ब्राउज़ करने के लिए क्लिक करें",
      fileTypes: "JPG, PNG, WEBP — अधिकतम 10MB",
      uploadAdvice: "तुरंत पहचान और उपचार सलाह के लिए प्रभावित पौधे की पत्ती की स्पष्ट फोटो अपलोड करें",
      detectable: "पहचाने जा सकने वाले रोग",
      photoTips: "फोटो सुझाव",
tip1: "प्राकृतिक रोशनी का उपयोग करें — छाया और फ्लैश से बचें।",
tip2: "प्रभावित हिस्से को साफ़ दिखाते हुए फोटो लें ताकि वह फ्रेम का अधिकतर भाग भरे।",
tip3: "सटीकता के लिए स्वस्थ और रोगग्रस्त दोनों हिस्सों को शामिल करें।",
tip4: "फोन को स्थिर रखें और कम से कम 5MP रिज़ॉल्यूशन का उपयोग करें।",
plantHealthAI: "पौधा स्वास्थ्य एआई",
goodMorning: "सुप्रभात",
goodAfternoon: "नमस्कार",
goodEvening: "शुभ संध्या",
dashboardOverview: "यह आपके कृषि इंटेलिजेंस का अवलोकन है। शुरू करने के लिए किसी मॉड्यूल का चयन करें।",

modulesActive: "सक्रिय मॉड्यूल",
dataSources: "डेटा स्रोत",
cropsSupported: "समर्थित फसलें",
detectionSpeed: "पहचान की गति",

quickAccess: "त्वरित पहुंच",

checkWeather: "मौसम जांचें",
weatherDesc: "किसी भी शहर के लिए लाइव तापमान, आर्द्रता और हवा की जानकारी",

soilAnalysis: "मिट्टी विश्लेषण",
soilDesc: "उर्वरक और सिंचाई की सलाह प्राप्त करें",

marketPrices: "बाजार भाव",
marketDesc: "आज की फसल कीमतें और रुझान संकेत",

diseaseDetection: "रोग पहचान",
diseaseDesc: "तुरंत पहचान के लिए पत्ती की फोटो अपलोड करें",

goButton: "जाएं",

todayFarmingTips: "आज के कृषि सुझाव",

farmTip1: "वाष्पीकरण कम करने के लिए सुबह जल्दी फसलों को पानी दें।",
farmTip2: "मिट्टी में प्राकृतिक रूप से नाइट्रोजन बढ़ाने के लिए हर मौसम में फसल चक्र अपनाएं।",
farmTip3: "मिट्टी के तापमान पर ध्यान दें — अधिकांश बीज 18–24°C के बीच सबसे अच्छा अंकुरित होते हैं।",
farmTip4: "एफिड नियंत्रण के लिए लेडीबग्स और लेसविंग्स जैसे प्राकृतिक शिकारी शामिल करें।",

gettingStarted: "शुरुआत करें",

step1Title: "मौसम जांचें",
step1Desc: "अपने क्षेत्र के लिए रीयल-टाइम मौसम की जानकारी से दिन की शुरुआत करें।",

step2Title: "मिट्टी का विश्लेषण करें",
step2Desc: "उर्वरक सिफारिशों के लिए NPK रीडिंग दर्ज करें।",

step3Title: "बाजार देखें",
step3Desc: "फसल की कीमतों को ट्रैक करें और समझदारी से बेचें या रोककर रखें।",

step4Title: "रोग पहचानें",
step4Desc: "तुरंत एआई पहचान के लिए संक्रमित पत्ती की फोटो अपलोड करें।",
dashboard: "डैशबोर्ड",
weather: "मौसम",
soilAnalysis: "मिट्टी विश्लेषण",
marketPrices: "बाजार भाव",
diseaseDetect: "रोग पहचान",
signOut: "साइन आउट",
navigation: "नेविगेशन",
weatherIntelligence: "मौसम विश्लेषण",
liveWeatherData: "लाइव मौसम डेटा",
weatherSubtitle: "किसी भी शहर के लिए रियल-टाइम तापमान, आर्द्रता और हवा की गति — अपने कृषि कार्यों की योजना आत्मविश्वास के साथ बनाएं।",

enterCity: "शहर का नाम दर्ज करें (जैसे पुणे, नागपुर, मैसूर…)",
getWeather: "मौसम देखें",
fetchingWeather: "प्राप्त किया जा रहा है…",

quickSelect: "त्वरित चयन:",

fetchingLiveWeather: "लाइव मौसम डेटा प्राप्त किया जा रहा है…",

feelsLike: "महसूस होता है",

humidity: "आर्द्रता",
wind: "हवा",
pressure: "दबाव",
speed: "गति",

cropSuitability: "फसल उपयुक्तता",
irrigationAdvice: "सिंचाई सलाह",
windAdvisory: "हवा संबंधी सलाह",

extremeHeat: "अत्यधिक गर्मी — सुबह जल्दी सिंचाई करें",
hotWeather: "गर्म मौसम — मिट्टी की नमी बनाए रखें",
warmWeather: "अनुकूल तापमान — अधिकांश फसलों के लिए अच्छा",
coolWeather: "ठंडा मौसम — रात में पाले का खतरा",
coldWeather: "ठंड — पाला-संवेदनशील फसलों की रक्षा करें",

veryHumid: "बहुत अधिक आर्द्र",
humid: "आर्द्र",
comfortable: "अनुकूल",
dry: "शुष्क",

strongWind: "तेज़ हवा — स्प्रे करने से बचें और ऊंची फसलों की रक्षा करें",
moderateWind: "मध्यम हवा — कीटनाशक छिड़काव के लिए उपयुक्त",
calmWind: "शांत हवा — ड्रोन संचालन और स्प्रे के लिए आदर्श",

excellentCrops: "धान, गन्ना, केला और उष्णकटिबंधीय सब्जियों के लिए उत्कृष्ट।",
goodCrops: "गेहूं, जौ, सरसों, आलू और रबी फसलों के लिए अच्छा।",
coolCrops: "ठंडे मौसम में पालक, मटर, गाजर और फूलगोभी उगाने पर विचार करें।",

lowHumidity: "कम आर्द्रता — फसल तनाव से बचाने के लिए आज सिंचाई करें।",
moderateHumidity: "मध्यम आर्द्रता — मिट्टी की नमी जांचें और आवश्यकतानुसार पानी दें।",
highHumidity: "पर्याप्त आर्द्रता — जलभराव से बचने के लिए सिंचाई कम करें।",
loginFailed: "लॉगिन विफल हुआ। कृपया अपनी जानकारी जांचें।",

welcomeBack: "वापसी पर स्वागत है",
signInAccount: "अपने AgriMate खाते में साइन इन करें",

emailAddress: "ईमेल पता",
password: "पासवर्ड",

emailPlaceholder: "you@example.com",
passwordPlaceholder: "अपना पासवर्ड दर्ज करें",

signIn: "साइन इन →",
signingIn: "साइन इन हो रहा है…",

noAccount: "क्या आपका खाता नहीं है?",
createAccount: "नया खाता बनाएं →",

tagline: "किसान वह व्यक्ति है जो हम सभी को भोजन देता है।",

featureWeather: "हर खेत के लिए रियल-टाइम मौसम जानकारी",
featureSoil: "एआई आधारित मिट्टी पोषक तत्व सुझाव",
featureMarket: "फसलों के लाइव बाजार भाव और ट्रेडिंग संकेत",
featureDisease: "तस्वीर से तुरंत पौधों की बीमारी पहचान",
enterFullName: "कृपया अपना पूरा नाम दर्ज करें।",
passwordMismatch: "पासवर्ड मेल नहीं खाते।",
passwordLength: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
registrationFailed: "पंजीकरण विफल हुआ। यह ईमेल पहले से पंजीकृत हो सकता है।",

tooShort: "बहुत छोटा",
weak: "कमज़ोर",
fair: "सामान्य",
strong: "मजबूत",

backToLogin: "साइन इन पर वापस जाएँ",

createAccount: "अपना खाता बनाएं",
joinFarmers: "एआई आधारित जानकारी का उपयोग करने वाले हजारों किसानों से जुड़ें",

fullName: "पूरा नाम",
namePlaceholder: "रमेश कुमार",

passwordMin: "कम से कम 6 अक्षर",
confirmPassword: "पासवर्ड की पुष्टि करें",
repeatPassword: "पासवर्ड दोबारा लिखें",

creatingAccount: "खाता बनाया जा रहा है…",
createAccountBtn: "खाता बनाएं →",

alreadyAccount: "क्या आपके पास पहले से खाता है?",
signIn: "साइन इन करें →",

termsText: "खाता बनाकर आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत होते हैं।",

agricultureQuote: "कृषि हमारा सबसे बुद्धिमान प्रयास है, क्योंकि अंततः यह वास्तविक संपत्ति, अच्छे नैतिक मूल्यों और खुशी में सबसे अधिक योगदान देगा।",

activeFarmers: "सक्रिय किसान",
diseaseTypes: "रोग के प्रकार",
liveUpdates: "24/7 लाइव डेटा अपडेट",
cropsSupported: "समर्थित फसलें",
soilIntelligence: "मिट्टी विश्लेषण प्रणाली",
soilAnalysis: "मिट्टी विश्लेषण",
soilSubtitle: "अपनी मिट्टी के NPK मान और नमी स्तर दर्ज करें और उर्वरक व सिंचाई के लिए सटीक सुझाव प्राप्त करें।",

soilParameters: "मिट्टी के पैरामीटर",
loadPreset: "प्रीसेट लोड करें:",

sandySoil: "रेतीली मिट्टी",
claySoil: "चिकनी मिट्टी",
loamSoil: "दोमट मिट्टी",
dryField: "सूखा खेत",

soilMoisture: "मिट्टी की नमी (%)",
moistureIdeal: "आदर्श सीमा: 30–70%",

nitrogen: "नाइट्रोजन (N) mg/kg",
nitrogenIdeal: "आदर्श: 50+",

phosphorus: "फॉस्फोरस (P) mg/kg",
phosphorusIdeal: "आदर्श: 40+",

moisture: "नमी",

analyzeSoil: "मिट्टी का विश्लेषण करें",
analyzing: "विश्लेषण किया जा रहा है…",

analysisFailed: "विश्लेषण विफल हुआ। कृपया फिर प्रयास करें।",

analysisComplete: "विश्लेषण पूर्ण",
fertilizerRecommendation: "उर्वरक की सिफारिश",
irrigationStatus: "सिंचाई स्थिति",

npkGuide: "NPK मार्गदर्शिका",

nitrogenGuide: "पत्तियों की वृद्धि और हरियाली बढ़ाता है। कमी होने पर पुरानी पत्तियाँ पीली हो जाती हैं।",
phosphorusGuide: "जड़ विकास और फूल बनने के लिए आवश्यक। कमी होने पर पत्तियों में बैंगनी रंग दिखता है।",
potassiumGuide: "रोग प्रतिरोधक क्षमता बढ़ाता है। कमी होने पर पत्तियों के किनारे भूरे हो जाते हैं।",
moistureGuide: "30% से कम → तुरंत सिंचाई आवश्यक। 70% से अधिक → जड़ों के सड़ने का खतरा।",
marketIntelligence: "बाजार विश्लेषण",
cropMarketPrices: "फसल बाजार भाव",
marketSubtitle: "भारतीय मंडी और MSP आधारित वर्तमान कीमतें, ट्रेंड विश्लेषण और स्मार्ट बिक्री सुझाव।",

selectCrop: "फसल चुनें",
customCrop: "कस्टम फसल",

typeCropName: "किसी भी फसल का नाम लिखें…",
search: "खोजें",

fetchingMarket: "बाजार डेटा प्राप्त किया जा रहा है…",
marketSuggestion: "बाजार सुझाव",

trend: "रुझान",
msp: "न्यूनतम समर्थन मूल्य (MSP)",
updated: "अपडेट",

recentQueries: "हाल की खोजें",

selectCropMessage: "कीमत देखने के लिए फसल चुनें",
priceDescription: "कीमतें भारतीय MSP और वर्तमान मंडी डेटा पर आधारित हैं।",

increasing: "बढ़ रहा है",
decreasing: "घट रहा है",
stable: "स्थिर",

perQuintal: "/ क्विंटल",

analysisError: "बाजार डेटा प्राप्त नहीं हो सका।",
selectCropMessage: "कीमत देखने के लिए फसल चुनें",
priceDescription: "कीमतें भारतीय MSP और वर्तमान मंडी डेटा पर आधारित हैं।"
    }
  },
kn: {
  translation: {

diseaseDetection: "ರೋಗ ಪತ್ತೆ",
uploadImage: "ಸಸ್ಯದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
detectDisease: "ರೋಗವನ್ನು ಪತ್ತೆಹಚ್ಚಿ",
reset: "ರೀಸೆಟ್",
dropPhoto: "ನಿಮ್ಮ ಸಸ್ಯದ ಫೋಟೋವನ್ನು ಇಲ್ಲಿ ಬಿಡಿ",
chooseFile: "ಚಿತ್ರ ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ",
noImage: "ಇನ್ನೂ ಯಾವುದೇ ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ ಆಗಿಲ್ಲ",
description: "ರೋಗ ಗುರುತಿಸುವಿಕೆ, ಚಿಕಿತ್ಸೆ ಮತ್ತು ತಡೆಗಟ್ಟುವ ಸಲಹೆಗಾಗಿ ಸೋಂಕಿತ ಎಲೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
browseFiles: "ಅಥವಾ ಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
fileTypes: "JPG, PNG, WEBP — ಗರಿಷ್ಠ 10MB",
uploadAdvice: "ತಕ್ಷಣದ ಗುರುತು ಮತ್ತು ಚಿಕಿತ್ಸೆ ಸಲಹೆಗಾಗಿ ಪೀಡಿತ ಸಸ್ಯದ ಎಲೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
detectable: "ಪತ್ತೆಹಚ್ಚಬಹುದಾದ ರೋಗಗಳು",
photoTips: "ಫೋಟೋ ಸಲಹೆಗಳು",

tip1: "ಸ್ವಾಭಾವಿಕ ಬೆಳಕನ್ನು ಬಳಸಿ — ನೆರಳು ಮತ್ತು ಫ್ಲ್ಯಾಶ್ ತಪ್ಪಿಸಿ.",
tip2: "ಪೀಡಿತ ಭಾಗವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಸೆರೆಹಿಡಿಯಿರಿ ಮತ್ತು ಅದು ಫ್ರೇಮ್‌ನ ಹೆಚ್ಚಿನ ಭಾಗವನ್ನು ತುಂಬಲಿ.",
tip3: "ನಿಖರತೆಯಿಗಾಗಿ ಆರೋಗ್ಯಕರ ಮತ್ತು ರೋಗಗ್ರಸ್ತ ಭಾಗಗಳನ್ನು ಎರಡನ್ನೂ ಸೇರಿಸಿ.",
tip4: "ಫೋನ್ ಸ್ಥಿರವಾಗಿ ಹಿಡಿದು ಕನಿಷ್ಠ 5MP ರೆಸಲ್ಯೂಶನ್ ಬಳಸಿ.",

plantHealthAI: "ಸಸ್ಯ ಆರೋಗ್ಯ AI",

goodMorning: "ಶುಭೋದಯ",
goodAfternoon: "ನಮಸ್ಕಾರ",
goodEvening: "ಶುಭ ಸಂಜೆ",

dashboardOverview: "ಇದು ನಿಮ್ಮ ಕೃಷಿ ಮಾಹಿತಿ ವ್ಯವಸ್ಥೆಯ ಅವಲೋಕನವಾಗಿದೆ. ಪ್ರಾರಂಭಿಸಲು ಒಂದು ಮೋಡ್ಯೂಲ್ ಆಯ್ಕೆಮಾಡಿ.",

modulesActive: "ಸಕ್ರಿಯ ಮೋಡ್ಯೂಲ್‌ಗಳು",
dataSources: "ಡೇಟಾ ಮೂಲಗಳು",
cropsSupported: "ಬೆಂಬಲಿತ ಬೆಳೆಗಳು",
detectionSpeed: "ಪತ್ತೆಹಚ್ಚುವ ವೇಗ",

quickAccess: "ತ್ವರಿತ ಪ್ರವೇಶ",

checkWeather: "ಹವಾಮಾನ ಪರಿಶೀಲಿಸಿ",
weatherDesc: "ಯಾವುದೇ ನಗರದಿಗಾಗಿ ನೇರ ತಾಪಮಾನ, ತೇವಾಂಶ ಮತ್ತು ಗಾಳಿಯ ಮಾಹಿತಿ",

soilAnalysis: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ",
soilDesc: "ಗೊಬ್ಬರ ಮತ್ತು ನೀರಾವರಿ ಸಲಹೆ ಪಡೆಯಿರಿ",

marketPrices: "ಬಜಾರ್ ಬೆಲೆಗಳು",
marketDesc: "ಇಂದಿನ ಬೆಳೆ ಬೆಲೆಗಳು ಮತ್ತು ಪ್ರವೃತ್ತಿ ಸೂಚನೆಗಳು",

diseaseDetection: "ರೋಗ ಪತ್ತೆ",
diseaseDesc: "ತಕ್ಷಣದ ವಿಶ್ಲೇಷಣೆಗೆ ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",

goButton: "ಹೋಗಿ",

todayFarmingTips: "ಇಂದಿನ ಕೃಷಿ ಸಲಹೆಗಳು",

farmTip1: "ಆವಿಯಾಗುವಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಬೆಳಿಗ್ಗೆ ಬೇಗನೆ ಬೆಳೆಗಳಿಗೆ ನೀರು ಹಾಕಿ.",
farmTip2: "ಪ್ರತಿ ಋತುವಿನಲ್ಲಿ ಬೆಳೆಗಳನ್ನು ಪರಿವರ್ತಿಸಿ ಮಣ್ಣಿನ ನೈಟ್ರೋಜನ್ ಅನ್ನು ಸಹಜವಾಗಿ ಹೆಚ್ಚಿಸಿ.",
farmTip3: "ಮಣ್ಣಿನ ತಾಪಮಾನವನ್ನು ಗಮನಿಸಿ — ಹೆಚ್ಚಿನ ಬೀಜಗಳು 18–24°C ನಡುವೆ ಉತ್ತಮವಾಗಿ ಮೊಳೆಯುತ್ತವೆ.",
farmTip4: "ಆಫಿಡ್ ನಿಯಂತ್ರಣಕ್ಕೆ ಲೇಡಿಬಗ್ಸ್ ಮತ್ತು ಲೇಸ್ವಿಂಗ್‌ಗಳನ್ನು ಸಹಜ ಶತ್ರುಗಳಾಗಿ ಬಳಸಿ.",

gettingStarted: "ಪ್ರಾರಂಭಿಸುವುದು",

step1Title: "ಹವಾಮಾನ ಪರಿಶೀಲಿಸಿ",
step1Desc: "ನಿಮ್ಮ ಪ್ರದೇಶದ ನೈಜ ಸಮಯದ ಪರಿಸ್ಥಿತಿಗಳೊಂದಿಗೆ ದಿನವನ್ನು ಪ್ರಾರಂಭಿಸಿ.",

step2Title: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
step2Desc: "ಗೊಬ್ಬರ ಸಲಹೆಗಳಿಗಾಗಿ NPK ಮೌಲ್ಯಗಳನ್ನು ನಮೂದಿಸಿ.",

step3Title: "ಬಜಾರ್ ಗಮನಿಸಿ",
step3Desc: "ಬೆಳೆ ಬೆಲೆಗಳನ್ನು ಗಮನಿಸಿ ಮತ್ತು ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಮಾರಾಟ ಮಾಡಿ.",

step4Title: "ರೋಗ ಪತ್ತೆಹಚ್ಚಿ",
step4Desc: "ರೋಗಪೀಡಿತ ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ತಕ್ಷಣದ AI ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ.",

dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
weather: "ಹವಾಮಾನ",
soilAnalysis: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ",
marketPrices: "ಬಜಾರ್ ಬೆಲೆಗಳು",
diseaseDetect: "ರೋಗ ಪತ್ತೆ",
signOut: "ಲಾಗ್ ಔಟ್",
navigation: "ನೆವಿಗೇಶನ್",

weatherIntelligence: "ಹವಾಮಾನ ವಿಶ್ಲೇಷಣೆ",
liveWeatherData: "ನೈಜ ಸಮಯದ ಹವಾಮಾನ ಡೇಟಾ",

weatherSubtitle: "ಯಾವುದೇ ನಗರದಿಗಾಗಿ ನೈಜ ಸಮಯದ ತಾಪಮಾನ, ತೇವಾಂಶ ಮತ್ತು ಗಾಳಿಯ ವೇಗ — ನಿಮ್ಮ ಕೃಷಿ ಕಾರ್ಯಗಳನ್ನು ವಿಶ್ವಾಸದಿಂದ ಯೋಜಿಸಿ.",

enterCity: "ನಗರದ ಹೆಸರು ನಮೂದಿಸಿ (ಉದಾ: Pune, Nagpur, Mysuru…)",
getWeather: "ಹವಾಮಾನ ನೋಡಿ",
fetchingWeather: "ಮಾಹಿತಿ ಪಡೆಯಲಾಗುತ್ತಿದೆ…",

quickSelect: "ತ್ವರಿತ ಆಯ್ಕೆ:",

fetchingLiveWeather: "ನೈಜ ಸಮಯದ ಹವಾಮಾನ ಡೇಟಾ ಪಡೆಯಲಾಗುತ್ತಿದೆ…",

feelsLike: "ಅನಿಸುವ ತಾಪಮಾನ",

humidity: "ತೇವಾಂಶ",
wind: "ಗಾಳಿ",
pressure: "ಒತ್ತಡ",
speed: "ವೇಗ",

cropSuitability: "ಬೆಳೆ ಹೊಂದಾಣಿಕೆ",
irrigationAdvice: "ನೀರಾವರಿ ಸಲಹೆ",
windAdvisory: "ಗಾಳಿ ಸಲಹೆ",

extremeHeat: "ಅತಿಯಾದ ಬಿಸಿಲು — ಬೆಳಿಗ್ಗೆ ಬೇಗ ನೀರಾವರಿ ಮಾಡಿ",
hotWeather: "ಬಿಸಿ — ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಉಳಿಸಿ",
warmWeather: "ಬಿಸಿ — ಹೆಚ್ಚಿನ ಬೆಳೆಗಳಿಗೆ ಸೂಕ್ತ",
coolWeather: "ತಂಪು — ರಾತ್ರಿ ಹಿಮಪಾತದ ಅಪಾಯ",
coldWeather: "ಚಳಿ — ಹಿಮಪಾತಕ್ಕೆ ಸಂವೇದನಾಶೀಲ ಬೆಳೆಗಳನ್ನು ರಕ್ಷಿಸಿ",

veryHumid: "ಬಹಳ ತೇವಾಂಶ",
humid: "ತೇವಾಂಶಯುಕ್ತ",
comfortable: "ಆರಾಮದಾಯಕ",
dry: "ಒಣ",

strongWind: "ಬಲವಾದ ಗಾಳಿ — ಸ್ಪ್ರೇ ತಪ್ಪಿಸಿ, ಎತ್ತರದ ಬೆಳೆಗಳನ್ನು ರಕ್ಷಿಸಿ",
moderateWind: "ಮಧ್ಯಮ ಗಾಳಿ — ಕೀಟನಾಶಕ ಸಿಂಪಡಣೆಗೆ ಸೂಕ್ತ",
calmWind: "ಶಾಂತ ಗಾಳಿ — ಡ್ರೋನ್ ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ಸಿಂಪಡಣೆಗೆ ಸೂಕ್ತ",

excellentCrops: "ಅಕ್ಕಿ, ಕಬ್ಬು, ಬಾಳೆ ಮತ್ತು ಉಷ್ಣವಲಯದ ತರಕಾರಿಗಳಿಗೆ ಅತ್ಯುತ್ತಮ.",
goodCrops: "ಗೋಧಿ, ಜೋಳ, ಸಾಸಿವೆ, ಆಲೂಗಡ್ಡೆ ಮತ್ತು ಚಳಿಗಾಲದ ಬೆಳೆಗಳಿಗೆ ಉತ್ತಮ.",
coolCrops: "ತಂಪಾದ ಹವಾಮಾನ — ಪಾಲಕ್, ಬಟಾಣಿ, ಕ್ಯಾರೆಟ್ ಮತ್ತು ಕಾಲಿಫ್ಲವರ್ ಬೆಳೆಗಳಿಗೆ ಸೂಕ್ತ.",

lowHumidity: "ಕಡಿಮೆ ತೇವಾಂಶ — ಬೆಳೆ ಒತ್ತಡ ತಪ್ಪಿಸಲು ಇಂದು ನೀರಾವರಿ ಮಾಡಿ.",
moderateHumidity: "ಮಧ್ಯಮ ತೇವಾಂಶ — ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ.",
highHumidity: "ಸಾಕಷ್ಟು ತೇವಾಂಶ — ನೀರಾವರಿ ಕಡಿಮೆ ಮಾಡಿ.",

loginFailed: "ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",

welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
signInAccount: "ನಿಮ್ಮ AgriMate ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ",

emailAddress: "ಇಮೇಲ್ ವಿಳಾಸ",
password: "ಪಾಸ್‌ವರ್ಡ್",

emailPlaceholder: "you@example.com",
passwordPlaceholder: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",

signIn: "ಸೈನ್ ಇನ್ →",
signingIn: "ಸೈನ್ ಇನ್ ಆಗುತ್ತಿದೆ…",

noAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
createAccount: "ಹೊಸ ಖಾತೆ ರಚಿಸಿ →",

tagline: "ಕೃಷಿಕನು ನಮ್ಮೆಲ್ಲರಿಗೂ ಆಹಾರ ನೀಡುವ ವ್ಯಕ್ತಿ.",

featureWeather: "ಪ್ರತಿ ಹೊಲಕ್ಕೆ ನೈಜ ಸಮಯದ ಹವಾಮಾನ ಮಾಹಿತಿ",
featureSoil: "AI ಆಧಾರಿತ ಮಣ್ಣಿನ ಪೋಷಕಾಂಶ ಸಲಹೆಗಳು",
featureMarket: "ನೈಜ ಸಮಯದ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
featureDisease: "ಚಿತ್ರಗಳಿಂದ ತಕ್ಷಣದ ಸಸ್ಯ ರೋಗ ಪತ್ತೆ",

marketIntelligence: "ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ",
cropMarketPrices: "ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",

selectCrop: "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
customCrop: "ಕಸ್ಟಮ್ ಬೆಳೆ",

typeCropName: "ಯಾವುದೇ ಬೆಳೆ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ…",
search: "ಹುಡುಕಿ",

fetchingMarket: "ಮಾರುಕಟ್ಟೆ ಡೇಟಾ ಪಡೆಯಲಾಗುತ್ತಿದೆ…",

trend: "ಪ್ರವೃತ್ತಿ",
msp: "MSP",
updated: "ನವೀಕರಿಸಲಾಗಿದೆ",

selectCropMessage: "ಬೆಲೆಗಳನ್ನು ನೋಡಲು ಒಂದು ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",

priceDescription: "ಬೆಲೆಗಳು ಭಾರತೀಯ MSP ಮತ್ತು ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಡೇಟಾದ ಮೇಲೆ ಆಧಾರಿತವಾಗಿವೆ.",

increasing: "ಹೆಚ್ಚುತ್ತಿದೆ",
decreasing: "ಕಡಿಮೆಯಾಗುತ್ತಿದೆ",
stable: "ಸ್ಥಿರ",

perQuintal: "/ ಕ್ವಿಂಟಲ್",

analysisError: "ಮಾರುಕಟ್ಟೆ ಡೇಟಾ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
soilSubtitle: "ನಿಮ್ಮ ಮಣ್ಣಿನ NPK ಮೌಲ್ಯಗಳು ಮತ್ತು ತೇವಾಂಶ ಮಟ್ಟವನ್ನು ನಮೂದಿಸಿ, ನಿಖರವಾದ ಗೊಬ್ಬರ ಮತ್ತು ನೀರಾವರಿ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.",

nitrogenGuide: "ಎಲೆಗಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ಹಸಿರನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ. ಕೊರತೆಯಾದರೆ ಹಳೆಯ ಎಲೆಗಳು ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುತ್ತವೆ.",

phosphorusGuide: "ಬೇರುಗಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ಹೂಬೀಳುವಿಕೆಗೆ ಅಗತ್ಯ. ಕೊರತೆಯಾದರೆ ಎಲೆಗಳಲ್ಲಿ ನೇರಳೆ ಬಣ್ಣ ಕಾಣಿಸಬಹುದು.",

potassiumGuide: "ರೋಗ ನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. ಕೊರತೆಯಾದರೆ ಎಲೆಗಳ ಅಂಚುಗಳು ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗುತ್ತವೆ.",

moistureGuide: "30% ಕ್ಕಿಂತ ಕಡಿಮೆ → ತಕ್ಷಣ ನೀರಾವರಿ ಅಗತ್ಯ. 70% ಕ್ಕಿಂತ ಹೆಚ್ಚು → ಬೇರು ಕುಲುಷಿತವಾಗುವ ಅಪಾಯ.",

marketSubtitle: "ಭಾರತೀಯ ಮಂಡಿ ಮತ್ತು MSP ಆಧಾರಿತ ಪ್ರಸ್ತುತ ಬೆಲೆಗಳು, ಪ್ರವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಬುದ್ಧಿವಂತ ಮಾರಾಟ ಸಲಹೆಗಳು."

  }
},
te: {
translation: {

diseaseDetection: "రోగ గుర్తింపు",
uploadImage: "మొక్క యొక్క చిత్రం అప్‌లోడ్ చేయండి",
detectDisease: "రోగాన్ని గుర్తించండి",
reset: "రీసెట్",
dropPhoto: "మీ మొక్క ఫోటోను ఇక్కడ వదలండి",
chooseFile: "చిత్ర ఫైల్ ఎంచుకోండి",
noImage: "ఇప్పటివరకు ఎలాంటి చిత్రం విశ్లేషించబడలేదు",

description: "రోగ నిర్ధారణ, చికిత్స మరియు నివారణ కోసం బాధిత మొక్క ఆకుల ఫోటోను అప్‌లోడ్ చేయండి.",
browseFiles: "లేదా ఫైళ్లను బ్రౌజ్ చేయడానికి క్లిక్ చేయండి",
fileTypes: "JPG, PNG, WEBP — గరిష్టం 10MB",
uploadAdvice: "తక్షణ నిర్ధారణ కోసం ప్రభావిత ఆకుల స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి",

detectable: "గుర్తించగల పరిస్థితులు",
photoTips: "ఫోటో సూచనలు",

tip1: "సహజ కాంతిని ఉపయోగించండి — నీడలు మరియు ఫ్లాష్‌ను తప్పించండి.",
tip2: "ప్రభావిత భాగాన్ని స్పష్టంగా తీసి ఫ్రేమ్‌లో ఎక్కువ భాగం నింపండి.",
tip3: "ఖచ్చితత్వం కోసం ఆరోగ్యకరమైన మరియు రోగగ్రస్త భాగాలను రెండింటినీ చూపండి.",
tip4: "ఫోన్‌ను స్థిరంగా ఉంచి కనీసం 5MP రిజల్యూషన్ ఉపయోగించండి.",

plantHealthAI: "మొక్కల ఆరోగ్య AI",

goodMorning: "శుభోదయం",
goodAfternoon: "నమస్కారం",
goodEvening: "శుభ సాయంత్రం",

dashboardOverview: "ఇది మీ వ్యవసాయ సమాచార సమగ్ర అవలోకనం. ప్రారంభించడానికి ఒక మాడ్యూల్‌ను ఎంచుకోండి.",

modulesActive: "సక్రియ మాడ్యూల్స్",
dataSources: "డేటా మూలాలు",
cropsSupported: "మద్దతు ఉన్న పంటలు",
detectionSpeed: "గుర్తింపు వేగం",

quickAccess: "త్వరిత ప్రాప్యత",

checkWeather: "వాతావరణం చూడండి",
weatherDesc: "ఏ నగరానికైనా ప్రత్యక్ష ఉష్ణోగ్రత, తేమ మరియు గాలి సమాచారం",

soilAnalysis: "మట్టి విశ్లేషణ",
soilDesc: "ఎరువు మరియు నీటి సలహాలు పొందండి",

marketPrices: "మార్కెట్ ధరలు",
marketDesc: "ఈ రోజు పంట ధరలు మరియు ట్రెండ్ సంకేతాలు",

diseaseDesc: "తక్షణ నిర్ధారణ కోసం ఆకుల ఫోటో అప్‌లోడ్ చేయండి",

goButton: "వెళ్ళండి",

todayFarmingTips: "ఈరోజు వ్యవసాయ సూచనలు",

farmTip1: "ఆవిరీభవనాన్ని తగ్గించడానికి తెల్లవారుజామున పంటలకు నీరు పెట్టండి.",
farmTip2: "ప్రతి సీజన్‌లో పంటలను మారుస్తూ మట్టిలో నైట్రోజన్‌ను సహజంగా పునరుద్ధరించండి.",
farmTip3: "మట్టి ఉష్ణోగ్రతను గమనించండి — చాలా విత్తనాలు 18–24°C మధ్య బాగా మొలుస్తాయి.",
farmTip4: "ఆఫిడ్ నియంత్రణకు లేడీబగ్స్ మరియు లేస్‌వింగ్స్ వంటి సహజ శత్రువులను ఉపయోగించండి.",

gettingStarted: "ప్రారంభించడం",

step1Title: "వాతావరణం చూడండి",
step1Desc: "మీ ప్రాంతానికి సంబంధించిన ప్రత్యక్ష పరిస్థితులతో రోజు ప్రారంభించండి.",

step2Title: "మీ మట్టిని విశ్లేషించండి",
step2Desc: "ఎరువు సిఫార్సుల కోసం NPK విలువలను నమోదు చేయండి.",

step3Title: "మార్కెట్లను గమనించండి",
step3Desc: "పంట ధరలను గమనించి తెలివిగా అమ్మండి లేదా నిల్వ చేయండి.",

step4Title: "రోగాలను గుర్తించండి",
step4Desc: "రోగగ్రస్త ఆకుల ఫోటోను అప్‌లోడ్ చేసి వెంటనే AI నిర్ధారణ పొందండి.",

dashboard: "డాష్‌బోర్డ్",
weather: "వాతావరణం",
marketPrices: "మార్కెట్ ధరలు",
diseaseDetect: "రోగ గుర్తింపు",

signOut: "లాగ్ అవుట్",
navigation: "నావిగేషన్",

weatherIntelligence: "వాతావరణ విశ్లేషణ",
liveWeatherData: "ప్రత్యక్ష వాతావరణ డేటా",

weatherSubtitle: "ఏ నగరానికైనా ప్రత్యక్ష ఉష్ణోగ్రత, తేమ మరియు గాలి వేగం — మీ వ్యవసాయ కార్యకలాపాలను విశ్వాసంతో ప్రణాళిక చేయండి.",

enterCity: "నగర పేరు నమోదు చేయండి (ఉదా: Pune, Nagpur, Mysuru…)",
getWeather: "వాతావరణం పొందండి",
fetchingWeather: "తీసుకువస్తోంది…",

quickSelect: "త్వరిత ఎంపిక:",

fetchingLiveWeather: "ప్రత్యక్ష వాతావరణ డేటాను తీసుకువస్తోంది…",

feelsLike: "అనిపించే ఉష్ణోగ్రత",

humidity: "తేమ",
wind: "గాలి",
pressure: "పీడనం",
speed: "వేగం",

cropSuitability: "పంట అనుకూలత",
irrigationAdvice: "నీటిపారుదల సలహా",
windAdvisory: "గాలి సూచన",

extremeHeat: "తీవ్ర ఉష్ణోగ్రత — తెల్లవారుజామున నీటిపారుదల చేయండి",
hotWeather: "వేడి — మట్టి తేమను నిలుపుకోండి",
warmWeather: "సౌకర్యవంతమైన ఉష్ణోగ్రత — చాలా పంటలకు అనుకూలం",
coolWeather: "చల్లటి వాతావరణం — రాత్రి మంచు ప్రమాదం",
coldWeather: "చలి — మంచుకు సున్నితమైన పంటలను రక్షించండి",

veryHumid: "అత్యధిక తేమ",
humid: "తేమగా",
comfortable: "సౌకర్యవంతంగా",
dry: "ఎండగా",

strongWind: "బలమైన గాలి — స్ప్రే చేయవద్దు",
moderateWind: "మధ్యస్థ గాలి — కీటకనాశక స్ప్రేకు అనుకూలం",
calmWind: "శాంతమైన గాలి — డ్రోన్ స్ప్రేకు అనుకూలం",

excellentCrops: "బియ్యం, చెరకు, అరటి మరియు ఉష్ణ మండల కూరగాయలకు అత్యుత్తమం.",
goodCrops: "గోధుమ, జొన్న, సర్సం మరియు చలికాల పంటలకు మంచిది.",
coolCrops: "చల్లటి వాతావరణం — పాలకూర, బటానీలు, క్యారెట్ వంటి పంటలు పండించండి.",

lowHumidity: "తక్కువ తేమ — పంట ఒత్తిడిని నివారించడానికి ఈరోజు నీటిపారుదల చేయండి.",
moderateHumidity: "మధ్యస్థ తేమ — మట్టి తేమను తనిఖీ చేయండి.",
highHumidity: "పర్యాప్త తేమ — నీటిపారుదల తగ్గించండి.",

loginFailed: "లాగిన్ విఫలమైంది. దయచేసి మీ వివరాలను తనిఖీ చేయండి.",

welcomeBack: "మళ్లీ స్వాగతం",
signInAccount: "మీ AgriMate ఖాతాలో సైన్ ఇన్ చేయండి",

emailAddress: "ఈమెయిల్ చిరునామా",
password: "పాస్‌వర్డ్",

emailPlaceholder: "you@example.com",
passwordPlaceholder: "మీ పాస్‌వర్డ్ నమోదు చేయండి",

signIn: "సైన్ ఇన్ →",
signingIn: "సైన్ ఇన్ అవుతోంది…",

noAccount: "మీకు ఖాతా లేదా?",
createAccount: "ఖాతా సృష్టించండి →",

tagline: "మన అందరికీ ఆహారం అందించే వ్యక్తి రైతు.",

featureWeather: "ప్రతి పొలానికి ప్రత్యక్ష వాతావరణ సమాచారం",
featureSoil: "AI ఆధారిత మట్టి పోషక సూచనలు",
featureMarket: "ప్రత్యక్ష పంట మార్కెట్ ధరలు",
featureDisease: "చిత్రాల ద్వారా వెంటనే మొక్కల రోగ గుర్తింపు",

enterFullName: "దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.",
passwordMismatch: "పాస్‌వర్డ్లు సరిపోలడం లేదు.",
passwordLength: "పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి.",
registrationFailed: "నమోదు విఫలమైంది. ఈ ఈమెయిల్ ఇప్పటికే నమోదు అయి ఉండవచ్చు.",

tooShort: "చాలా చిన్నది",
weak: "బలహీనమైనది",
fair: "సరిపడింది",
strong: "బలమైనది",

backToLogin: "సైన్ ఇన్‌కు తిరిగి వెళ్ళండి",

createAccount: "మీ ఖాతాను సృష్టించండి",
joinFarmers: "AI ఆధారిత సమాచారం ఉపయోగిస్తున్న వేలాది రైతులతో చేరండి",

fullName: "పూర్తి పేరు",
namePlaceholder: "రమేష్ కుమార్",

passwordMin: "కనీసం 6 అక్షరాలు",
confirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
repeatPassword: "పాస్‌వర్డ్ మళ్లీ నమోదు చేయండి",

creatingAccount: "ఖాతా సృష్టిస్తోంది…",
createAccountBtn: "ఖాతా సృష్టించండి →",

alreadyAccount: "ఇప్పటికే ఖాతా ఉందా?",
termsText: "ఖాతా సృష్టించడం ద్వారా మీరు మా సేవా నిబంధనలు మరియు గోప్యతా విధానాన్ని అంగీకరిస్తారు.",

agricultureQuote: "వ్యవసాయం మన అత్యంత జ్ఞానపూర్వక ప్రయత్నం.",

activeFarmers: "సక్రియ రైతులు",
diseaseTypes: "రోగ రకాలు",
liveUpdates: "ప్రత్యక్ష డేటా నవీకరణలు",

soilIntelligence: "మట్టి విశ్లేషణ వ్యవస్థ",
soilSubtitle: "మీ మట్టి NPK విలువలు మరియు తేమ స్థాయిని నమోదు చేయండి.",

soilParameters: "మట్టి పరామితులు",
loadPreset: "ప్రీసెట్ లోడ్ చేయండి:",

sandySoil: "మణి మట్టి",
claySoil: "మట్టి మట్టి",
loamSoil: "లోమ్ మట్టి",
dryField: "ఎండిన పొలం",

soilMoisture: "మట్టి తేమ (%)",
moistureIdeal: "సరైన పరిధి: 30–70%",

nitrogen: "నైట్రోజన్ (N) mg/kg",
nitrogenIdeal: "సరైనది: 50+",

phosphorus: "ఫాస్ఫరస్ (P) mg/kg",
phosphorusIdeal: "సరైనది: 40+",

moisture: "తేమ",

analyzeSoil: "మట్టిని విశ్లేషించండి",
analyzing: "విశ్లేషిస్తోంది…",

analysisFailed: "విశ్లేషణ విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",

analysisComplete: "విశ్లేషణ పూర్తైంది",
fertilizerRecommendation: "ఎరువు సిఫార్సు",
irrigationStatus: "నీటిపారుదల స్థితి",

npkGuide: "NPK మార్గదర్శకం",

nitrogenGuide: "ఆకుల పెరుగుదలను ప్రోత్సహిస్తుంది.",
phosphorusGuide: "వేరు అభివృద్ధికి అవసరం.",
potassiumGuide: "రోగ నిరోధకతను పెంచుతుంది.",
moistureGuide: "30% కంటే తక్కువ → వెంటనే నీటిపారుదల అవసరం.",

marketIntelligence: "మార్కెట్ విశ్లేషణ",
cropMarketPrices: "పంట మార్కెట్ ధరలు",

selectCrop: "పంటను ఎంచుకోండి",
customCrop: "కస్టమ్ పంట",

typeCropName: "ఏ పంట పేరు అయినా టైప్ చేయండి…",
search: "శోధించండి",

fetchingMarket: "మార్కెట్ డేటా తీసుకువస్తోంది…",

trend: "ప్రవణత",
msp: "MSP",
updated: "నవీకరించబడింది",

recentQueries: "ఇటీవలి శోధనలు",

selectCropMessage: "ధరలను చూడటానికి పంటను ఎంచుకోండి",

priceDescription: "ధరలు భారత MSP మరియు ప్రస్తుత మండీ డేటా ఆధారంగా ఉన్నాయి.",

increasing: "పెరుగుతోంది",
decreasing: "తగ్గుతోంది",
stable: "స్థిరంగా",

perQuintal: "/ క్వింటాల్",

analysisError: "మార్కెట్ డేటాను పొందలేకపోయాము."

}
},
ta: {
  translation: {

diseaseDetection: "நோய் கண்டறிதல்",
uploadImage: "செடியின் படத்தை பதிவேற்றவும்",
detectDisease: "நோயை கண்டறி",
reset: "மீட்டமை",
dropPhoto: "உங்கள் செடியின் படத்தை இங்கே விடுங்கள்",
chooseFile: "படக் கோப்பை தேர்வு செய்யவும்",
noImage: "இன்னும் எந்த படம் பகுப்பாய்வு செய்யப்படவில்லை",

description: "நோய் கண்டறிதல், சிகிச்சை மற்றும் தடுப்பு ஆலோசனைகளுக்கு பாதிக்கப்பட்ட இலைக்கான படத்தை பதிவேற்றவும்.",
browseFiles: "அல்லது கோப்புகளை தேர்வு செய்ய கிளிக் செய்யவும்",
fileTypes: "JPG, PNG, WEBP — அதிகபட்சம் 10MB",
uploadAdvice: "விரைவான கண்டறிதலுக்கு பாதிக்கப்பட்ட இலைக்கான தெளிவான படத்தை பதிவேற்றவும்",

detectable: "கண்டறியக்கூடிய நிலைகள்",
photoTips: "பட ஆலோசனைகள்",

tip1: "இயற்கை வெளிச்சத்தை பயன்படுத்தவும் — நிழல் மற்றும் ஃப்ளாஷ் தவிர்க்கவும்.",
tip2: "பாதிக்கப்பட்ட பகுதியை தெளிவாக படம்பிடிக்கவும்.",
tip3: "துல்லியத்திற்காக ஆரோக்கியமான மற்றும் பாதிக்கப்பட்ட பகுதிகளையும் சேர்க்கவும்.",
tip4: "குறைந்தது 5MP தீர்மானத்தில் படம் எடுக்கவும்.",

plantHealthAI: "தாவர ஆரோக்கிய AI",

goodMorning: "காலை வணக்கம்",
goodAfternoon: "வணக்கம்",
goodEvening: "மாலை வணக்கம்",

dashboardOverview: "இது உங்கள் விவசாய தகவல் அமைப்பின் சுருக்கமான பார்வை. தொடங்க ஒரு மாட்யூலை தேர்வு செய்யவும்.",

modulesActive: "செயலில் உள்ள மாட்யூல்கள்",
dataSources: "தரவு மூலங்கள்",
cropsSupported: "ஆதரிக்கப்படும் பயிர்கள்",
detectionSpeed: "கண்டறிதல் வேகம்",

quickAccess: "விரைவு அணுகல்",

checkWeather: "வானிலை பார்க்க",
weatherDesc: "எந்த நகரத்திற்கும் நேரடி வெப்பநிலை, ஈரப்பதம் மற்றும் காற்று தகவல்",

soilAnalysis: "மண் பகுப்பாய்வு",
soilDesc: "உர மற்றும் பாசன ஆலோசனைகளை பெறுங்கள்",

marketPrices: "சந்தை விலைகள்",
marketDesc: "இன்றைய பயிர் விலைகள் மற்றும் போக்கு தகவல்கள்",

diseaseDesc: "உடனடி பகுப்பாய்வுக்கு இலைப் படத்தை பதிவேற்றவும்",

goButton: "செல்",

todayFarmingTips: "இன்றைய விவசாய குறிப்புகள்",

farmTip1: "ஆவியாக்கத்தை குறைக்க காலை வேளையில் பாசனம் செய்யுங்கள்.",
farmTip2: "மண் நைட்ரஜனை மீட்டெடுக்க பயிர்களை மாற்றி வளர்க்கவும்.",
farmTip3: "மண் வெப்பநிலையை கவனிக்கவும் — 18–24°C இல் விதைகள் நன்றாக முளைக்கும்.",
farmTip4: "அஃபிட் கட்டுப்பாட்டிற்கு இயற்கை வேட்டையாளர்களை பயன்படுத்தவும்.",

gettingStarted: "தொடங்குதல்",

step1Title: "வானிலை பார்க்க",
step1Desc: "உங்கள் பகுதியில் உள்ள நேரடி வானிலை தகவலுடன் நாளை தொடங்குங்கள்.",

step2Title: "மண்ணை பகுப்பாய்வு செய்யவும்",
step2Desc: "உர ஆலோசனைகளுக்கு NPK மதிப்புகளை உள்ளிடுங்கள்.",

step3Title: "சந்தையை கண்காணிக்கவும்",
step3Desc: "பயிர் விலைகளை கவனித்து புத்திசாலித்தனமாக விற்பனை செய்யுங்கள்.",

step4Title: "நோயை கண்டறியவும்",
step4Desc: "பாதிக்கப்பட்ட இலைக்கான படத்தை பதிவேற்றவும்.",

dashboard: "டாஷ்போர்டு",
weather: "வானிலை",
diseaseDetect: "நோய் கண்டறிதல்",

signOut: "வெளியேறு",
navigation: "வழிசெலுத்தல்",

weatherIntelligence: "வானிலை பகுப்பாய்வு",
liveWeatherData: "நேரடி வானிலை தரவு",

weatherSubtitle: "எந்த நகரத்திற்கும் நேரடி வெப்பநிலை, ஈரப்பதம் மற்றும் காற்று வேகம்.",

enterCity: "நகரின் பெயரை உள்ளிடுங்கள்",
getWeather: "வானிலை பெற",
fetchingWeather: "தரவு பெறப்படுகிறது…",

quickSelect: "விரைவு தேர்வு:",

fetchingLiveWeather: "நேரடி வானிலை தரவு பெறப்படுகிறது…",

feelsLike: "உணரப்படும் வெப்பநிலை",

humidity: "ஈரப்பதம்",
wind: "காற்று",
pressure: "அழுத்தம்",
speed: "வேகம்",

cropSuitability: "பயிர் பொருத்தம்",
irrigationAdvice: "பாசன ஆலோசனை",
windAdvisory: "காற்று ஆலோசனை",

extremeHeat: "அதிக வெப்பம் — காலை பாசனம் செய்யவும்",
hotWeather: "வெப்பமான காலநிலை",
warmWeather: "சூடான காலநிலை — பல பயிர்களுக்கு ஏற்றது",
coolWeather: "குளிர்ந்த காலநிலை",
coldWeather: "குளிர் — பனி அபாயம்",

veryHumid: "மிகுந்த ஈரப்பதம்",
humid: "ஈரமான",
comfortable: "சௌகரியம்",
dry: "உலர்ந்த",

strongWind: "வலுவான காற்று — தெளிப்பு தவிர்க்கவும்",
moderateWind: "மிதமான காற்று",
calmWind: "அமைதியான காற்று",

excellentCrops: "அரிசி, கரும்பு மற்றும் வாழைக்கு சிறந்தது.",
goodCrops: "கோதுமை மற்றும் பிற பயிர்களுக்கு நல்லது.",
coolCrops: "குளிர் காலநிலைக்கு ஏற்ற பயிர்கள்.",

lowHumidity: "குறைந்த ஈரப்பதம் — இன்று பாசனம் செய்யுங்கள்.",
moderateHumidity: "மிதமான ஈரப்பதம் — மண் ஈரத்தை சரிபார்க்கவும்.",
highHumidity: "போதுமான ஈரப்பதம் — பாசனம் குறைக்கவும்.",

welcomeBack: "மீண்டும் வரவேற்கிறோம்",
signInAccount: "உங்கள் AgriMate கணக்கில் உள்நுழையுங்கள்",

emailAddress: "மின்னஞ்சல் முகவரி",
password: "கடவுச்சொல்",

emailPlaceholder: "you@example.com",
passwordPlaceholder: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",

signIn: "உள்நுழை →",
signingIn: "உள்நுழைகிறது…",

noAccount: "கணக்கு இல்லையா?",
createAccount: "கணக்கு உருவாக்கவும் →",

tagline: "எங்களை எல்லோருக்கும் உணவு வழங்குபவர் விவசாயி.",

marketIntelligence: "சந்தை பகுப்பாய்வு",
cropMarketPrices: "பயிர் சந்தை விலைகள்",

selectCrop: "பயிரை தேர்வு செய்யவும்",
customCrop: "தனிப்பயன் பயிர்",

typeCropName: "பயிர் பெயரை টাইப் செய்யவும்…",
search: "தேடுக",

fetchingMarket: "சந்தை தரவு பெறப்படுகிறது…",

trend: "போக்கு",
msp: "MSP",
updated: "புதுப்பிக்கப்பட்டது",

recentQueries: "சமீபத்திய தேடல்கள்",

selectCropMessage: "விலைகளை பார்க்க ஒரு பயிரை தேர்வு செய்யவும்",

priceDescription: "இந்திய MSP மற்றும் தற்போதைய மண்டி தரவின் அடிப்படையில் விலைகள்.",

increasing: "அதிகரிக்கிறது",
decreasing: "குறைந்து வருகிறது",
stable: "நிலையான",

perQuintal: "/ குவிண்டல்",

analysisError: "சந்தை தரவை பெற முடியவில்லை."

}
},
ml: {
translation: {

diseaseDetection: "രോഗം കണ്ടെത്തൽ",
uploadImage: "ചെടിയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",
detectDisease: "രോഗം കണ്ടെത്തുക",
reset: "റീസെറ്റ്",
dropPhoto: "നിങ്ങളുടെ ചെടിയുടെ ചിത്രം ഇവിടെ ഇടുക",
chooseFile: "ചിത്ര ഫയൽ തിരഞ്ഞെടുക്കുക",
noImage: "ഇതുവരെ ചിത്രം വിശകലനം ചെയ്തിട്ടില്ല",

description: "രോഗനിർണയം, ചികിത്സ, പ്രതിരോധ മാർഗങ്ങൾ എന്നിവയ്ക്ക് രോഗബാധിതമായ ഇലയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
browseFiles: "അല്ലെങ്കിൽ ഫയലുകൾ തിരഞ്ഞെടുക്കാൻ ക്ലിക്ക് ചെയ്യുക",
fileTypes: "JPG, PNG, WEBP — പരമാവധി 10MB",
uploadAdvice: "തൽക്ഷണ നിർണയത്തിനായി ബാധിച്ച ഇലയുടെ വ്യക്തമായ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",

detectable: "കണ്ടെത്താൻ കഴിയുന്ന രോഗങ്ങൾ",
photoTips: "ഫോട്ടോ നിർദേശങ്ങൾ",

tip1: "സ്വാഭാവിക പ്രകാശം ഉപയോഗിക്കുക — നിഴൽയും ഫ്ലാഷും ഒഴിവാക്കുക.",
tip2: "ബാധിച്ച ഭാഗം വ്യക്തമായി ചിത്രീകരിക്കുക.",
tip3: "കൃത്യതയ്ക്കായി ആരോഗ്യകരമായയും രോഗബാധിതമായയും ഭാഗങ്ങൾ ഉൾപ്പെടുത്തുക.",
tip4: "കുറഞ്ഞത് 5MP റെസല്യൂഷൻ ഉപയോഗിക്കുക.",

plantHealthAI: "സസ്യാരോഗ്യ AI",

goodMorning: "സുപ്രഭാതം",
goodAfternoon: "നമസ്കാരം",
goodEvening: "ശുഭസന്ധ്യ",

dashboardOverview: "ഇത് നിങ്ങളുടെ കൃഷി വിവരങ്ങളുടെ സംഗ്രഹമാണ്. ആരംഭിക്കാൻ ഒരു മോഡ്യൂൾ തിരഞ്ഞെടുക്കുക.",

modulesActive: "സജീവമായ മോഡ്യൂളുകൾ",
dataSources: "ഡാറ്റ ഉറവിടങ്ങൾ",
cropsSupported: "പിന്തുണയ്ക്കുന്ന വിളകൾ",
detectionSpeed: "കണ്ടെത്തൽ വേഗത",

quickAccess: "വേഗത്തിൽ പ്രവേശനം",

checkWeather: "കാലാവസ്ഥ പരിശോധിക്കുക",
weatherDesc: "ഏത് നഗരത്തിനും തത്സമയ താപനില, ഈർപ്പം, കാറ്റ് വിവരങ്ങൾ",

soilAnalysis: "മണ്ണ് വിശകലനം",
soilDesc: "വളംയും ജലസേചനവും സംബന്ധിച്ച നിർദ്ദേശങ്ങൾ ലഭിക്കുക",

marketPrices: "മാർക്കറ്റ് വിലകൾ",
marketDesc: "ഇന്നത്തെ വിളവിലകളും ട്രെൻഡ് വിവരങ്ങളും",

diseaseDesc: "തൽക്ഷണ പരിശോധനയ്ക്കായി ഇലയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",

goButton: "പോകുക",

todayFarmingTips: "ഇന്നത്തെ കൃഷി നിർദ്ദേശങ്ങൾ",

farmTip1: "വെള്ളം രാവിലെ നേരത്തെ നൽകുന്നത് ആവി കുറയ്ക്കും.",
farmTip2: "മണ്ണിലെ നൈട്രജൻ വർദ്ധിപ്പിക്കാൻ വിളചക്രം പാലിക്കുക.",
farmTip3: "മണ്ണിന്റെ താപനില ശ്രദ്ധിക്കുക — 18–24°C ഇടയിൽ വിത്തുകൾ മികച്ച രീതിയിൽ മുളക്കും.",
farmTip4: "അഫിഡ് നിയന്ത്രിക്കാൻ പ്രകൃതിദത്ത ശത്രുക്കളെ ഉപയോഗിക്കുക.",

gettingStarted: "ആരംഭിക്കുക",

step1Title: "കാലാവസ്ഥ പരിശോധിക്കുക",
step1Desc: "നിങ്ങളുടെ പ്രദേശത്തിന്റെ തത്സമയ കാലാവസ്ഥ വിവരങ്ങളോടെ ദിവസം ആരംഭിക്കുക.",

step2Title: "മണ്ണ് വിശകലനം ചെയ്യുക",
step2Desc: "വളം നിർദ്ദേശങ്ങൾക്ക് NPK മൂല്യങ്ങൾ നൽകുക.",

step3Title: "മാർക്കറ്റ് നിരീക്ഷിക്കുക",
step3Desc: "വിളവിലകൾ നിരീക്ഷിച്ച് ബുദ്ധിപരമായി വിൽക്കുക.",

step4Title: "രോഗം കണ്ടെത്തുക",
step4Desc: "ബാധിച്ച ഇലയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്ത് AI നിർണയം നേടുക.",

dashboard: "ഡാഷ്ബോർഡ്",
weather: "കാലാവസ്ഥ",
marketPrices: "മാർക്കറ്റ് വിലകൾ",
diseaseDetect: "രോഗം കണ്ടെത്തൽ",

signOut: "ലോഗ് ഔട്ട്",
navigation: "നാവിഗേഷൻ",

weatherIntelligence: "കാലാവസ്ഥ വിശകലനം",
liveWeatherData: "തത്സമയ കാലാവസ്ഥ ഡാറ്റ",

weatherSubtitle: "ഏത് നഗരത്തിനും തത്സമയ താപനില, ഈർപ്പം, കാറ്റിന്റെ വേഗത.",

enterCity: "നഗരത്തിന്റെ പേര് നൽകുക",
getWeather: "കാലാവസ്ഥ കാണുക",
fetchingWeather: "ഡാറ്റ ലഭിക്കുന്നു…",

quickSelect: "വേഗത്തിൽ തിരഞ്ഞെടുക്കുക:",

fetchingLiveWeather: "തത്സമയ കാലാവസ്ഥ ഡാറ്റ ലഭിക്കുന്നു…",

feelsLike: "അനുഭവപ്പെടുന്ന താപനില",

humidity: "ഈർപ്പം",
wind: "കാറ്റ്",
pressure: "മർദ്ദം",
speed: "വേഗത",

cropSuitability: "വിള അനുയോജ്യത",
irrigationAdvice: "ജലസേചന നിർദ്ദേശം",
windAdvisory: "കാറ്റ് നിർദ്ദേശം",

extremeHeat: "അധിക ചൂട് — രാവിലെ ജലസേചനം ചെയ്യുക",
hotWeather: "ചൂടുള്ള കാലാവസ്ഥ",
warmWeather: "മിതമായ ചൂട്",
coolWeather: "തണുത്ത കാലാവസ്ഥ",
coldWeather: "കഠിനമായ തണുപ്പ്",

veryHumid: "വളരെ ഈർപ്പം",
humid: "ഈർപ്പമുള്ള",
comfortable: "സൗകര്യപ്രദം",
dry: "വറ്റിയത്",

strongWind: "ശക്തമായ കാറ്റ് — സ്പ്രേ ഒഴിവാക്കുക",
moderateWind: "മിതമായ കാറ്റ്",
calmWind: "ശാന്തമായ കാറ്റ്",

excellentCrops: "അരി, കരിമ്പ്, വാഴ തുടങ്ങിയ വിളകൾക്ക് അനുയോജ്യം.",
goodCrops: "ഗോതമ്പ് തുടങ്ങിയ വിളകൾക്ക് നല്ലത്.",
coolCrops: "തണുത്ത കാലാവസ്ഥയ്ക്ക് അനുയോജ്യമായ വിളകൾ.",

lowHumidity: "കുറഞ്ഞ ഈർപ്പം — ഇന്ന് ജലസേചനം ചെയ്യുക.",
moderateHumidity: "മിതമായ ഈർപ്പം — മണ്ണിന്റെ ഈർപ്പം പരിശോധിക്കുക.",
highHumidity: "മതി വരുന്ന ഈർപ്പം — ജലസേചനം കുറയ്ക്കുക.",

welcomeBack: "വീണ്ടും സ്വാഗതം",
signInAccount: "നിങ്ങളുടെ AgriMate അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്യുക",

emailAddress: "ഇമെയിൽ വിലാസം",
password: "പാസ്‌വേഡ്",

emailPlaceholder: "you@example.com",
passwordPlaceholder: "നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക",

signIn: "ലോഗിൻ →",
signingIn: "ലോഗിൻ ചെയ്യുന്നു…",

noAccount: "അക്കൗണ്ട് ഇല്ലേ?",
createAccount: "അക്കൗണ്ട് സൃഷ്ടിക്കുക →",

tagline: "എല്ലാവർക്കും ഭക്ഷണം നൽകുന്നവൻ കർഷകനാണ്.",

marketIntelligence: "മാർക്കറ്റ് വിശകലനം",
cropMarketPrices: "വിള മാർക്കറ്റ് വിലകൾ",

selectCrop: "വിള തിരഞ്ഞെടുക്കുക",
customCrop: "കസ്റ്റം വിള",

typeCropName: "വിളയുടെ പേര് ടൈപ്പ് ചെയ്യുക…",
search: "തിരയുക",

fetchingMarket: "മാർക്കറ്റ് ഡാറ്റ ലഭിക്കുന്നു…",

trend: "ട്രെൻഡ്",
msp: "MSP",
updated: "അപ്ഡേറ്റ് ചെയ്തത്",

recentQueries: "സമീപകാല തിരച്ചിലുകൾ",

selectCropMessage: "വിലകൾ കാണാൻ ഒരു വിള തിരഞ്ഞെടുക്കുക",

priceDescription: "വിലകൾ ഇന്ത്യൻ MSPയും നിലവിലെ മാർക്കറ്റ് ഡാറ്റയും അടിസ്ഥാനമാക്കിയതാണ്.",

increasing: "വർധിക്കുന്നു",
decreasing: "കുറയുന്നു",
stable: "സ്ഥിരമാണ്",

perQuintal: "/ ക്വിന്റൽ",

analysisError: "മാർക്കറ്റ് ഡാറ്റ ലഭ്യമാക്കാൻ കഴിഞ്ഞില്ല"

}
}
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;