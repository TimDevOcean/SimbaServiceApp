// Selectors
  var selectedBrand = document.querySelector('#brand');
  var selectedProduct = document.querySelector('#product');
  var selectedModel = document.querySelector('#model');
  var selectedCapacity = document.querySelector('#capacity');
  var productContainer = document.querySelector('#product-container');
  var modelContainer = document.querySelector('#model-container');
  var capacityContainer = document.querySelector('#capacity-container');


  // Templates
  // Luminous
    var luminousProducts = `
        <option>Select Product</option>
        <option>Inverter</option>
        <option>SMF Battery</option>
        <option>Tubular Battery</option>
    `;

    var luminousModels = `
        <option>Select Model</option>
        <option>Cruze</option>
        <option>DeLite</option>
        <option>Ecovolt</option>
        <option>Pro Series</option>
        <option>Solar Hybrid</option>
        <option>Zelio</option>
    `;

    var luminousCapacity = `
        <option>Select Capacity</option>
        <optgroup label="Cruze" id="cruze-capacity" class="capacity hide">
          <option>2.5KVA/36V</option>
          <option>3.5KVA/48V</option>
          <option>4KVA/48V</option>
          <option>5KVA/96V</option>
          <option>7.5VA/120V</option>
        </optgroup>
        <optgroup label="DeLite" id="delite-capacity" class="capacity hide">
          <option>900VA/12V</option>
        </optgroup>
        <optgroup label="Ecovolt" id="ecovolt-capacity" class="capacity hide">
          <option>1050VA/12V</option>
          <option>900VA/12V</option>
          <option>1000VA/12V</option>
          <option>1.5KVA/24V</option>
        </optgroup>
        <optgroup label="Pro Series" id="pro-capacity" class="capacity hide">
          <option>15KVA/120V</option>
          <option>20KVA/360V</option>
          <option>30KVA/360V</option>
        </optgroup>
        <optgroup label="Solar Hybrid" id="solar-capacity" class="capacity hide">
          <option>500VA/12V</option>
          <option>850VA/12V</option>
          <option>1.5KVA/24V</option>
        </optgroup>
        <optgroup label="Zelio" id="zelio-capacity" class="capacity hide">
          <option>1.5KVA/24V</option>
        </optgroup>
        <optgroup label="SMF Battery" id="smf-capacity" class="capacity hide">
          <option>200AH/12V</option>
          <option>150AH/12V</option>
          <option>100AH/12V</option>
        </optgroup>
        <optgroup label="Tubular Battery" id="tubular-capacity" class="capacity hide">
          <option>220AH/12V</option>
          <option>150AH/12V</option>
        </optgroup>
    `;

  // Genus
    var genusProducts = `
        <option>Select Product</option>
        <option>Inverter</option>
        <option>SMF Battery</option>
        <option>Tubular Battery</option>
    `;

    var genusModels = `
        <option>Select Model</option>
        <option>Bravo</option>
        <option>LCD</option>
        <option>LED</option>
    `;

    var genusCapacity = `
        <option>Select Capacity</option>
        <optgroup label="Bravo" id="bravo-capacity" class="capacity hide">
          <option>875VA/12V BRAVO</option>
        </optgroup>
        <optgroup label="LCD" id="lcd-capacity" class="capacity hide">
          <option>875VA/12V</option>
          <option>1.5KVA/24V</option>
          <option>2.0KVA/24V</option>
          <option>3.5KVA/48V</option>
          <option>5KVA/48V</option>
          <option>5KVA/96V</option>
          <option>7.5kVA/120</option>
          <option>15KVA/120V</option>
          <option>20KVA/360V</option>
          <option>30KVA/360V</option>
        </optgroup>
        <optgroup label="LED" id="led-capacity" class="capacity hide">
          <option>1.5KVA/24V</option>
          <option>1.65VA/24V</option>
        </optgroup>
        <optgroup label="SMF Battery" id="gsmf-capacity" class="capacity hide">
          <option>200 AH/12V</option>
          <option>150 AH/12V</option>
          <option>100 AH/12V</option>
        </optgroup>
        <optgroup label="Tubular Battery" id="gtubular-capacity" class="capacity hide">
          <option>220AH/12V Invomax</option>
        </optgroup>
    `;

  // Kstar
    var kstarProducts = `
        <option>Select Product</option>
        <option>Online UPS</option>
        <option>SMF Battery</option>
    `;

    var kstarModels = `
        <option>N/A</option>
    `;

    var kstarCapacity = `
        <option>Select Capacity</option>
        <optgroup label="Online UPS" id="oups-capacity" class="capacity hide">
          <option>3KVA/96V</option>
          <option>20KVA/384V</option>
          <option>30KVA/384V</option>
          <option>40KVA/384V</option>
          <option>60KVA/384V</option>
          <option>80KVA/384V</option>
          <option>100KVA/384V</option>
          <option>120KVA/384V</option>
        </optgroup>
        <optgroup label="SMF Battery" id="ksmf-capacity" class="capacity hide">
          <option>200 AH/12V</option>
          <option>150 AH/12V</option>
          <option>100 AH/12V</option>
          <option>45 AH/12V</option>
        </optgroup>
    `;

  // Sollatek
    var sollatekProducts = `
      <option>Select Product</option>
        <option>Voltguard</option>
        <option>Voltshield</option>
        <option>Multiguard</option>
        <option>AVR</option>
    `;

    var sollatekModels = `
      <option>Select Model</option>
      <optgroup label="Voltguard" id="voltguard-models" class="model hide">
        <option>HivoltGuard</option>
        <option>TVGuard</option>
        <option>FridgeGuard</option>
        <option>A/C Guard</option>
      </optgroup>
      <optgroup label="Voltshield" id="voltshield-models" class="model hide">
        <option>AVS13</option>
        <option>AVS15</option>
        <option>AVS30</option>
      </optgroup>
      <optgroup label="Multiguard" id="multiguard-models" class="model hide">
        <option>MG-4U</option>
        <option>MG-4UP</option>
        <option>MGX-4U</option>
        <option>MGX-6U</option>
        <option>MSX-4U</option>
      </optgroup>
      <optgroup label="AVR" id="avr-models" class="model hide">
        <option>AVR-SVS08</option>
        <option>AVR-SVS15</option>
        <option>AVR-SVS3X35</option>
        <option>AVR 3X50-AD</option>
      </optgroup>
    `;

  // None option
    var noneOption = `
      <option>N/A</option>
    `;

function config(){

// Brand initialize
  var luminous = 0;
  var genus = 0;
  var kstar = 0;
  var sollatek = 0;

  if (selectedBrand.selectedIndex == '1'){
    luminous = true;
  } else if (selectedBrand.selectedIndex == '2'){
      genus = true;
  } else if (selectedBrand.selectedIndex == '3'){
      kstar = true;
  } else if (selectedBrand.selectedIndex == '4'){
    sollatek = true;
  }


  // Selection logic
  if (luminous){
    selectedProduct.innerHTML = luminousProducts;
    selectedProduct.setAttribute("onchange", "lModelsPicker(); lCapacityPicker();");
    selectedModel.innerHTML = luminousModels;
    selectedModel.setAttribute("onchange", "lCapacityPicker();");
    selectedCapacity.innerHTML = luminousCapacity;
  }
  else if (genus){
    selectedProduct.innerHTML = genusProducts;
    selectedProduct.setAttribute("onchange", "gModelsPicker(); gCapacityPicker();");
    selectedModel.innerHTML = genusModels;
    selectedModel.setAttribute("onchange", "gCapacityPicker();");
    selectedCapacity.innerHTML = genusCapacity;
  }
  else if (kstar){
    selectedProduct.innerHTML = kstarProducts;
    selectedProduct.setAttribute("onchange", "kCapacityPicker();");
    selectedModel.innerHTML = kstarModels;
    selectedCapacity.innerHTML = kstarCapacity;
  }
  else if (sollatek){
    selectedProduct.innerHTML = sollatekProducts;
    selectedProduct.setAttribute("onchange", "sModelsPicker();");
    selectedModel.innerHTML = sollatekModels;
    selectedCapacity.innerHTML = null;
  }
  else {
    resetCapacity();
    resetModels();
  }
}

// Models picker
// Luminous
function lModelsPicker(){
  var selectedProduct = document.querySelector('#product');
  var selectedModel = document.querySelector('#model');

  if (selectedProduct.selectedIndex == '2' || selectedProduct.selectedIndex == '3'){
    selectedModel.innerHTML = noneOption;
  } else {
    selectedModel.innerHTML = luminousModels;
  }
}

// Genus
function gModelsPicker(){
  var selectedProduct = document.querySelector('#product');
  var selectedModel = document.querySelector('#model');

  if (selectedProduct.selectedIndex == '2' || selectedProduct.selectedIndex == '3'){
    selectedModel.innerHTML = noneOption;
  } else {
    selectedModel.innerHTML = genusModels;
  }
}

// Sollatek
function sModelsPicker(){
  var selectedProduct = document.querySelector('#product');
  var selectedModel = document.querySelector('#model');
  var voltguardModels = document.querySelector('#voltguard-models');
  var voltshieldModels = document.querySelector('#voltshield-models');
  var multiguardModels = document.querySelector('#multiguard-models');
  var avrModels = document.querySelector('#avr-models');

  if (selectedProduct.selectedIndex == '1'){
    resetModels();
    voltguardModels.classList.toggle('hide');
  }
  else if (selectedProduct.selectedIndex == '2'){
    resetModels();
    voltshieldModels.classList.toggle('hide');
  }
  else if (selectedProduct.selectedIndex == '3'){
    resetModels();
    multiguardModels.classList.toggle('hide');
  }
  else if (selectedProduct.selectedIndex == '4'){
    resetModels();
    avrModels.classList.toggle('hide');
  }
  else {
    resetModels();
  }
}


// Hide function
function resetCapacity(){
  var capacities = document.querySelectorAll('.capacity');
  var capacity;
  for (capacity of capacities){
    capacity.classList.add('hide');
  }
}

function resetModels(){
  var models = document.querySelectorAll('.model');
  var model;
  for (model of models){
    model.classList.add('hide');
  }
}


// Capacity picker
// Luminous
function lCapacityPicker(){
  var selectedProduct = document.querySelector('#product');
  var selectedModel = document.querySelector('#model');
  var selectedCapacity = document.querySelector('#capacity');
  var cruzeCapacity = document.querySelector('#cruze-capacity');
  var deliteCapacity = document.querySelector('#delite-capacity');
  var ecovoltCapacity = document.querySelector('#ecovolt-capacity');
  var proCapacity = document.querySelector('#pro-capacity');
  var solarCapacity = document.querySelector('#solar-capacity');
  var zelioCapacity = document.querySelector('#zelio-capacity');
  var smfCapacity = document.querySelector('#smf-capacity');
  var tubularCapacity = document.querySelector('#tubular-capacity');


  if (selectedModel.selectedIndex == '1'){
    resetCapacity();
    document.querySelector('#cruze-capacity').classList.toggle('hide');
  }
  else if (selectedModel.selectedIndex == '2'){
    resetCapacity();
    document.querySelector('#delite-capacity').classList.toggle('hide');
  }
  else if (selectedModel.selectedIndex == '3'){
    resetCapacity();
    document.querySelector('#ecovolt-capacity').classList.toggle('hide');
  }
  else if (selectedModel.selectedIndex == '4'){
    resetCapacity();
    document.querySelector('#pro-capacity').classList.toggle('hide');
  }
  else if (selectedModel.selectedIndex == '5'){
    resetCapacity();
    document.querySelector('#solar-capacity').classList.toggle('hide');
  }
  else if (selectedModel.selectedIndex == '6'){
    resetCapacity();
    document.querySelector('#zelio-capacity').classList.toggle('hide');
  }
  else if (selectedProduct.selectedIndex == '2'){
    resetCapacity();
    document.querySelector('#smf-capacity').classList.toggle('hide');
  }
  else if (selectedProduct.selectedIndex == '3'){
    resetCapacity();
    document.querySelector('#tubular-capacity').classList.toggle('hide');
  }
  else {
    resetCapacity();
  }
}

  // Genus
  function gCapacityPicker(){
    var selectedProduct = document.querySelector('#product');
    var selectedModel = document.querySelector('#model');
    var selectedCapacity = document.querySelector('#capacity');
    var bravoCapacity = document.querySelector('#bravo-capacity');
    var lcdCapacity = document.querySelector('#lcd-capacity');
    var ledCapacity = document.querySelector('#led-capacity');
    var gsmfCapacity = document.querySelector('#gsmf-capacity');
    var gtubularCapacity = document.querySelector('#gtubular-capacity');



    if (selectedModel.selectedIndex == '1'){
      resetCapacity();
      document.querySelector('#bravo-capacity').classList.toggle('hide');
    }
    else if (selectedModel.selectedIndex == '2'){
      resetCapacity();
      document.querySelector('#lcd-capacity').classList.toggle('hide');
    }
    else if (selectedModel.selectedIndex == '3'){
      resetCapacity();
      document.querySelector('#led-capacity').classList.toggle('hide');
    }
    else if (selectedProduct.selectedIndex == '2'){
      resetCapacity();
      document.querySelector('#gsmf-capacity').classList.toggle('hide');
    }
    else if (selectedProduct.selectedIndex == '3'){
      resetCapacity();
      document.querySelector('#gtubular-capacity').classList.toggle('hide');
    }
    else {
      resetCapacity();
    }
}

    // Kstar
    function kCapacityPicker(){
      var selectedProduct = document.querySelector('#product');
      var selectedModel = document.querySelector('#model');
      var selectedCapacity = document.querySelector('#capacity');
      var oupsCapacity = document.querySelector('#oups-capacity');
      var ksmfCapacity = document.querySelector('#ksmf-capacity');

      if (selectedProduct.selectedIndex == '1'){
        resetCapacity();
        document.querySelector('#oups-capacity').classList.toggle('hide');
      }
      else if (selectedProduct.selectedIndex == '2'){
        resetCapacity();
        document.querySelector('#ksmf-capacity').classList.toggle('hide');
      }
      else {
        resetCapacity();
      }
    }




// Referral code generator
var codeGenerated = false;
var cPrefix = "SRN88";

function generateRCode(){
  var rCode = cPrefix + Math.floor(Math.random() * 10).toString() + Math.ceil(Math.random() * 10).toString() + Math.ceil(Math.random() * 10).toString() + Math.ceil(Math.random() * 10).toString();
  localStorage.setItem('rCode', rCode);
  document.getElementById('referral-code').innerText = localStorage.getItem('rCode');
  codeGenerated = true;
}

if (localStorage.getItem('rCode') == null){
  generateRCode();
} else {
  document.getElementById('referral-code').innerText = localStorage.getItem('rCode');
}

// Copy text
var copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', function(event) {
  var refCode = document.querySelector('.r-code');
  var range = document.createRange();
  range.selectNode(refCode);
  window.getSelection().addRange(range);

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    // console.log('Copy email command was ' + msg);
    document.querySelector('.copy-msg').innerText = "copied successfully";
  } catch(err) {
    // console.log('Oops, unable to copy');
    document.querySelector('.copy-msg').innerText = "try again";
  }

  window.getSelection().removeAllRanges();
});

// Clear copy msg
function clearCopyMsg(){
  document.querySelector('.copy-msg').innerText = "";
}


// Network connection check
function checkConnection(){
  if(navigator.onLine){
    console.log('');
  } else {
    alert("Please check your internet connection.");
  }
}

// Check window location
function checkWindowLocation(){
  if (window.location.href.indexOf("#welcome-page") > -1){
    $.mobile.changePage($("#dashboard"));
  } else {
    // console.log('window checked.');
  }
}

window.setInterval(function(){
  checkWindowLocation();
}, 5000);
