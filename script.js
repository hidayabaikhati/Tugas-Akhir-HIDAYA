document.addEventListener("DOMContentLoaded", function() {
    
    loadProfiles();
  });
  
  function loadProfiles() {
    var profileTable = document.getElementById('profileTable');
  
   
    while (profileTable.rows.length > 1) {
      profileTable.deleteRow(1);
    }
  
    
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith('profile_')) {
        var data = JSON.parse(localStorage.getItem(key));
        addRowToTable(profileTable, data);
      }
    }
  }
  
  function addProfile() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
  
    
    var profile = {
      name: name,
      address: address,
      phone: phone
    };
  

    var key = 'profile_' + Date.now();
    localStorage.setItem(key, JSON.stringify(profile));
  

    var profileTable = document.getElementById('profileTable');
    addRowToTable(profileTable, profile);
  
   
    document.getElementById('addProfileForm').reset();
  }
  
  function addRowToTable(table, data) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.address;
    cell3.innerHTML = data.phone;
    cell4.innerHTML = '<button onclick="editProfile(\'' + data.name + '\')">Edit</button>';
    
  }
  
  function editProfile(name) {
    
    var key = getKeyByName(name);
    var data = JSON.parse(localStorage.getItem(key));
  
    
    document.getElementById('name').value = data.name;
    document.getElementById('address').value = data.address;
    document.getElementById('phone').value = data.phone;
  
   
    localStorage.removeItem(key);
  
    
    loadProfiles();
  }
  
  function getKeyByName(name) {
    
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith('profile_')) {
        var data = JSON.parse(localStorage.getItem(key));
        if (data.name === name) {
          return key;
        }
      }
    }
    return null;
  }
  